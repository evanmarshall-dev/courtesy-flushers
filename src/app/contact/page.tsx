import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us | Courtesy Flushers",
  description:
    "Contact Courtesy Flushers for all your portable toilet, plumbing, and septic needs across Nova Scotia. Family-owned business with personal service.",
};

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <div className="container">
        {/* Page Header */}
        <header className={styles.pageHeader}>
          <h1>Contact Us</h1>
          <p>
            Get in touch with Nova Scotia's premier portable sanitation and
            plumbing service
          </p>
        </header>

        {/* Contact Content */}
        <div className={styles.contactContent}>
          <div className={styles.contactGrid}>
            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <div className={styles.contactCard}>
                <h2>Get In Touch</h2>
                <p>
                  Courtesy Flushers Inc is a proudly owned family business
                  situated in the beautiful Annapolis Valley. We're here for all
                  your drainage and water solutions across Nova Scotia.
                </p>

                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}>📞</div>
                    <div>
                      <h3>Phone</h3>
                      <a
                        href="tel:+1-902-555-0123"
                        className={styles.contactLink}
                      >
                        (902) 555-0123
                      </a>
                      <p>Available 24/7 for emergencies</p>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}>📧</div>
                    <div>
                      <h3>Email</h3>
                      <a
                        href="mailto:info@courtesyflushers.ca"
                        className={styles.contactLink}
                      >
                        info@courtesyflushers.ca
                      </a>
                      <p>We'll get back to you within 24 hours</p>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}>📍</div>
                    <div>
                      <h3>Service Area</h3>
                      <p>Annapolis Valley & All of Nova Scotia</p>
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
              <div className={styles.emergencyCard}>
                <h3>Emergency Service</h3>
                <p>
                  Plumbing and septic emergencies don't wait for business hours.
                  Call us anytime for urgent issues.
                </p>
                <a
                  href="tel:+1-902-555-0123"
                  className={styles.emergencyButton}
                >
                  🚨 Emergency: (902) 555-0123
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.contactForm}>
              <div className={styles.formCard}>
                <h2>Send Us a Message</h2>
                <p>
                  Ready to get started? Fill out the form below and we'll get
                  back to you with a free quote.
                </p>

                <form className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="firstName">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className={styles.formInput}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="lastName">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className={styles.formInput}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className={styles.formInput}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className={styles.formInput}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="service">Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      className={styles.formSelect}
                    >
                      <option value="">Select a service...</option>
                      <option value="portable-toilets">Portable Toilets</option>
                      <option value="plumbing">Plumbing Services</option>
                      <option value="septic-pumping">Septic Pumping</option>
                      <option value="septic-installation">
                        Septic Installation
                      </option>
                      <option value="emergency">Emergency Service</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      placeholder="Please describe your project or service needs..."
                      className={styles.formTextarea}
                    ></textarea>
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Service Area Map */}
        <section id="service-area" className={styles.serviceAreaSection}>
          <div className={styles.serviceAreaHeader}>
            <h2>Our Service Area</h2>
            <p>
              Based in the beautiful Annapolis Valley, we proudly serve all of
              Nova Scotia with our comprehensive sanitation and plumbing
              services.
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

                <div className={styles.serviceArea}>
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
                </div>

                {/* Service Note */}
                <div className={styles.serviceNote}>
                  <strong>
                    🚛 Mobile Service • 📞 24/7 Emergency • 🏠 Residential &
                    Commercial
                  </strong>
                  <p>
                    We bring our professional services directly to your location
                    anywhere across Nova Scotia
                  </p>
                </div>
              </div>

              {/* Integrated Map Section */}
              <div className={styles.mapImageSection}>
                <div className={styles.novascotiaShape}>
                  <Image
                    src="/images/service-area.png"
                    alt="Nova Scotia service coverage map"
                    fill
                    className={styles.mapImage}
                    quality={90}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Nova Scotia Province Map */}
          <div className={styles.provinceMapContainer}>
            <div className={styles.provinceMap}>
              <div className={styles.mapTitle}>
                <h3>Serving All of Nova Scotia</h3>
                <p>
                  Complete provincial coverage for all your sanitation needs
                </p>
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
              <Link href="/about" className={styles.learnMoreButton}>
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className={styles.quickActions}>
          <h2>Ready to Get Started?</h2>
          <div className={styles.quickActionsGrid}>
            <Link href="/quote" className={styles.actionCard}>
              <div className={styles.actionIcon}>📝</div>
              <h3>Get Free Quote</h3>
              <p>Request a personalized quote for your project</p>
            </Link>
            <a href="tel:+1-902-555-0123" className={styles.actionCard}>
              <div className={styles.actionIcon}>📞</div>
              <h3>Call Us Now</h3>
              <p>Speak directly with our team</p>
            </a>
            <Link href="/services" className={styles.actionCard}>
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
