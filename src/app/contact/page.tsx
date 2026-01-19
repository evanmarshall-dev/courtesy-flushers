import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './contact.module.css';
// TODO: Re-enable when Resend API is configured
// import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Courtesy Flushers',
  description:
    'Contact Courtesy Flushers for all your portable toilet, plumbing, and septic needs across Nova Scotia. Family-owned business with personal service.',
};

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <div className='container'>
        {/* Page Header */}
        <header className={styles.pageHeader}>
          <h1>Contact Us</h1>
          <p>
            Get in touch with Nova Scotia&apos;s premier portable sanitation and
            plumbing service
          </p>
        </header>

        {/* Contact Content */}
        <div className={styles.contactContent}>
          <div className={styles.contactGrid}>
            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <div className={styles.contactCard}>
                <h2>Business Info</h2>
                <p>
                  Courtesy Flushers Inc is a proudly owned family business
                  situated in the beautiful Annapolis Valley. We&apos;re here
                  for all your drainage and water solutions across the valley,
                  Nova Scotia.
                </p>

                <div className={styles.contactDetails}>
                  {/* <div className={styles.contactItem}>
                    <div className={styles.contactIcon}>📞</div>
                    <div>
                      <h3>Phone</h3>
                      <a
                        href='tel:+1-902-691-6616'
                        className={styles.contactLink}
                      >
                        (902) 691-6616
                      </a>
                      <p>Available 24/7 for emergencies</p>
                    </div>
                  </div> */}

                  {/* <div className={styles.contactItem}>
                    <div className={styles.contactIcon}>📧</div>
                    <div>
                      <h3>Email</h3>
                      <a
                        href='mailto:info@courtesyflushers.ca'
                        className={styles.contactLink}
                      >
                        info@courtesyflushers.ca
                      </a>
                      <p>We&apos;ll get back to you within 24 hours</p>
                    </div>
                  </div> */}

                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}>📍</div>
                    <div>
                      <h3>Service Area</h3>
                      <p>Annapolis to Hants County, Nova Scotia</p>
                      <p>Proudly serving Maritime Canada</p>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}>⏰</div>
                    <div>
                      <h3>Business Hours</h3>
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Emergency calls only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              {/* <div className={styles.emergencyCard}>
                <h3>Emergency Service</h3>
                <p>
                  Plumbing and septic emergencies don&apos;t wait for business
                  hours. Call us anytime for urgent issues.
                </p>
                <a
                  href="tel:+1-902-691-6616"
                  className={styles.emergencyButton}
                >
                  🚨 Emergency: (902) 691-6616
                </a>
              </div> */}
            </div>

            {/* Contact Form - Temporarily disabled until email service is configured */}
            {/* <ContactForm /> */}

            {/* Direct Contact CTA */}
            <div className={styles.contactForm}>
              <div className={styles.formCard}>
                <h2>Get In Touch</h2>
                <p>
                  Ready to discuss your project? We&apos;re here to help!
                  Contact us directly through phone or email.
                </p>

                <div className={styles.directContactOptions}>
                  <a
                    href='tel:+1-902-691-6616'
                    className={styles.contactButton}
                  >
                    <span className={styles.buttonIcon}>📞</span>
                    <div className={styles.buttonContent}>
                      <strong>Call Us Now</strong>
                      <span>(902) 691-6616</span>
                    </div>
                  </a>

                  <a
                    href='mailto:info@courtesyflushers.ca'
                    className={styles.contactButton}
                  >
                    <span className={styles.buttonIcon}>📧</span>
                    <div className={styles.buttonContent}>
                      <strong>Email Us</strong>
                      <span>info@courtesyflushers.ca</span>
                    </div>
                  </a>
                </div>

                {/* <div className={styles.contactNote}>
                  <p>
                    <strong>⏰ Available 24/7 for emergencies</strong>
                  </p>
                  <p>
                    We&apos;ll respond to all inquiries within 24 hours during
                    business hours.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Service Area Map */}
        <section id='service-area' className={styles.serviceAreaSection}>
          <div className={styles.serviceAreaHeader}>
            <h2>Our Service Area</h2>
            <p>
              Based in the beautiful Annapolis Valley, we proudly serve Kings,
              Hants, and Annapolis county, Nova Scotia with our comprehensive
              sanitation and plumbing services.
            </p>
          </div>

          <div className={styles.mapContainer}>
            <div className={styles.unifiedMapCard}>
              {/* Content Section */}
              <div className={styles.mapContentSection}>
                <div className={styles.mapPin}>📍</div>
                <h3>Courtesy Flushers Inc.</h3>
                <p className={styles.mapSubtitle}>
                  Annapolis Valley, Nova Scotia
                </p>

                {/* <div className={styles.serviceArea}>
                  <h4>Complete Provincial Coverage:</h4>
                  <div className={styles.serviceGrid}>
                    <ul>
                      <li>Halifax Regional Municipality</li>
                      <li>Annapolis Valley</li>
                      <li>South Shore</li>
                    </ul>
                    <ul>
                      <li>Eastern Shore</li>
                      <li>Northumberland Shore</li>
                      <li>Cape Breton Island</li>
                    </ul>
                  </div>
                </div> */}

                {/* Service Note */}
                <div className={styles.serviceNote}>
                  <strong>
                    🚛 Mobile Service • 📞 24/7 Emergency • 🏠 Residential &
                    Commercial
                  </strong>
                  <p>
                    We bring our professional services directly to your location
                  </p>
                </div>
              </div>

              {/* Integrated Map Section */}
              <div className={styles.mapImageSection}>
                <div className={styles.novascotiaShape}>
                  <Image
                    src='/images/service-area.png'
                    alt='Nova Scotia service coverage map'
                    fill
                    className={styles.mapImage}
                    quality={90}
                    placeholder='blur'
                    blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Nova Scotia Province Map */}
          <div className={styles.provinceMapContainer}>
            <div className={styles.provinceMap}>
              <div className={styles.mapTitle}>
                <h3>Serving Annapolis to Hants County Nova Scotia</h3>
                <p>Complete valley coverage for all your sanitation needs</p>
              </div>

              <div className={styles.coverageNote}>
                <p>
                  🚛 Mobile service • 📞 24/7 Emergency • 🏠 Residential &
                  Commercial
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className={styles.aboutSection}>
          <div className={styles.aboutContent}>
            <h2>About Courtesy Flushers</h2>
            <p>
              Courtesy Flushers Inc is a proudly owned family business. Owners
              Ian & Robin MacLean are very active in the business. As our
              business has grown, we have included Mark & Doug on to assist us
              in delivering high quality service to our clients.
            </p>
            <p>
              CF Inc is built around strong values, commitment to the highest
              standards in service and safety, and being a good community minded
              business. Robin & Ian have both been involved in the health care
              industry throughout the province and have been committed to
              delivering top notch care and service. This trait continues in
              their business CF Inc. to bring the same care and service to our
              customers.
            </p>
            <div className={styles.aboutActions}>
              <Link href='/about' className={styles.learnMoreButton}>
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className={styles.quickActions}>
          <h2>Ready to Get Started?</h2>
          <div className={styles.quickActionsGrid}>
            {/* <Link href='/quote' className={styles.actionCard}>
              <div className={styles.actionIcon}>📝</div>
              <h3>Get Free Quote</h3>
              <p>Request a personalized quote for your project</p>
            </Link> */}
            <a href='tel:+1-902-691-6616' className={styles.actionCard}>
              <div className={styles.actionIcon}>📞</div>
              <h3>Call Us Now</h3>
              <p>Speak directly with our team</p>
            </a>
            <Link href='/services' className={styles.actionCard}>
              <div className={styles.actionIcon}>🔧</div>
              <h3>Our Services</h3>
              <p>Explore all our service offerings</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
