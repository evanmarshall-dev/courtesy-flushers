import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import styles from '../service-detail.module.css';
import plumbingStyles from './plumbing.module.css';

export const metadata: Metadata = {
  title: 'Plumbing Services | Courtesy Flushers',
  description:
    'Expert plumbing services for new construction, renovations, and repairs across Nova Scotia. Local knowledge with modern industry expertise.',
};

export default function PlumbingPage() {
  return (
    <div className={styles.serviceDetailPage}>
      <div className='container'>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <Link href='/'>Home</Link>
          <span className={styles.separator}>→</span>
          <Link href='/services'>Services</Link>
          <span className={styles.separator}>→</span>
          <span>Plumbing</span>
        </nav>

        {/* Hero Section */}
        <header className={plumbingStyles.plumbingHero}>
          <Image
            src='/images/truck-tank-banner.jpeg'
            alt='Professional plumbing service truck ready for work'
            fill
            className={plumbingStyles.plumbingHeroImage}
            quality={85}
            priority
          />
          <div className={plumbingStyles.plumbingHeroOverlay}></div>
          <div className={plumbingStyles.plumbingHeroContent}>
            <div className={plumbingStyles.plumbingIcon}>🪠</div>
            <h1>Plumbing Services</h1>
            <p className={styles.serviceSubtitle}>
              Professional plumbing solutions for new construction, renovations,
              and repairs across Nova Scotia
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className={styles.serviceContent}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <section className={styles.section}>
                <h2>Expert Plumbing Services</h2>
                <p>
                  Plumbing for your new construction & renovations and even
                  those pesky clogged pipes we have tools and expertise to guide
                  you through the process. Our customers benefit from local
                  knowledge, new industry ideas and trends that can help give
                  you that special feel every time you enter your bathroom &
                  kitchen oasis.
                </p>
              </section>

              <section className={styles.section}>
                <h2>Our Plumbing Services</h2>
                <div className={styles.servicesList}>
                  <div className={styles.serviceItem}>
                    <h3>🏗️ New Construction Plumbing</h3>
                    <p>
                      Complete plumbing installations for new homes and
                      commercial buildings. From rough-in to finish work, we
                      handle every aspect of your new construction plumbing
                      needs.
                    </p>
                    <ul>
                      <li>Water supply line installation</li>
                      <li>Drainage and waste systems</li>
                      <li>Fixture installation and hookup</li>
                      <li>Code compliance and inspections</li>
                    </ul>
                  </div>

                  <div className={styles.serviceItem}>
                    <h3>🔧 Renovation & Remodeling</h3>
                    <p>
                      Transform your bathroom and kitchen with modern plumbing
                      solutions. We bring new industry ideas and trends to help
                      create your perfect oasis.
                    </p>
                    <ul>
                      <li>Bathroom remodeling and upgrades</li>
                      <li>Kitchen plumbing renovations</li>
                      <li>Fixture replacement and upgrades</li>
                      <li>Pipe relocation and modifications</li>
                    </ul>
                  </div>

                  <div className={styles.serviceItem}>
                    <h3>🚰 Repairs & Maintenance</h3>
                    <p>
                      From minor leaks to major pipe issues, our experienced
                      team has the tools and expertise to get your plumbing back
                      to working order quickly.
                    </p>
                    <ul>
                      <li>Drain cleaning and unclogging</li>
                      <li>Pipe repair and replacement</li>
                      <li>Leak detection and repair</li>
                      {/* <li>Emergency plumbing services</li> */}
                    </ul>
                  </div>

                  <div className={styles.serviceItem}>
                    <h3>💧 Water System Solutions</h3>
                    <p>
                      Ensure your water systems are running efficiently with our
                      comprehensive water system services and maintenance.
                    </p>
                    <ul>
                      <li>Water heater installation and repair</li>
                      <li>Water pressure optimization</li>
                      <li>Pipe insulation and winterization</li>
                      <li>Water quality improvement systems</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            <div className={styles.sidebar}>
              {/* <div className={styles.sidebarCard}>
                <h3>Emergency Plumbing</h3>
                <p>
                  Plumbing emergencies don&apos;t wait for business hours. We
                  provide emergency services to get your water flowing again.
                </p>
                <a
                  href="tel:+1-902-691-6616"
                  className={styles.emergencyButton}
                >
                  🚨 Emergency: (902) 691-6616
                </a>
              </div> */}

              <div className={styles.sidebarCard}>
                <h3>Our Service Promise</h3>
                <ul className={styles.promiseList}>
                  <li>✅ Licensed and insured</li>
                  <li>✅ Quality workmanship guaranteed</li>
                  <li>✅ Upfront, honest pricing</li>
                  <li>✅ Clean, respectful service</li>
                  <li>✅ Local Nova Scotia company</li>
                  <li>✅ Modern tools and techniques</li>
                </ul>
              </div>

              <div className={styles.sidebarCard}>
                <h3>Get Your Quote</h3>
                <p>
                  Ready to start your plumbing project? Contact us for a free
                  consultation and quote.
                </p>
                <div className={styles.sidebarActions}>
                  {/* <Link href='/quote' className={styles.primaryButton}>
                    Get Free Quote
                  </Link> */}
                  <Link href='/contact' className={styles.secondaryButton}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Plumbing Specialties Section - Full Width */}
        <section className={plumbingStyles.specialtiesSection}>
          <div className='container'>
            <div className={plumbingStyles.specialtiesHeader}>
              <h2>Our Plumbing Specialties</h2>
              <p>
                From emergency repairs to complete system installations, we
                bring local knowledge and modern expertise to every plumbing
                challenge across Nova Scotia.
              </p>
            </div>
            <div className={plumbingStyles.specialtiesGrid}>
              <div className={plumbingStyles.specialtyCard}>
                <div className={plumbingStyles.specialtyIcon}>🏗️</div>
                <h3>New Construction</h3>
                <p>
                  Complete plumbing systems for residential and commercial
                  builds
                </p>
                <ul>
                  <li>Rough-in plumbing</li>
                  <li>System design</li>
                  <li>Code compliance</li>
                  <li>Final inspections</li>
                </ul>
              </div>
              <div className={plumbingStyles.specialtyCard}>
                <div className={plumbingStyles.specialtyIcon}>🛁</div>
                <h3>Bathroom Renovations</h3>
                <p>
                  Transform your bathroom into a modern oasis with expert
                  plumbing
                </p>
                <ul>
                  <li>Fixture upgrades</li>
                  <li>Shower installations</li>
                  <li>Vanity plumbing</li>
                  <li>Tile-ready prep</li>
                </ul>
              </div>
              <div className={plumbingStyles.specialtyCard}>
                <div className={plumbingStyles.specialtyIcon}>🚨</div>
                <h3>Emergency Repairs</h3>
                <p>24/7 emergency services for urgent plumbing issues</p>
                <ul>
                  <li>Burst pipe repair</li>
                  <li>Leak detection</li>
                  <li>Drain unblocking</li>
                  <li>Water damage prevention</li>
                </ul>
              </div>
              <div className={plumbingStyles.specialtyCard}>
                <div className={plumbingStyles.specialtyIcon}>🔧</div>
                <h3>System Maintenance</h3>
                <p>
                  Preventive maintenance to keep your plumbing running smoothly
                </p>
                <ul>
                  <li>Annual inspections</li>
                  <li>Pipe cleaning</li>
                  <li>Water heater service</li>
                  <li>Freeze protection</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Ready to Start Your Plumbing Project?</h2>
            <p>
              Whether it&apos;s a new installation, renovation, or repair, our
              experienced team is here to help create your perfect space.
            </p>
            <div className={styles.ctaButtons}>
              {/* <Link
                href='/quote?service=plumbing'
                className={styles.ctaPrimary}
              >
                Get Your Quote
              </Link> */}
              <a href='tel:+1-902-691-6616' className={styles.ctaSecondary}>
                📞 Call (902) 691-6616
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
