# Contact Form Setup Guide

## Overview

The contact form uses modern Next.js Server Actions with the following features:

- ✅ Server-side validation with Zod
- ✅ Rate limiting (3 submissions per hour per IP)
- ✅ Email sending via Resend
- ✅ XSS protection and input sanitization
- ✅ Accessible form with ARIA attributes
- ✅ Professional HTML email template

## Setup Instructions

### 1. Get a Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Verify your email
3. Go to [API Keys](https://resend.com/api-keys)
4. Create a new API key
5. Copy the key (starts with `re_`)

### 2. Configure Environment Variables

Create a `.env.local` file in your project root:

```bash
# Copy the example file
cp .env.example .env.local
```

Add your Resend API key:

```env
RESEND_API_KEY=re_your_actual_api_key_here
CONTACT_EMAIL=info@courtesyflushers.ca
NEXT_PUBLIC_SITE_URL=https://www.courtesyflushers.ca
```

### 3. Verify Your Domain (Production)

For production, you need to verify your sending domain:

1. Go to [Resend Domains](https://resend.com/domains)
2. Add your domain (e.g., `courtesyflushers.ca`)
3. Add the required DNS records to your domain provider
4. Wait for verification (usually a few minutes)

Update the `from` address in `/src/app/contact/actions.ts`:

```typescript
from: 'Contact Form <noreply@courtesyflushers.ca>', // Use your verified domain
```

### 4. Test Locally

```bash
pnpm dev
```

Navigate to http://localhost:3000/contact and test the form.

## Features Explained

### Security Measures

1. **Server Actions**: All form processing happens server-side
2. **Input Validation**: Zod schema validates all inputs
3. **Rate Limiting**: 3 submissions per hour per IP address
4. **XSS Prevention**: All inputs are sanitized and trimmed
5. **CSRF Protection**: Built-in Next.js CSRF protection for Server Actions
6. **Type Safety**: Full TypeScript coverage

### Rate Limiting

Current implementation uses in-memory storage. For production with multiple servers, consider:

#### Option A: Vercel KV (Redis) - Recommended for Vercel

```bash
pnpm add @vercel/kv
```

Update `actions.ts`:

```typescript
import { kv } from '@vercel/kv';

async function checkRateLimit(identifier: string) {
  const key = `rate-limit:${identifier}`;
  const count = await kv.incr(key);

  if (count === 1) {
    await kv.expire(key, 3600); // 1 hour
  }

  return {
    allowed: count <= MAX_REQUESTS,
    remaining: Math.max(0, MAX_REQUESTS - count),
  };
}
```

#### Option B: Upstash Redis

```bash
pnpm add @upstash/redis
```

### Email Template Customization

Edit [src/lib/email/contact-email.tsx](src/lib/email/contact-email.tsx) to customize:

- Colors and branding
- Logo (add your company logo)
- Footer content
- Email structure

### Form Validation Rules

Current validation (in [src/app/contact/actions.ts](src/app/contact/actions.ts)):

```typescript
- First/Last Name: 2-50 characters, letters only
- Email: Valid email format, max 100 characters
- Phone: Optional, digits and common phone characters
- Message: 10-1000 characters
```

## Deployment to Vercel

### 1. Add Environment Variables

In your Vercel project dashboard:

1. Go to Settings → Environment Variables
2. Add all variables from `.env.local`
3. Apply to Production, Preview, and Development environments

### 2. Deploy

```bash
git add .
git commit -m "feat: Add contact form with email functionality"
git push
```

Vercel will automatically deploy.

### 3. Test Production

1. Visit your production URL
2. Submit the contact form
3. Check your email inbox

## Troubleshooting

### Email Not Sending

1. **Check API Key**: Verify `RESEND_API_KEY` is set correctly
2. **Check Logs**: View server logs in Vercel dashboard
3. **Domain Verification**: Ensure domain is verified for production
4. **Rate Limit**: Check if rate limit is exceeded

### Form Not Submitting

1. **Check Browser Console**: Look for JavaScript errors
2. **Check Network Tab**: Verify the form action is being called
3. **Validation Errors**: Check if validation is failing

### Rate Limit Too Strict

Adjust in [src/app/contact/actions.ts](src/app/contact/actions.ts):

```typescript
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // Time window
const MAX_REQUESTS = 3; // Max requests per window
```

## Testing Email Templates

Test your email template locally:

```typescript
import { ContactEmail } from '@/lib/email/contact-email';
import { render } from '@react-email/render';

const html = render(
  ContactEmail({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '902-555-0123',
    service: 'plumbing',
    message: 'Test message',
  })
);

console.log(html);
```

## Cost Considerations

Resend pricing (as of 2024):

- **Free Tier**: 100 emails/day, 3,000 emails/month
- **Pro Plan**: $20/month for 50,000 emails

For most contact forms, the free tier is sufficient.

## Security Best Practices

1. ✅ Never expose API keys in client-side code
2. ✅ Always validate on the server
3. ✅ Implement rate limiting
4. ✅ Sanitize user inputs
5. ✅ Use environment variables for sensitive data
6. ✅ Monitor for spam and abuse

## Advanced Features (Optional)

### Add Spam Protection

Consider adding honeypot field:

```tsx
{
  /* Hidden honeypot field */
}
<input
  type='text'
  name='website'
  style={{ display: 'none' }}
  tabIndex={-1}
  autoComplete='off'
/>;
```

Server-side:

```typescript
if (formData.get('website')) {
  return { success: false, message: 'Spam detected' };
}
```

### Add Google reCAPTCHA

1. Get keys from [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
2. Install: `pnpm add react-google-recaptcha`
3. Add to form component
4. Verify token server-side

## Support

For issues or questions:

- Resend Docs: https://resend.com/docs
- Next.js Server Actions: https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
