import Link from 'next/link';
import { Metadata } from 'next';
import styles from './services.module.css';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Comprehensive portable toilet and sanitation rental services across Maritime Canada. From construction sites to luxury events, we have the perfect solution.',
};

export default function ServicesPage() {
  return (
    <div className={styles.servicesPage}>
      <div className='container'>
        <header className={styles.pageHeader}>
          <h1>Our Services</h1>
          <p>
            Professional portable sanitation solutions tailored to your specific
            needs
          </p>
        </header>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceImage}>🚽</div>
            <div className={styles.serviceContent}>
              <h2>Portable Toilets</h2>
              <p>
                Clean, reliable portable toilet rentals perfect for construction
                sites, outdoor events, and temporary facilities.
              </p>

              <ul className={styles.serviceFeatures}>
                <li>Standard portable units</li>
                <li>Deluxe hand-washing stations</li>
                <li>ADA-compliant accessible units</li>
                <li>Regular cleaning and maintenance</li>
              </ul>

              <div className={styles.serviceActions}>
                <Link
                  href='/services/portable-toilets'
                  className={styles.primaryButton}
                >
                  Learn More
                </Link>
                {/* <Link
                  href="/quote?service=portable-toilets"
                  className={styles.secondaryButton}
                >
                  Get Quote
                </Link> */}
              </div>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceImage}>🪠</div>
            <div className={styles.serviceContent}>
              <h2>Plumbing Services</h2>
              <p>
                Professional plumbing for new construction, renovations, and
                repairs. Local knowledge with modern industry expertise.
              </p>

              <ul className={styles.serviceFeatures}>
                <li>New construction plumbing</li>
                <li>Bathroom & kitchen renovations</li>
                <li>Drain cleaning and repairs</li>
                <li>Emergency plumbing services</li>
              </ul>

              <div className={styles.serviceActions}>
                <Link
                  href='/services/plumbing'
                  className={styles.primaryButton}
                >
                  Learn More
                </Link>
                {/* <Link
                  href="/quote?service=plumbing"
                  className={styles.secondaryButton}
                >
                  Get Quote
                </Link> */}
              </div>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceImage}>🏗️</div>
            <div className={styles.serviceContent}>
              <h2>Septic Services</h2>
              <p>
                Complete septic solutions from pumping to installations.
                Licensed and insured septic professionals.
              </p>

              <ul className={styles.serviceFeatures}>
                <li>Septic pumping and maintenance</li>
                <li>Septic field pump replacement</li>
                <li>New septic installations</li>
                <li>System inspections and repairs</li>
              </ul>

              <div className={styles.serviceActions}>
                <Link href='/services/septic' className={styles.primaryButton}>
                  Learn More
                </Link>
                {/* <Link
                  href="/quote?service=septic"
                  className={styles.secondaryButton}
                >
                  Get Quote
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        <section className={styles.ctaSection}>
          <h2>Need Help Choosing the Right Service?</h2>
          <p>
            Our experienced team is here to help you find the perfect portable
            sanitation solution for your specific needs.
          </p>

          <div className={styles.ctaButtons}>
            <Link href='/contact' className={styles.ctaPrimary}>
              Contact Our Experts
            </Link>
            <a href='tel:+1-902-555-0123' className={styles.ctaSecondary}>
              📞 Call (902) 555-0123
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
