import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role='contentinfo'>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Company Info */}
          <div className={styles.company}>
            <div className={styles.logo}>
              <Image
                src='/icons/logo.svg'
                alt='Courtesy Flushers'
                width={160}
                height={48}
                quality={100}
              />
            </div>
            <p className={styles.tagline}>Your Business is our Business</p>
            <p className={styles.description}>
              Nova Scotia&apos;s premier portable sanitation service. From new
              home constructions to renovations and special events, we do it
              all!
            </p>
          </div>

          {/* Services */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Services</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href='/services/portable-toilets' className={styles.link}>
                  Portable Toilets
                </Link>
              </li>
              <li>
                <Link href='/services/plumbing' className={styles.link}>
                  Plumbing
                </Link>
              </li>
              <li>
                <Link href='/services/septic' className={styles.link}>
                  Septic Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Company</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href='/about' className={styles.link}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='/#why-choose-us' className={styles.link}>
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href='/contact#service-area' className={styles.link}>
                  Service Area
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
                <a href='tel:+1-902-691-6616' className={styles.contactLink}>
                  (902) 691-6616
                </a>
              </div>
              <div className={styles.contactItem}>
                <strong>Emergency:</strong>
                <a href='tel:+1-902-555-0199' className={styles.contactLink}>
                  (902) 555-0199
                </a>
              </div>
              <div className={styles.contactItem}>
                <strong>Email:</strong>
                <a
                  href='mailto:info@courtesyflushers.ca'
                  className={styles.contactLink}
                >
                  info@courtesyflushers.ca
                </a>
              </div>
              <div className={styles.contactItem}>
                <strong>Service Area:</strong>
                <span>Nova Scotia</span>
              </div>
            </div>

            <div className={styles.ctaButtons}>
              {/* <Link href="/quote" className={styles.quoteButton}>
                Get Quote
              </Link> */}
              <a href='tel:+1-902-691-6616' className={styles.callButton}>
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
              Carefully crafted by{' '}
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.evanmarshall.dev'
                className={styles.link}
              >
                evanmarshall.dev
              </a>
            </p>
            <div className={styles.bottomLinks}>
              <Link href='/privacy' className={styles.bottomLink}>
                Privacy Policy
              </Link>
              <Link href='/terms' className={styles.bottomLink}>
                Terms of Service
              </Link>
              <Link href='/contact' className={styles.bottomLink}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
