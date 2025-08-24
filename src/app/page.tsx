import Hero from "@/components/Hero/Hero";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Hero
        title="Courtesy Flushers"
        subtitle="Courteous Service, Clean Solutions"
        description="Maritime Canada's premier portable sanitation service. From construction sites to elegant weddings, we deliver pristine, reliable portable toilet solutions with exceptional customer service."
        primaryCTA={{
          text: "Get Your Quote",
          href: "/quote",
        }}
        secondaryCTA={{
          text: "Call Now",
          href: "tel:+1-902-555-0123",
        }}
        backgroundImage="/images/truck-toilet-rev.jpeg"
      />

      <main id="main-content">
        {/* Services Overview Section */}
        <section className={styles.servicesSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>Our Services</h2>
              <p>Professional portable sanitation solutions for every need</p>
            </div>

            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🚽</div>
                <h3>Portable Toilets</h3>
                <p>
                  Standard and deluxe units, perfect for construction sites,
                  events, and temporary needs. Clean, comfortable, and reliable.
                </p>
                <Link
                  href="/services/portable-toilets"
                  className={styles.serviceLink}
                >
                  Learn More →
                </Link>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>✨</div>
                <h3>Luxury Trailers</h3>
                <p>
                  Elegant restroom trailers for weddings, corporate events, and
                  special occasions. Premium comfort and style.
                </p>
                <Link
                  href="/services/luxury-trailers"
                  className={styles.serviceLink}
                >
                  Learn More →
                </Link>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🏗️</div>
                <h3>Construction Solutions</h3>
                <p>
                  Long-term rentals, site planning, and regular maintenance for
                  construction projects of all sizes.
                </p>
                <Link
                  href="/services/construction"
                  className={styles.serviceLink}
                >
                  Learn More →
                </Link>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🎉</div>
                <h3>Special Events</h3>
                <p>
                  Wedding rentals, festival services, and custom solutions for
                  memorable occasions.
                </p>
                <Link href="/services/events" className={styles.serviceLink}>
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className={styles.whyChooseSection}>
          <div className="container">
            <div className={styles.whyChooseContent}>
              <div className={styles.whyChooseText}>
                <h2>Why Choose Courtesy Flushers?</h2>
                <p className={styles.whyChooseSubtitle}>
                  We&apos;re not just another rental company. We&apos;re your
                  neighbors, committed to providing exceptional service with
                  Maritime hospitality.
                </p>

                <div className={styles.whyChooseList}>
                  <div className={styles.whyChooseItem}>
                    <div className={styles.whyChooseIcon}>✅</div>
                    <div>
                      <h4>Guaranteed On-Time Delivery</h4>
                      <p>
                        We arrive when promised, every time. Your schedule is
                        our priority.
                      </p>
                    </div>
                  </div>

                  <div className={styles.whyChooseItem}>
                    <div className={styles.whyChooseIcon}>🧼</div>
                    <div>
                      <h4>Spotless & Sanitized</h4>
                      <p>
                        Every unit undergoes thorough cleaning and sanitization
                        using eco-friendly products.
                      </p>
                    </div>
                  </div>

                  <div className={styles.whyChooseItem}>
                    <div className={styles.whyChooseIcon}>📞</div>
                    <div>
                      <h4>Personal Service</h4>
                      <p>
                        Talk to real people, not robots. We&apos;re here 24/7
                        for support and emergencies.
                      </p>
                    </div>
                  </div>

                  <div className={styles.whyChooseItem}>
                    <div className={styles.whyChooseIcon}>🍃</div>
                    <div>
                      <h4>Environmentally Responsible</h4>
                      <p>
                        Eco-friendly cleaning products and responsible waste
                        management practices.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.whyChooseCTA}>
                  <Link href="/why-us" className={styles.learnMoreButton}>
                    Learn More About Us
                  </Link>
                </div>
              </div>

              <div className={styles.whyChooseImage}>
                <Image
                  src="/images/truck-tank-banner.jpeg"
                  alt="Clean portable toilet units ready for delivery"
                  width={500}
                  height={400}
                  className={styles.image}
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonialsSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>What Our Customers Say</h2>
              <p>Real experiences from real customers across Maritime Canada</p>
            </div>

            <div className={styles.testimonialsGrid}>
              <div className={styles.testimonialCard}>
                <blockquote>
                  &#34;Very dependable, honest, courteous, punctual, great
                  communication either by phone, text or email. They will get
                  back to you as soon as possible to ease your worries. Very
                  clean work and will be mindful of your budget. Hands down my
                  go to company.&#34;
                </blockquote>
                <div className={styles.testimonialFooter}>
                  <div className={styles.testimonialStars}>⭐⭐⭐⭐⭐</div>
                  <cite>— Mary L.</cite>
                </div>
              </div>

              <div className={styles.testimonialCard}>
                <blockquote>
                  &#34;Extremely friendly, reliable, efficient and honest
                  customer service. Always my first call in need and my first
                  recommendation for others. Highly recommend!&#34;
                </blockquote>
                <div className={styles.testimonialFooter}>
                  <div className={styles.testimonialStars}>⭐⭐⭐⭐⭐</div>
                  <cite>— Matt P., Kentville</cite>
                </div>
              </div>
            </div>

            {/* <div className={styles.testimonialsFooter}>
              <Link href="/reviews" className={styles.allReviewsButton}>
                Read All Reviews
              </Link>
            </div> */}
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaContent}>
              <h2>Ready to Experience the Courtesy Difference?</h2>
              <p>
                Get your free quote today and discover why Maritime Canada
                trusts Courtesy Flushers for all their portable sanitation
                needs.
              </p>

              <div className={styles.ctaButtons}>
                <Link href="/quote" className={styles.ctaPrimary}>
                  Get Free Quote
                </Link>
                <a href="tel:+1-902-555-0123" className={styles.ctaSecondary}>
                  📞 Call (902) 555-0123
                </a>
              </div>

              <p className={styles.ctaNote}>
                Available 24/7 for emergencies • Same-day delivery available •
                Serving all of Maritime Canada
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
