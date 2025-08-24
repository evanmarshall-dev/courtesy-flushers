import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Us - Courtesy Flushers",
  description:
    "Learn about Courtesy Flushers, Maritime Canada's trusted portable sanitation company. Family-owned, locally operated, and committed to exceptional service.",
};

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <div className="container">
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1>About Courtesy Flushers</h1>
            <p className={styles.heroSubtitle}>
              Maritime Canada's trusted partner for professional portable
              sanitation solutions
            </p>
            <p className={styles.heroDescription}>
              Since our founding, we've been committed to providing clean,
              reliable, and courteous portable sanitation services across the
              Maritime provinces. We're not just a rental company – we're your
              neighbors, dedicated to serving our local communities with pride
              and professionalism.
            </p>
          </div>

          <div className={styles.heroImage}>
            <Image
              src="/IMG_9109.jpeg"
              alt="Courtesy Flushers team and equipment"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
        </section>

        {/* Our Story Section */}
        <section className={styles.storySection}>
          <div className={styles.sectionContent}>
            <h2>Our Story</h2>
            <div className={styles.storyGrid}>
              <div className={styles.storyText}>
                <p>
                  Courtesy Flushers was born from a simple belief: everyone
                  deserves access to clean, dignified sanitation facilities, no
                  matter where they are or what they're doing.
                </p>
                <p>
                  What started as a small local operation has grown into
                  Maritime Canada's most trusted portable sanitation provider.
                  Our growth has been built on word-of-mouth recommendations,
                  repeat customers, and our unwavering commitment to courtesy
                  and cleanliness.
                </p>
                <p>
                  Today, we serve construction sites, weddings, festivals, and
                  emergency situations across the Maritime provinces. But no
                  matter how much we grow, we never forget our roots – we're
                  still the local company that cares about our community.
                </p>
              </div>
              <div className={styles.storyStats}>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>500+</div>
                  <div className={styles.statLabel}>Happy Customers</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>1000+</div>
                  <div className={styles.statLabel}>Events Served</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>24/7</div>
                  <div className={styles.statLabel}>Customer Support</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className={styles.valuesSection}>
          <div className={styles.sectionContent}>
            <h2>Our Values</h2>
            <p className={styles.valuesIntro}>
              These core values guide everything we do, from how we clean our
              units to how we treat our customers.
            </p>

            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🤝</div>
                <h3>Courtesy First</h3>
                <p>
                  We believe in treating every customer with respect, kindness,
                  and professionalism. Your comfort and satisfaction are our top
                  priorities.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>✨</div>
                <h3>Spotless Standards</h3>
                <p>
                  Every unit is meticulously cleaned and sanitized between
                  rentals. We take pride in delivering pristine facilities that
                  exceed your expectations.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>⏰</div>
                <h3>Reliable Service</h3>
                <p>
                  When we say we'll be there, we'll be there. On time, every
                  time. Your schedule matters, and we never let you down.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🍃</div>
                <h3>Environmental Care</h3>
                <p>
                  We use eco-friendly cleaning products and responsible waste
                  management practices to protect our beautiful Maritime
                  environment.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🏠</div>
                <h3>Community Focus</h3>
                <p>
                  As a local business, we're invested in our communities. We
                  support local events, charities, and causes that matter to our
                  neighbors.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>💪</div>
                <h3>Continuous Improvement</h3>
                <p>
                  We're always looking for ways to serve you better, whether
                  it's new equipment, better processes, or enhanced customer
                  service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className={styles.serviceAreasSection}>
          <div className={styles.sectionContent}>
            <h2>Serving Maritime Canada</h2>
            <p className={styles.serviceAreasIntro}>
              We proudly serve communities throughout the Maritime provinces,
              bringing our courteous service and clean solutions to your
              location.
            </p>

            <div className={styles.serviceAreasGrid}>
              <div className={styles.provinceCard}>
                <h3>🍁 Nova Scotia</h3>
                <p>
                  Halifax, Dartmouth, Sydney, Truro, and surrounding communities
                </p>
              </div>
              <div className={styles.provinceCard}>
                <h3>🌲 New Brunswick</h3>
                <p>
                  Moncton, Saint John, Fredericton, and the greater Maritime
                  region
                </p>
              </div>
              <div className={styles.provinceCard}>
                <h3>🦞 Prince Edward Island</h3>
                <p>
                  Charlottetown, Summerside, and across the beautiful island
                </p>
              </div>
            </div>

            <div className={styles.serviceAreasNote}>
              <p>
                Don't see your area listed?{" "}
                <Link href="/contact">Contact us</Link> – we may still be able
                to serve you or help you find a trusted local provider.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Ready to Experience the Courtesy Difference?</h2>
            <p>
              Join hundreds of satisfied customers who trust Courtesy Flushers
              for their portable sanitation needs.
            </p>

            <div className={styles.ctaButtons}>
              <Link href="/quote" className={styles.ctaPrimary}>
                Get Your Quote
              </Link>
              <Link href="/contact" className={styles.ctaSecondary}>
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
