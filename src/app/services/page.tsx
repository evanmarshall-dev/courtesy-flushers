import Link from "next/link";
import { Metadata } from "next";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Our Services - Professional Portable Sanitation Solutions",
  description:
    "Comprehensive portable toilet and sanitation rental services across Maritime Canada. From construction sites to luxury events, we have the perfect solution.",
};

export default function ServicesPage() {
  return (
    <div className={styles.servicesPage}>
      <div className="container">
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
                  href="/services/portable-toilets"
                  className={styles.primaryButton}
                >
                  Learn More
                </Link>
                <Link
                  href="/quote?service=portable-toilets"
                  className={styles.secondaryButton}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceImage}>✨</div>
            <div className={styles.serviceContent}>
              <h2>Luxury Restroom Trailers</h2>
              <p>
                Elegant, spacious restroom trailers that provide comfort and
                style for your special occasions.
              </p>

              <ul className={styles.serviceFeatures}>
                <li>Climate-controlled interiors</li>
                <li>Running water and flushing toilets</li>
                <li>Luxury finishes and lighting</li>
                <li>Perfect for weddings and events</li>
              </ul>

              <div className={styles.serviceActions}>
                <Link
                  href="/services/luxury-trailers"
                  className={styles.primaryButton}
                >
                  Learn More
                </Link>
                <Link
                  href="/quote?service=luxury-trailers"
                  className={styles.secondaryButton}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceImage}>🏗️</div>
            <div className={styles.serviceContent}>
              <h2>Construction Solutions</h2>
              <p>
                Comprehensive sanitation solutions designed specifically for
                construction and industrial sites.
              </p>

              <ul className={styles.serviceFeatures}>
                <li>Long-term rental packages</li>
                <li>Site planning and consultation</li>
                <li>Regular servicing schedules</li>
                <li>Bulk pricing for multiple units</li>
              </ul>

              <div className={styles.serviceActions}>
                <Link
                  href="/services/construction"
                  className={styles.primaryButton}
                >
                  Learn More
                </Link>
                <Link
                  href="/quote?service=construction"
                  className={styles.secondaryButton}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceImage}>🎉</div>
            <div className={styles.serviceContent}>
              <h2>Special Events</h2>
              <p>
                Custom portable sanitation solutions for weddings, festivals,
                and special occasions of all sizes.
              </p>

              <ul className={styles.serviceFeatures}>
                <li>Wedding and party rentals</li>
                <li>Festival and fair services</li>
                <li>Corporate event solutions</li>
                <li>Custom delivery and setup</li>
              </ul>

              <div className={styles.serviceActions}>
                <Link href="/services/events" className={styles.primaryButton}>
                  Learn More
                </Link>
                <Link
                  href="/quote?service=events"
                  className={styles.secondaryButton}
                >
                  Get Quote
                </Link>
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
            <Link href="/contact" className={styles.ctaPrimary}>
              Contact Our Experts
            </Link>
            <a href="tel:+1-902-555-0123" className={styles.ctaSecondary}>
              📞 Call (902) 555-0123
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
