'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { ContactEmail } from '@/lib/email/contact-email';
import { headers } from 'next/headers';
import type React from 'react';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema with Zod
const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must not exceed 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'First name contains invalid characters'),
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must not exceed 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Last name contains invalid characters'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(100, 'Email must not exceed 100 characters'),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s()+\-x.]+$/.test(val),
      'Please enter a valid phone number'
    ),
  service: z.string().optional(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must not exceed 1000 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Rate limiting using in-memory cache (for production, use Vercel KV or Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const MAX_REQUESTS = 3; // Max 3 submissions per hour per IP

function checkRateLimit(identifier: string): {
  allowed: boolean;
  remaining: number;
  resetTime: number;
} {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  // Clean up old entries
  if (record && now > record.resetTime) {
    rateLimitMap.delete(identifier);
  }

  const existingRecord = rateLimitMap.get(identifier);

  if (!existingRecord) {
    // First request
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return {
      allowed: true,
      remaining: MAX_REQUESTS - 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    };
  }

  if (existingRecord.count >= MAX_REQUESTS) {
    // Rate limit exceeded
    return {
      allowed: false,
      remaining: 0,
      resetTime: existingRecord.resetTime,
    };
  }

  // Increment count
  existingRecord.count += 1;
  return {
    allowed: true,
    remaining: MAX_REQUESTS - existingRecord.count,
    resetTime: existingRecord.resetTime,
  };
}

type FormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
  rateLimitInfo?: {
    remaining: number;
    resetTime: number;
  };
};

export async function submitContactForm(
  prevState: FormState | null,
  formData: FormData
): Promise<FormState> {
  try {
    // Get client IP for rate limiting
    const headersList = await headers();
    const forwardedFor = headersList.get('x-forwarded-for');
    const realIp = headersList.get('x-real-ip');
    const clientIp = forwardedFor?.split(',')[0] || realIp || 'unknown';

    // Check rate limit
    const rateLimitCheck = checkRateLimit(clientIp);
    if (!rateLimitCheck.allowed) {
      const resetDate = new Date(rateLimitCheck.resetTime);
      return {
        success: false,
        message: `Too many requests. Please try again after ${resetDate.toLocaleTimeString()}.`,
        rateLimitInfo: {
          remaining: rateLimitCheck.remaining,
          resetTime: rateLimitCheck.resetTime,
        },
      };
    }

    // Extract and validate form data
    const rawFormData = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
    };

    // Validate with Zod
    const validationResult = contactFormSchema.safeParse(rawFormData);

    if (!validationResult.success) {
      const errors = validationResult.error.flatten().fieldErrors;
      return {
        success: false,
        message: 'Please correct the errors in the form.',
        errors: errors as Record<string, string[]>,
      };
    }

    const validatedData = validationResult.data;

    // Security: Sanitize data (basic XSS prevention)
    const sanitizedData = {
      firstName: validatedData.firstName.trim(),
      lastName: validatedData.lastName.trim(),
      email: validatedData.email.trim().toLowerCase(),
      phone: validatedData.phone?.trim(),
      service: validatedData.service?.trim() || '',
      message: validatedData.message.trim(),
    };

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return {
        success: false,
        message:
          'Email service is not configured. Please contact us directly at info@courtesyflushers.ca',
      };
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Replace with your verified domain
      to: process.env.CONTACT_EMAIL || 'info@courtesyflushers.ca',
      replyTo: sanitizedData.email,
      subject: `New Contact Form Submission from ${sanitizedData.firstName} ${sanitizedData.lastName}`,
      react: ContactEmail(sanitizedData) as React.ReactElement,
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        success: false,
        message:
          'Failed to send your message. Please try again or contact us directly.',
      };
    }

    console.log('Email sent successfully:', data);

    return {
      success: true,
      message:
        'Thank you for contacting us! We will get back to you within 24 hours.',
      rateLimitInfo: {
        remaining: rateLimitCheck.remaining,
        resetTime: rateLimitCheck.resetTime,
      },
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      message:
        'An unexpected error occurred. Please try again or contact us directly.',
    };
  }
}
