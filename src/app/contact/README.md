# Contact Page Documentation

## Current Status

The contact page is **currently using direct contact links** (phone & email) instead of a form submission system.

### Why?

The contact form requires a Resend API key to send emails, which needs to be configured with environment variables. Until that's set up, the page displays prominent call-to-action buttons for phone and email contact.

## Current Implementation

The contact page now features:

- ✅ **Direct phone contact button** - `tel:` link to (902) 691-6616
- ✅ **Direct email contact button** - `mailto:` link to <info@courtesyflushers.ca>
- ✅ **24/7 availability notice**
- ✅ **All original contact information** (address, hours, service area)
- ✅ **Fully functional without any backend configuration**

## Re-enabling the Contact Form

When you're ready to enable email submissions through the form:

### 1. Get a Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Verify your email
3. Go to [API Keys](https://resend.com/api-keys)
4. Create a new API key
5. Copy the key (starts with `re_`)

### 2. Configure Environment Variables

Create/update `.env.local` in the project root:

```env
RESEND_API_KEY=re_your_actual_api_key_here
CONTACT_EMAIL=info@courtesyflushers.ca
NEXT_PUBLIC_SITE_URL=https://www.courtesyflushers.ca
```

### 3. Update the Code

In [page.tsx](page.tsx):

**Uncomment line 5:**

```tsx
import ContactForm from './ContactForm';
```

**Replace the direct contact section (lines ~109-148) with:**

```tsx
{
  /* Contact Form */
}
<ContactForm />;
```

### 4. Verify Your Domain (Production Only)

For production deployments:

1. Go to [Resend Domains](https://resend.com/domains)
2. Add your domain (`courtesyflushers.ca`)
3. Add the required DNS records to your domain provider
4. Wait for verification (usually a few minutes)

Then update the `from` address in [actions.ts](actions.ts#L183):

```typescript
from: 'Contact Form <noreply@courtesyflushers.ca>',
```

### 5. Test

```bash
pnpm dev
```

Navigate to [http://localhost:3000/contact](http://localhost:3000/contact) and test the form.

## Files Overview

- **[page.tsx](page.tsx)** - Main contact page layout (ContactForm currently commented out)
- **[ContactForm.tsx](ContactForm.tsx)** - Form component with React 19 features (preserved but inactive)
- **[actions.ts](actions.ts)** - Server action for form submission with validation and rate limiting
- **[contact.module.css](contact.module.css)** - Styles for contact page and forms
- **[/lib/email/contact-email.tsx](../../lib/email/contact-email.tsx)** - Email template component

## Features of the Full Form (when enabled)

- ✅ Server-side validation with Zod
- ✅ Rate limiting (3 submissions per hour per IP)
- ✅ Professional HTML email template
- ✅ XSS protection and input sanitization
- ✅ Accessible with ARIA attributes
- ✅ Real-time validation feedback
- ✅ Success/error messages
- ✅ Form reset on successful submission

See [CONTACT_FORM_SETUP.md](../../CONTACT_FORM_SETUP.md) for complete setup documentation.
