import * as React from 'react';

interface ContactEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export const ContactEmail: React.FC<ContactEmailProps> = ({
  firstName,
  lastName,
  email,
  phone,
  service,
  message,
}) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundColor: '#f4f4f4' }}>
        <table width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#f4f4f4', padding: '20px' }}>
          <tr>
            <td align="center">
              <table width="600" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#ffffff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                {/* Header */}
                <tr>
                  <td style={{ backgroundColor: '#2563eb', padding: '30px', textAlign: 'center' }}>
                    <h1 style={{ color: '#ffffff', margin: 0, fontSize: '24px' }}>
                      New Contact Form Submission
                    </h1>
                    <p style={{ color: '#e0e7ff', margin: '10px 0 0 0', fontSize: '14px' }}>
                      Courtesy Flushers Inc.
                    </p>
                  </td>
                </tr>

                {/* Content */}
                <tr>
                  <td style={{ padding: '40px 30px' }}>
                    <p style={{ fontSize: '16px', color: '#333333', marginTop: 0 }}>
                      You&apos;ve received a new inquiry from your website contact form.
                    </p>

                    {/* Contact Information */}
                    <table width="100%" cellPadding="12" cellSpacing="0" style={{ marginTop: '20px' }}>
                      <tr>
                        <td style={{ backgroundColor: '#f8fafc', padding: '15px', borderLeft: '4px solid #2563eb' }}>
                          <strong style={{ color: '#1e293b', fontSize: '14px' }}>Name:</strong>
                          <p style={{ margin: '5px 0 0 0', color: '#334155', fontSize: '16px' }}>
                            {firstName} {lastName}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ backgroundColor: '#f8fafc', padding: '15px', borderLeft: '4px solid #2563eb' }}>
                          <strong style={{ color: '#1e293b', fontSize: '14px' }}>Email:</strong>
                          <p style={{ margin: '5px 0 0 0', color: '#334155', fontSize: '16px' }}>
                            <a href={`mailto:${email}`} style={{ color: '#2563eb', textDecoration: 'none' }}>
                              {email}
                            </a>
                          </p>
                        </td>
                      </tr>
                      {phone && (
                        <tr>
                          <td style={{ backgroundColor: '#f8fafc', padding: '15px', borderLeft: '4px solid #2563eb' }}>
                            <strong style={{ color: '#1e293b', fontSize: '14px' }}>Phone:</strong>
                            <p style={{ margin: '5px 0 0 0', color: '#334155', fontSize: '16px' }}>
                              <a href={`tel:${phone}`} style={{ color: '#2563eb', textDecoration: 'none' }}>
                                {phone}
                              </a>
                            </p>
                          </td>
                        </tr>
                      )}
                      <tr>
                        <td style={{ backgroundColor: '#f8fafc', padding: '15px', borderLeft: '4px solid #2563eb' }}>
                          <strong style={{ color: '#1e293b', fontSize: '14px' }}>Service Interested In:</strong>
                          <p style={{ margin: '5px 0 0 0', color: '#334155', fontSize: '16px' }}>
                            {service === 'portable-toilets' && 'Portable Toilets'}
                            {service === 'plumbing' && 'Plumbing Services'}
                            {service === 'septic-pumping' && 'Septic Pumping'}
                            {service === 'septic-installation' && 'Septic Installation'}
                            {service === 'emergency' && 'Emergency Service'}
                            {service === 'other' && 'Other'}
                            {!service && 'Not Specified'}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ backgroundColor: '#f8fafc', padding: '15px', borderLeft: '4px solid #2563eb' }}>
                          <strong style={{ color: '#1e293b', fontSize: '14px' }}>Message:</strong>
                          <p style={{ margin: '10px 0 0 0', color: '#334155', fontSize: '16px', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
                            {message}
                          </p>
                        </td>
                      </tr>
                    </table>

                    {/* Action Button */}
                    <div style={{ marginTop: '30px', textAlign: 'center' }}>
                      <a
                        href={`mailto:${email}?subject=Re: Your inquiry to Courtesy Flushers`}
                        style={{
                          display: 'inline-block',
                          padding: '12px 30px',
                          backgroundColor: '#2563eb',
                          color: '#ffffff',
                          textDecoration: 'none',
                          borderRadius: '6px',
                          fontSize: '16px',
                          fontWeight: 'bold',
                        }}
                      >
                        Reply to {firstName}
                      </a>
                    </div>
                  </td>
                </tr>

                {/* Footer */}
                <tr>
                  <td style={{ backgroundColor: '#f8fafc', padding: '20px 30px', borderTop: '1px solid #e2e8f0' }}>
                    <p style={{ margin: 0, fontSize: '12px', color: '#64748b', textAlign: 'center' }}>
                      This email was sent from your website contact form at courtesyflushers.ca
                    </p>
                    <p style={{ margin: '10px 0 0 0', fontSize: '12px', color: '#94a3b8', textAlign: 'center' }}>
                      Courtesy Flushers Inc. - Annapolis Valley, Nova Scotia
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  );
};
