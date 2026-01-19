import { Metadata } from 'next';
import Link from 'next/link';
import styles from './terms.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service | Courtesy Flushers',
  description:
    'Terms of Service for Courtesy Flushers - Read our terms and conditions for portable toilet rentals, plumbing services, and septic system maintenance across Nova Scotia.',
};

export default function TermsOfServicePage() {
  return (
    <div className={styles.termsPage}>
      <div className='container'>
        {/* Page Header */}
        <header className={styles.pageHeader}>
          <h1>Terms of Service</h1>
          <p>
            Please read these terms and conditions carefully before using our
            services or website.
          </p>
          <div className={styles.lastUpdated}>
            <strong>Last Updated:</strong> August 26, 2025
          </div>
        </header>

        {/* Terms Content */}
        <div className={styles.termsContent}>
          {/* Acceptance of Terms */}
          <section className={styles.section}>
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using the services provided by Courtesy Flushers
              Inc. (&#34;Company,&#34; &#34;we,&#34; &#34;our,&#34; or
              &#34;us&#34;), including portable toilet rentals, plumbing
              services, and septic system maintenance, you (&#34;Customer,&#34;
              &#34;you,&#34; or &#34;your&#34;) agree to be bound by these Terms
              of Service (&#34;Terms&#34;).
            </p>
            <p>
              If you do not agree to these Terms, please do not use our services
              or access our website.
            </p>
          </section>

          {/* Services Description */}
          <section className={styles.section}>
            <h2>Services Description</h2>
            <p>Courtesy Flushers Inc. provides the following services:</p>
            <ul>
              <li>
                <strong>Portable Toilet Rentals:</strong> Short-term and
                long-term rental of portable sanitation units for events,
                construction sites, and other applications
              </li>
              <li>
                <strong>Plumbing Services:</strong> Residential and commercial
                plumbing installation, repair, and maintenance
              </li>
              <li>
                <strong>Septic System Services:</strong> Installation, pumping,
                maintenance, and repair of septic systems
              </li>
              <li>
                <strong>Emergency Services:</strong> 24/7 emergency response for
                plumbing and septic system issues
              </li>
            </ul>
          </section>

          {/* Service Terms and Conditions */}
          <section className={styles.section}>
            <h2>Service Terms and Conditions</h2>

            <h3>Portable Toilet Rentals</h3>
            <ul>
              <li>
                Rental periods begin on the delivery date and end on the pickup
                date
              </li>
              <li>
                Regular service and cleaning are included in rental rates as
                specified in your service agreement
              </li>
              <li>
                Customer is responsible for providing safe and accessible
                placement locations
              </li>
              <li>
                Damage to units due to misuse, vandalism, or negligence will
                result in repair or replacement charges
              </li>
              <li>
                Units must be returned in rentable condition, normal wear
                excluded
              </li>
            </ul>

            <h3>Plumbing and Septic Services</h3>
            <ul>
              <li>
                All work will be performed in accordance with applicable
                building codes and regulations
              </li>
              <li>
                Permits, when required, are the responsibility of the customer
                unless otherwise specified
              </li>
              <li>Access to work areas must be provided by the customer</li>
              <li>
                Customer is responsible for marking utility locations before
                work begins
              </li>
              <li>
                Emergency service rates may apply for after-hours, weekend, and
                holiday calls
              </li>
            </ul>
          </section>

          {/* Pricing and Payment */}
          <section className={styles.section}>
            <h2>Pricing and Payment</h2>
            <ul>
              <li>All prices are subject to applicable taxes and fees</li>
              <li>Payment terms are net 30 days unless otherwise specified</li>
              <li>Late payment charges may apply to overdue accounts</li>
              <li>Emergency services may require payment at time of service</li>
              <li>Prices are subject to change with reasonable notice</li>
              <li>
                Additional charges may apply for difficult access locations,
                overtime work, or special circumstances
              </li>
            </ul>
          </section>

          {/* Customer Responsibilities */}
          <section className={styles.section}>
            <h2>Customer Responsibilities</h2>
            <p>The customer agrees to:</p>
            <ul>
              <li>
                Provide accurate information regarding service locations and
                requirements
              </li>
              <li>
                Ensure safe and legal access to work sites and equipment
                locations
              </li>
              <li>Mark underground utilities and inform us of known hazards</li>
              <li>Obtain necessary permits and approvals when required</li>
              <li>
                Protect our equipment and personnel from theft, vandalism, and
                damage
              </li>
              <li>
                Comply with all applicable laws, regulations, and safety
                requirements
              </li>
              <li>Provide timely notice of service changes or cancellations</li>
            </ul>
          </section>

          {/* Safety and Compliance */}
          <section className={styles.section}>
            <h2>Safety and Compliance</h2>
            <p>Safety is our top priority. We are committed to:</p>
            <ul>
              <li>Maintaining all equipment to industry safety standards</li>
              <li>
                Following all applicable health, safety, and environmental
                regulations
              </li>
              <li>Providing proper training to all personnel</li>
              <li>Using environmentally responsible practices and materials</li>
            </ul>
            <p>
              Customers must ensure work sites are safe and comply with all
              applicable safety regulations. We reserve the right to stop work
              if unsafe conditions are present.
            </p>
          </section>

          {/* Limitations and Warranties */}
          <section className={styles.section}>
            <h2>Warranties and Limitations</h2>
            <p>
              We warrant our services to be performed in a workmanlike manner
              using industry-standard practices. Our liability is limited to:
            </p>
            <ul>
              <li>
                Repair or re-performance of defective work at no additional cost
              </li>
              <li>Replacement of defective equipment or materials</li>
              <li>
                Total liability not exceeding the amount paid for services
              </li>
            </ul>
            <p>
              We are not liable for consequential, indirect, or punitive
              damages. Some limitations may not apply in all jurisdictions.
            </p>
          </section>

          {/* Cancellation and Refund Policy */}
          <section className={styles.section}>
            <h2>Cancellation and Refund Policy</h2>

            <h3>Service Cancellations</h3>
            <ul>
              <li>
                <strong>24+ hours notice:</strong> Full refund or reschedule
              </li>
              <li>
                <strong>Same day cancellation:</strong> 50% cancellation fee may
                apply
              </li>
              <li>
                <strong>Emergency services:</strong> No refund once technician
                is dispatched
              </li>
            </ul>

            <h3>Equipment Rentals</h3>
            <ul>
              <li>
                Delivery fees are non-refundable once delivery is attempted
              </li>
              <li>
                Rental fees are prorated for early pickup with 24-hour notice
              </li>
              <li>
                Setup and removal fees apply regardless of rental duration
              </li>
            </ul>
          </section>

          {/* Privacy and Data Protection */}
          <section className={styles.section}>
            <h2>Privacy and Data Protection</h2>
            <p>
              Your privacy is important to us. Please review our{' '}
              <Link href='/privacy' className={styles.policyLink}>
                Privacy Policy
              </Link>{' '}
              for information about how we collect, use, and protect your
              personal information.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section className={styles.section}>
            <h2>Dispute Resolution</h2>
            <p>
              In the event of a dispute, we encourage direct communication to
              resolve issues promptly and fairly. If a resolution cannot be
              reached:
            </p>
            <ul>
              <li>
                Disputes will be governed by the laws of Nova Scotia, Canada
              </li>
              <li>Legal proceedings must be brought in Nova Scotia courts</li>
              <li>Mediation may be required before legal action</li>
            </ul>
          </section>

          {/* Changes to Terms */}
          <section className={styles.section}>
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes
              will be effective upon posting to our website. Continued use of
              our services constitutes acceptance of modified terms.
            </p>
            <p>
              Significant changes will be communicated to customers through our
              website or direct communication.
            </p>
          </section>

          {/* Contact Information */}
          <section className={styles.section}>
            <h2>Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us:
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
                    href='mailto:legal@courtesyflushers.ca'
                    className={styles.contactLink}
                  >
                    legal@courtesyflushers.ca
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Severability */}
          <section className={styles.section}>
            <h2>Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or
              invalid, the remaining provisions will continue in full force and
              effect. The unenforceable provision will be modified to the
              minimum extent necessary to make it enforceable.
            </p>
          </section>
        </div>

        {/* Navigation */}
        <nav className={styles.pageNavigation}>
          <div className={styles.navLinks}>
            <Link href='/privacy' className={styles.navLink}>
              Privacy Policy
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
