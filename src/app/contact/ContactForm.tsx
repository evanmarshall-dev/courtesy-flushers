'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { submitContactForm } from './actions';
import styles from './contact.module.css';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      disabled={pending}
      className={styles.submitButton}
      style={{
        opacity: pending ? 0.7 : 1,
        cursor: pending ? 'not-allowed' : 'pointer',
      }}
    >
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      // Reset form on success
      formRef.current?.reset();

      // Scroll to success message
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [state?.success]);

  return (
    <div className={styles.contactForm}>
      <div className={styles.formCard}>
        <h2>Send Us a Message</h2>
        <p>
          Ready to get started? Fill out the form below and we&apos;ll get back
          to you with a free quote.
        </p>

        {/* Success/Error Messages */}
        {state?.message && (
          <div
            className={styles.formMessage}
            style={{
              padding: '1rem',
              marginBottom: '1.5rem',
              borderRadius: '0.5rem',
              backgroundColor: state.success ? '#dcfce7' : '#fee2e2',
              border: `1px solid ${state.success ? '#86efac' : '#fca5a5'}`,
              color: state.success ? '#166534' : '#991b1b',
            }}
            role='alert'
          >
            <strong>{state.success ? '✓ Success!' : '⚠ Error'}</strong>
            <p style={{ margin: '0.5rem 0 0 0' }}>{state.message}</p>
            {state.rateLimitInfo && state.rateLimitInfo.remaining <= 1 && (
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.875rem' }}>
                {state.rateLimitInfo.remaining} submission
                {state.rateLimitInfo.remaining !== 1 ? 's' : ''} remaining in
                this hour.
              </p>
            )}
          </div>
        )}

        {/* Form Errors */}
        {state?.errors && Object.keys(state.errors).length > 0 && (
          <div
            className={styles.formErrors}
            style={{
              padding: '1rem',
              marginBottom: '1.5rem',
              borderRadius: '0.5rem',
              backgroundColor: '#fee2e2',
              border: '1px solid #fca5a5',
              color: '#991b1b',
            }}
            role='alert'
          >
            <strong>Please fix the following errors:</strong>
            <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.25rem' }}>
              {Object.entries(state.errors).map(([field, messages]) => (
                <li key={field}>{messages.join(', ')}</li>
              ))}
            </ul>
          </div>
        )}

        <form ref={formRef} action={formAction} className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor='firstName'>
                First Name <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                required
                maxLength={50}
                className={styles.formInput}
                aria-invalid={state?.errors?.firstName ? 'true' : 'false'}
                aria-describedby={
                  state?.errors?.firstName ? 'firstName-error' : undefined
                }
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor='lastName'>
                Last Name <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                required
                maxLength={50}
                className={styles.formInput}
                aria-invalid={state?.errors?.lastName ? 'true' : 'false'}
                aria-describedby={
                  state?.errors?.lastName ? 'lastName-error' : undefined
                }
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor='email'>
                Email Address <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type='email'
                id='email'
                name='email'
                required
                maxLength={100}
                className={styles.formInput}
                aria-invalid={state?.errors?.email ? 'true' : 'false'}
                aria-describedby={
                  state?.errors?.email ? 'email-error' : undefined
                }
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor='phone'>Phone Number</label>
              <input
                type='tel'
                id='phone'
                name='phone'
                className={styles.formInput}
                placeholder='(902) 555-0123'
                aria-invalid={state?.errors?.phone ? 'true' : 'false'}
                aria-describedby={
                  state?.errors?.phone ? 'phone-error' : undefined
                }
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor='service'>Service Needed</label>
            <select id='service' name='service' className={styles.formSelect}>
              <option value=''>Select a service...</option>
              <option value='portable-toilets'>Portable Toilets</option>
              <option value='plumbing'>Plumbing Services</option>
              <option value='septic-pumping'>Septic Pumping</option>
              <option value='septic-installation'>Septic Installation</option>
              <option value='emergency'>Emergency Service</option>
              <option value='other'>Other</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor='message'>
              Message <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <textarea
              id='message'
              name='message'
              rows={6}
              required
              minLength={10}
              maxLength={1000}
              placeholder='Please describe your project or service needs...'
              className={styles.formTextarea}
              aria-invalid={state?.errors?.message ? 'true' : 'false'}
              aria-describedby={
                state?.errors?.message ? 'message-error' : undefined
              }
            />
            <div
              style={{
                fontSize: '0.875rem',
                color: '#64748b',
                marginTop: '0.25rem',
              }}
            >
              Minimum 10 characters, maximum 1000 characters
            </div>
          </div>

          <SubmitButton />
        </form>
      </div>
    </div>
  );
}
