import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import styles from '../service-detail.module.css';
import toiletStyles from './portable-toilets.module.css';

export const metadata: Metadata = {
  title: 'Portable Toilets | Courtesy Flushers',
  description:
    'Fast, efficient portable toilet delivery across Nova Scotia. Perfect for weddings, construction sites, and special events. Clean, reliable service you can count on.',
};

export default function PortableToiletsPage() {
  return (
    <div className={styles.serviceDetailPage}>
      <div className='container'>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <Link href='/'>Home</Link>
          <span className={styles.separator}>→</span>
          <Link href='/services'>Services</Link>
          <span className={styles.separator}>→</span>
          <span>Portable Toilets</span>
        </nav>

        {/* Hero Section */}
        <header className={styles.serviceHero}>
          <Image
            src='/images/toilets-setup.jpeg'
            alt='Clean portable toilet units ready for delivery'
            fill
            className={styles.serviceHeroImage}
            quality={85}
            priority
          />
          <div className={styles.serviceHeroOverlay}></div>
          <div className={styles.serviceHeroContent}>
            <div className={styles.serviceIcon}>🚽</div>
            <h1>Portable Toilets</h1>
            <p className={styles.serviceSubtitle}>
              Fast, efficient delivery of clean portable toilets to your site
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className={styles.serviceContent}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <section className={styles.section}>
                <h2>Professional Portable Toilet Services</h2>
                <p>
                  Our local company offers fast, efficient delivery of toilets
                  to your site. Planning for a big family celebration, or your
                  picture-perfect wedding, let us help you. We strive to be the
                  most forgettable thing at your special day. We want your
                  guests to talk about the party, the meal, the beautiful dress
                  and not the messy bathrooms. Make sure to include us in your
                  plans.
                </p>
              </section>

              <section className={styles.section}>
                <h2>Perfect for Every Occasion</h2>
                <div className={styles.occasionsList}>
                  <div className={styles.occasionItem}>
                    <h3>🎉 Weddings & Special Events</h3>
                    <p>
                      Keep your special day memorable for all the right reasons.
                      Our clean, well-maintained units ensure your guests&apos;
                      comfort without being a distraction from your celebration.
                    </p>
                  </div>
                  <div className={styles.occasionItem}>
                    <h3>🏗️ Construction Sites</h3>
                    <p>
                      Reliable sanitation solutions for construction workers.
                      Regular servicing and maintenance included to keep your
                      site compliant and your crew happy.
                    </p>
                  </div>
                  <div className={styles.occasionItem}>
                    <h3>🏡 Home Renovations</h3>
                    <p>
                      Building and waiting on a toilet? Our portable restroom
                      division can provide you with help in the short term with
                      your construction and renovation needs.
                    </p>
                  </div>
                  <div className={styles.occasionItem}>
                    <h3>🎪 Festivals & Outdoor Events</h3>
                    <p>
                      From community gatherings to large festivals, we provide
                      the right number of units to keep your event running
                      smoothly.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <div className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Our Service Promise</h3>
                <ul className={styles.promiseList}>
                  <li>✅ Fast, reliable delivery</li>
                  <li>✅ Clean, sanitized units</li>
                  <li>✅ Regular maintenance</li>
                  <li>✅ Prompt pickup service</li>
                  <li>✅ Competitive pricing</li>
                  <li>✅ Local Nova Scotia company</li>
                </ul>
              </div>

              <div className={styles.sidebarCard}>
                <h3>Need Help Planning?</h3>
                <p>
                  Not sure how many units you need? Our experienced team can
                  help you plan the perfect setup for your event.
                </p>
                <div className={styles.sidebarActions}>
                  {/* <Link href="/quote" className={styles.primaryButton}>
                    Get Free Quote
                  </Link> */}
                  <a
                    href='tel:+1-902-691-6616'
                    className={styles.secondaryButton}
                  >
                    📞 Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Toilet Planning Guide - Full Width */}
        <section className={toiletStyles.toiletPlanningSection}>
          <div className='container'>
            <div className={toiletStyles.planningHeader}>
              <h2>How Many Toilets Do You Need?</h2>
              <p>
                Use our comprehensive guide to determine the right number of
                portable toilets for your event. Our planning tool takes into
                account event duration and guest count to ensure optimal
                comfort.
              </p>
            </div>
            <div className={toiletStyles.guideContainer}>
              <h3>📊 Event Planning Guide</h3>
              <div className={toiletStyles.tableWrapper}>
                <table className={toiletStyles.toiletTable}>
                  <thead>
                    <tr>
                      <th>Number of People</th>
                      <th>4-Hour Event</th>
                      <th>8-Hour Event</th>
                      <th>24-Hour+ Event</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label='Number of People'>1-15</td>
                      <td data-label='4-Hour Event'>1 unit</td>
                      <td data-label='8-Hour Event'>1 unit</td>
                      <td data-label='24-Hour+ Event'>2 units</td>
                    </tr>
                    <tr>
                      <td data-label='Number of People'>16-40</td>
                      <td data-label='4-Hour Event'>2 units</td>
                      <td data-label='8-Hour Event'>2 units</td>
                      <td data-label='24-Hour+ Event'>3 units</td>
                    </tr>
                    <tr>
                      <td data-label='Number of People'>41-60</td>
                      <td data-label='4-Hour Event'>3 units</td>
                      <td data-label='8-Hour Event'>3 units</td>
                      <td data-label='24-Hour+ Event'>4 units</td>
                    </tr>
                    <tr>
                      <td data-label='Number of People'>61-100</td>
                      <td data-label='4-Hour Event'>4 units</td>
                      <td data-label='8-Hour Event'>5 units</td>
                      <td data-label='24-Hour+ Event'>6 units</td>
                    </tr>
                    <tr>
                      <td data-label='Number of People'>101-150</td>
                      <td data-label='4-Hour Event'>6 units</td>
                      <td data-label='8-Hour Event'>7 units</td>
                      <td data-label='24-Hour+ Event'>9 units</td>
                    </tr>
                    <tr>
                      <td data-label='Number of People'>151-200</td>
                      <td data-label='4-Hour Event'>8 units</td>
                      <td data-label='8-Hour Event'>9 units</td>
                      <td data-label='24-Hour+ Event'>12 units</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={toiletStyles.planningTips}>
                <div className={toiletStyles.tip}>
                  <div className={toiletStyles.tipIcon}>📋</div>
                  <div className={toiletStyles.tipContent}>
                    <h4>Pro Tip</h4>
                    <p>Add 1 additional unit for every additional 75 people.</p>
                  </div>
                </div>
                <div className={toiletStyles.tip}>
                  <div className={toiletStyles.tipIcon}>🍻</div>
                  <div className={toiletStyles.tipContent}>
                    <h4>Events with Alcohol</h4>
                    <p>Add 15-20% more units for events serving alcohol.</p>
                  </div>
                </div>
                <div className={toiletStyles.tip}>
                  <div className={toiletStyles.tipIcon}>👥</div>
                  <div className={toiletStyles.tipContent}>
                    <h4>Mixed Gender Events</h4>
                    <p>
                      Consider separate facilities for larger mixed-gender
                      events.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Ready to Reserve Your Portable Toilets?</h2>
            <p>
              Get your free quote today and ensure your event has the sanitation
              facilities it needs.
            </p>
            <div className={styles.ctaButtons}>
              {/* <Link
                href="/quote?service=portable-toilets"
                className={styles.ctaPrimary}
              >
                Get Your Quote
              </Link> */}
              <Link href='/contact' className={styles.ctaSecondary}>
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
