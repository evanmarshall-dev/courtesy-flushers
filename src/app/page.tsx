import Hero from '@/components/Hero/Hero';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <a href='#main-content' className='skip-link'>
        Skip to main content
      </a>

      <Hero
        title='Courtesy Flushers'
        subtitle='Your Business is our Business'
        description="Nova Scotia's premier portable sanitation service. From new home constructions to renovations and special events, we do it all! If you're building and waiting on a toilet, our portable restroom division can provide you with help in the short term with your construction."
        // primaryCTA={{
        //   text: 'Get Your Quote',
        //   href: '/quote',
        // }}
        secondaryCTA={{
          text: 'Call Now',
          href: 'tel:+1-902-691-6616',
        }}
        backgroundImage='/images/truck-toilet-rev.jpeg'
      />

      <main id='main-content'>
        {/* Services Overview Section */}
        <section className={styles.servicesSection}>
          <div className='container'>
            <div className={styles.sectionHeader}>
              <h2>Our Services</h2>
              <p>Professional portable sanitation solutions for every need</p>
            </div>

            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🚽</div>
                <h3>Portable Toilets</h3>
                <p>
                  Our local company offers fast, efficient delivery of toilets
                  to your site.
                </p>
                <Link
                  href='/services/portable-toilets'
                  className={styles.serviceLink}
                >
                  Learn More
                </Link>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🪠</div>
                <h3>Plumbing</h3>
                <p>
                  Plumbing for your new construction & renovations and even
                  those pesky clogged pipes.
                </p>
                <Link href='/services/plumbing' className={styles.serviceLink}>
                  Learn More
                </Link>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>👍</div>
                <h3>Septic Services</h3>
                <p>
                  All your septic services in one place. Pumping, replacement,
                  and installation.
                </p>
                <Link href='/services/septic' className={styles.serviceLink}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id='why-choose-us' className={styles.whyChooseSection}>
          <div className='container'>
            <div className={styles.whyChooseContent}>
              <div className={styles.whyChooseText}>
                <h2>Why Choose Courtesy Flushers?</h2>
                <p className={styles.whyChooseSubtitle}>
                  We&apos;re not just another sanitation company. We&apos;re
                  your neighbours, committed to providing exceptional service
                  with Maritime hospitality.
                </p>

                <div className={styles.whyChooseList}>
                  <div className={styles.whyChooseItem}>
                    <div className={styles.whyChooseIcon}>✅</div>
                    <div>
                      <h4>Guaranteed Prompt Delivery</h4>
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
                        Talk to real people, not robots. We&apos;re here with
                        reliable support and to handle emergencies.
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
                  <Link href='/why-us' className={styles.learnMoreButton}>
                    Learn More About Us
                  </Link>
                </div>
              </div>

              <div className={styles.whyChooseImage}>
                <Image
                  src='/images/truck-tank-banner.jpeg'
                  alt='Clean portable toilet units ready for delivery'
                  width={500}
                  height={400}
                  className={styles.image}
                  quality={85}
                  placeholder='blur'
                  blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonialsSection}>
          <div className='container'>
            <div className={styles.sectionHeader}>
              <h2>What Our Customers Say</h2>
              <p>Real experiences from real customers across Nova Scotia</p>
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
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className='container'>
            <div className={styles.ctaContent}>
              <h2>Ready to Experience the Courtesy Flushers Difference?</h2>
              <p>
                Get your free quote today and discover why Nova Scotia trusts
                Courtesy Flushers for all their portable sanitation needs.
              </p>

              <div className={styles.ctaButtons}>
                {/* <Link href='/quote' className={styles.ctaPrimary}>
                  Get Free Quote
                </Link> */}
                <a href='tel:+1-902-691-6616' className={styles.ctaSecondary}>
                  📞 Call (902) 691-6616
                </a>
              </div>

              <p className={styles.ctaNote}>
                Available for emergencies • Reliable delivery • Serving all of
                Nova Scotia
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
