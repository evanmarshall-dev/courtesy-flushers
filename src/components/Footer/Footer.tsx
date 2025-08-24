import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Company Info */}
          <div className={styles.company}>
            <div className={styles.logo}>
              <Image
                src="/icons/logo.svg"
                alt="Courtesy Flushers"
                width={160}
                height={48}
                quality={100}
              />
            </div>
            <p className={styles.tagline}>Courteous Service, Clean Solutions</p>
            <p className={styles.description}>
              Serving Maritime Canada with reliable, professional portable
              sanitation solutions for construction sites, special events, and
              everything in between.
            </p>
          </div>

          {/* Services */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Services</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/services/portable-toilets" className={styles.link}>
                  Portable Toilets
                </Link>
              </li>
              <li>
                <Link href="/services/luxury-trailers" className={styles.link}>
                  Luxury Trailers
                </Link>
              </li>
              <li>
                <Link href="/services/construction" className={styles.link}>
                  Construction Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/events" className={styles.link}>
                  Special Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Company</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/about" className={styles.link}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/why-us" className={styles.link}>
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className={styles.link}>
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/gallery" className={styles.link}>
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Contact</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <strong>Phone:</strong>
                <a href="tel:+1-902-555-0123" className={styles.contactLink}>
                  (902) 555-0123
                </a>
              </div>
              <div className={styles.contactItem}>
                <strong>Emergency:</strong>
                <a href="tel:+1-902-555-0199" className={styles.contactLink}>
                  (902) 555-0199
                </a>
              </div>
              <div className={styles.contactItem}>
                <strong>Email:</strong>
                <a
                  href="mailto:info@courtesyflushers.ca"
                  className={styles.contactLink}
                >
                  info@courtesyflushers.ca
                </a>
              </div>
              <div className={styles.contactItem}>
                <strong>Service Area:</strong>
                <span>Maritime Canada</span>
              </div>
            </div>

            <div className={styles.ctaButtons}>
              <Link href="/quote" className={styles.quoteButton}>
                Get Quote
              </Link>
              <a href="tel:+1-902-555-0123" className={styles.callButton}>
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {currentYear} Courtesy Flushers. All rights reserved.
            </p>
            <p className={styles.copyright}>
              Carefully crafted by{" "}
              <a href="https://www.evanmarshall.dev" className={styles.link}>
                evanmarshall.dev
              </a>
            </p>
            <div className={styles.bottomLinks}>
              <Link href="/privacy" className={styles.bottomLink}>
                Privacy Policy
              </Link>
              <Link href="/terms" className={styles.bottomLink}>
                Terms of Service
              </Link>
              <Link href="/contact" className={styles.bottomLink}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
