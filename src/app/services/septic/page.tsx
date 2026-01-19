import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import styles from '../service-detail.module.css';
import septicStyles from './septic.module.css';

export const metadata: Metadata = {
  title: 'Septic Services | Courtesy Flushers',
  description:
    'Complete septic services across Nova Scotia: pumping, installations, pump replacements, and maintenance. Serving residential and commercial clients.',
};

export default function SepticServicesPage() {
  return (
    <div className={styles.serviceDetailPage}>
      <div className='container'>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <Link href='/'>Home</Link>
          <span className={styles.separator}>→</span>
          <Link href='/services'>Services</Link>
          <span className={styles.separator}>→</span>
          <span>Septic Services</span>
        </nav>

        {/* Hero Section */}
        <header className={septicStyles.septicHero}>
          <Image
            src='/images/truck-banner.jpeg'
            alt='Professional septic service truck ready for work'
            fill
            className={septicStyles.septicHeroImage}
            quality={85}
            priority
          />
          <div className={septicStyles.septicHeroOverlay}></div>
          <div className={septicStyles.septicHeroContent}>
            <div className={septicStyles.septicIcon}>🏗️</div>
            <h1>Septic Services</h1>
            <p className={styles.serviceSubtitle}>
              Complete septic solutions from pumping to installations across
              Nova Scotia
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className={styles.serviceContent}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <section className={styles.section}>
                <h2>Complete Septic Services</h2>
                <p>
                  Long-term rentals, site planning, and regular maintenance for
                  construction projects of all sizes. From septic pumping to
                  complete new installations, we provide comprehensive septic
                  solutions for residential and commercial properties across
                  Nova Scotia.
                </p>
              </section>

              <section className={styles.section}>
                <h2>Our Septic Services</h2>
                <div className={styles.servicesList}>
                  <div className={styles.serviceItem}>
                    <h3>🚛 Septic Pumping</h3>
                    <p>
                      Time to pump that ole septic tank in the backyard, every
                      2-4 years depending on the size of your household. Wipes &
                      quilted toilet paper may be good on the tushy, but those
                      items are bad for your septic. Don&apos;t let an overfull
                      tank ruin your day or your long weekend plan, schedule us
                      to pump your tank today.
                    </p>
                    <ul>
                      <li>Residential septic pumping</li>
                      <li>Commercial septic maintenance</li>
                      <li>Regular maintenance schedules</li>
                      {/* <li>Emergency pumping services</li> */}
                    </ul>
                  </div>

                  <div className={styles.serviceItem}>
                    <h3>⚙️ Septic Field Pumps</h3>
                    <p>
                      Give us a call to get that pump replaced. We can arrive
                      with the equipment needed to pump the tank, install a
                      quality pump and leave you with the positive reassurance
                      that your tank is ready for the years to come.
                    </p>
                    <ul>
                      <li>Pump replacement and installation</li>
                      <li>Electrical connections and controls</li>
                      <li>Pump testing and commissioning</li>
                      <li>Warranty on all pump installations</li>
                    </ul>
                  </div>

                  <div className={styles.serviceItem}>
                    <h3>🏗️ Septic Installations</h3>
                    <p>
                      New house, failed field, crumbling tank, then allow us to
                      work with you, our highly talented partners to come up
                      with resolutions to make your property&apos;s health a
                      priority.
                    </p>
                    <ul>
                      <li>New septic system design and installation</li>
                      <li>Failed system replacement</li>
                      <li>Site evaluation and soil testing</li>
                      <li>Permit assistance and inspections</li>
                    </ul>
                  </div>

                  <div className={styles.serviceItem}>
                    <h3>🔍 Septic Inspections & Maintenance</h3>
                    <p>
                      Regular inspections and maintenance help prevent costly
                      repairs and ensure your septic system operates efficiently
                      for years to come.
                    </p>
                    <ul>
                      <li>Pre-purchase property inspections</li>
                      <li>Routine maintenance checks</li>
                      <li>Problem diagnosis and solutions</li>
                      <li>System performance optimization</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            <div className={styles.sidebar}>
              {/* <div className={styles.sidebarCard}>
                <h3>Emergency Service</h3>
                <p>
                  Septic emergencies can&apos;t wait. We provide emergency
                  septic services to get your system back up and running.
                </p>
                <a
                  href="tel:+1-902-691-6616"
                  className={styles.emergencyButton}
                >
                  🚨 Emergency: (902) 691-6616
                </a>
              </div> */}

              <div className={styles.sidebarCard}>
                <h3>Licensed & Insured</h3>
                <p>
                  Courtesy Flushers Inc. is licensed by the Department of
                  Environment Nova Scotia and is a member of Waste Water Nova
                  Scotia.
                </p>
              </div>

              <div className={styles.sidebarCard}>
                <h3>Schedule Your Service</h3>
                <p>
                  Don&apos;t wait until it&apos;s too late. Schedule your septic
                  pumping or inspection today.
                </p>
                <div className={styles.sidebarActions}>
                  {/* <Link href='/quote' className={styles.primaryButton}>
                    Get Free Quote
                  </Link> */}
                  <Link href='/contact' className={styles.secondaryButton}>
                    Schedule Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Septic Maintenance Guide - Full Width */}
        <section className={septicStyles.educationSection}>
          <div className='container'>
            <div className={septicStyles.educationHeader}>
              <h2>Septic System Maintenance Guide</h2>
              <p>
                Understanding your septic system and maintaining it properly
                will save you money and protect your property investment.
              </p>
            </div>
            <div className={septicStyles.educationContent}>
              <h3>📅 How Often Should You Pump Your Septic Tank?</h3>
              <div className={septicStyles.tableWrapper}>
                <table className={septicStyles.pumpingTable}>
                  <thead>
                    <tr>
                      <th>Household Size</th>
                      <th>Tank Size (Gallons)</th>
                      <th>Pumping Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label='Household Size'>1-2 people</td>
                      <td data-label='Tank Size (Gallons)'>500-750</td>
                      <td data-label='Pumping Frequency'>Every 3-4 years</td>
                    </tr>
                    <tr>
                      <td data-label='Household Size'>3-4 people</td>
                      <td data-label='Tank Size (Gallons)'>750-1000</td>
                      <td data-label='Pumping Frequency'>Every 2-3 years</td>
                    </tr>
                    <tr>
                      <td data-label='Household Size'>5-6 people</td>
                      <td data-label='Tank Size (Gallons)'>1000-1250</td>
                      <td data-label='Pumping Frequency'>Every 1-2 years</td>
                    </tr>
                    <tr>
                      <td data-label='Household Size'>7+ people</td>
                      <td data-label='Tank Size (Gallons)'>1250+</td>
                      <td data-label='Pumping Frequency'>Every 1-2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className={septicStyles.maintenanceTips}>
                <div className={septicStyles.tipCard}>
                  <h4>❌ Don&apos;t Flush These Items</h4>
                  <ul>
                    <li>Wipes (even &#34;flushable&#34; ones)</li>
                    <li>Feminine hygiene products</li>
                    <li>Medications</li>
                    <li>Chemicals and harsh cleaners</li>
                    <li>Cigarette butts</li>
                    <li>Cat litter</li>
                    <li>Grease and oils</li>
                  </ul>
                </div>
                <div className={septicStyles.tipCard}>
                  <h4>✅ Best Practices</h4>
                  <ul>
                    <li>Use septic-safe toilet paper</li>
                    <li>Spread out laundry loads throughout the week</li>
                    <li>Fix leaky faucets promptly</li>
                    <li>Schedule regular pumping</li>
                    <li>Keep detailed maintenance records</li>
                    <li>Protect your drain field from vehicles</li>
                    <li>Use biodegradable cleaning products</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice - Full Width */}
        <section className={septicStyles.warningSection}>
          <div className='container'>
            <h3>⚠️ Important Notice</h3>
            <p>
              <strong>
                Wipes & quilted toilet paper may be good on the tushy, but those
                items are bad for your septic.
              </strong>{' '}
              Don&apos;t let an overfull tank ruin your day or your long weekend
              plans. Schedule us to pump your tank today!
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Protect Your Property with Professional Septic Services</h2>
            <p>
              Don&apos;t let septic problems disrupt your life. Contact us today
              for reliable, professional septic services across Nova Scotia.
            </p>
            <div className={styles.ctaButtons}>
              {/* <Link href='/quote?service=septic' className={styles.ctaPrimary}>
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
