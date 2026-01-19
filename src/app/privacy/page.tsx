import { Metadata } from 'next';
import Link from 'next/link';
import styles from './privacy.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | Courtesy Flushers',
  description:
    'Privacy Policy for Courtesy Flushers - Learn how we collect, use, and protect your personal information when you use our portable toilet, plumbing, and septic services.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.privacyPage}>
      <div className='container'>
        {/* Page Header */}
        <header className={styles.pageHeader}>
          <h1>Privacy Policy</h1>
          <p>
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your personal information.
          </p>
          <div className={styles.lastUpdated}>
            <strong>Last Updated:</strong> August 26, 2025
          </div>
        </header>

        {/* Privacy Content */}
        <div className={styles.privacyContent}>
          {/* Introduction Section */}
          <section className={styles.section}>
            <h2>Introduction</h2>
            <p>
              Courtesy Flushers Inc. (&#34;we,&#34; &#34;our,&#34; or
              &#34;us&#34;) is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website, use our
              services, or interact with us in connection with our portable
              toilet rentals, plumbing services, and septic system maintenance.
            </p>
            <p>
              Please read this Privacy Policy carefully. By using our services
              or visiting our website, you agree to the collection and use of
              information in accordance with this policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section className={styles.section}>
            <h2>Information We Collect</h2>

            <h3>Personal Information</h3>
            <p>
              We may collect personally identifiable information, including:
            </p>
            <ul>
              <li>Name and contact information (phone, email, address)</li>
              <li>Billing and payment information</li>
              <li>Service location and property details</li>
              <li>Emergency contact information</li>
              <li>Communication preferences</li>
              <li>Service history and maintenance records</li>
            </ul>

            <h3>Non-Personal Information</h3>
            <p>We may also collect non-personal information such as:</p>
            <ul>
              <li>Website usage data and analytics</li>
              <li>Browser type and device information</li>
              <li>IP address and location data</li>
              <li>Service preferences and feedback</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className={styles.section}>
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li>
                <strong>Service Delivery:</strong> To provide portable toilet
                rentals, plumbing services, and septic system maintenance
              </li>
              <li>
                <strong>Communication:</strong> To respond to inquiries, provide
                quotes, and send service updates
              </li>
              <li>
                <strong>Scheduling:</strong> To coordinate service appointments
                and emergency responses
              </li>
              <li>
                <strong>Billing:</strong> To process payments and maintain
                financial records
              </li>
              <li>
                <strong>Safety:</strong> To ensure compliance with health and
                safety regulations
              </li>
              <li>
                <strong>Improvement:</strong> To enhance our services and
                customer experience
              </li>
              <li>
                <strong>Legal Compliance:</strong> To comply with applicable
                laws and regulations
              </li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className={styles.section}>
            <h2>How We Share Your Information</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to third parties except in the following
              circumstances:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Trusted partners who assist
                in our operations (payment processing, scheduling, etc.)
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law,
                regulation, or legal process
              </li>
              <li>
                <strong>Emergency Situations:</strong> To protect health,
                safety, or property
              </li>
              <li>
                <strong>Business Transfer:</strong> In the event of a merger,
                acquisition, or sale of assets
              </li>
            </ul>
            <p>
              All third parties are required to maintain the confidentiality of
              your information and use it only for specified purposes.
            </p>
          </section>

          {/* Data Security */}
          <section className={styles.section}>
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction. These measures include:
            </p>
            <ul>
              <li>Secure data transmission and storage protocols</li>
              <li>
                Limited access to personal information on a need-to-know basis
              </li>
              <li>Regular security assessments and updates</li>
              <li>Employee training on data protection practices</li>
            </ul>
            <p>
              However, no method of transmission over the internet or electronic
              storage is 100% secure. While we strive to protect your
              information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Your Rights and Choices */}
          <section className={styles.section}>
            <h2>Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul>
              <li>
                <strong>Access:</strong> Request copies of your personal
                information
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate
                information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your information
                (subject to legal requirements)
              </li>
              <li>
                <strong>Opt-out:</strong> Unsubscribe from marketing
                communications
              </li>
              <li>
                <strong>Portability:</strong> Request transfer of your data in a
                structured format
              </li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information
              provided below.
            </p>
          </section>

          {/* Retention */}
          <section className={styles.section}>
            <h2>Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to:
            </p>
            <ul>
              <li>Provide ongoing services and support</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>
                Maintain service and safety records as required by regulation
              </li>
            </ul>
            <p>
              Service records may be retained for extended periods as required
              by health and safety regulations governing plumbing and septic
              systems.
            </p>
          </section>

          {/* Third-Party Links */}
          <section className={styles.section}>
            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these external
              sites. We encourage you to review the privacy policies of any
              third-party sites you visit.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className={styles.section}>
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we make
              changes, we will update the &#34;Last Updated&#34; date at the top
              of this page. We encourage you to review this policy periodically
              to stay informed about how we protect your information.
            </p>
            <p>
              Significant changes will be communicated through our website or
              direct communication with our customers.
            </p>
          </section>

          {/* Contact Information */}
          <section className={styles.section}>
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <strong>Courtesy Flushers Inc.</strong>
                <p>Annapolis Valley, Nova Scotia</p>
              </div>
              <div className={styles.contactItem}>
                <strong>Phone:</strong>
                <p>
                  <a href='tel:+1-902-691-6616' className={styles.contactLink}>
                    (902) 691-6616
                  </a>
                </p>
              </div>
              <div className={styles.contactItem}>
                <strong>Email:</strong>
                <p>
                  <a
                    href='mailto:privacy@courtesyflushers.ca'
                    className={styles.contactLink}
                  >
                    privacy@courtesyflushers.ca
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <nav className={styles.pageNavigation}>
          <div className={styles.navLinks}>
            <Link href='/terms' className={styles.navLink}>
              Terms of Service
            </Link>
            <Link href='/contact' className={styles.navLink}>
              Contact Us
            </Link>
            <Link href='/' className={styles.navLink}>
              Return Home
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
