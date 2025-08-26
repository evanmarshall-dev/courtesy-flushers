import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  features?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  features = [],
}: HeroProps) {
  return (
    <section className={styles.hero} role="banner">
      <div className={styles.heroContent}>
        {/* Text Content Side */}
        <div className={styles.textSide}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            <p className={styles.description}>{description}</p>

            <div className={styles.ctaSection}>
              <div className={styles.ctaButtons}>
                <Link href={primaryCTA.href} className={styles.primaryCTA}>
                  <span className={styles.ctaIcon}>📋</span>
                  {primaryCTA.text}
                </Link>
                <a href={secondaryCTA.href} className={styles.secondaryCTA}>
                  <span className={styles.ctaIcon}>📞</span>
                  {secondaryCTA.text}
                </a>
              </div>

              <div className={styles.ctaFooter}>
                <div className={styles.ctaNote}>
                  <span className={styles.checkmark}>✅</span>
                  <span>Free Quotes • Fast Delivery • Reliable Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className={styles.imageSide}>
          {backgroundImage && (
            <div className={styles.imageContainer}>
              <Image
                src={backgroundImage}
                alt="Courtesy Flushers portable toilet service truck"
                fill
                className={styles.heroImage}
                priority
                sizes="(max-width: 1023px) 100vw, 50vw"
                quality={90}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          )}
        </div>
      </div>

      {features.length > 0 && (
        <div className={styles.featuresSection}>
          <div className={styles.container}>
            <div className={styles.features}>
              {features.map((feature, index) => (
                <div key={index} className={styles.feature}>
                  <div className={styles.featureIcon} aria-hidden="true">
                    {feature.icon}
                  </div>
                  <div className={styles.featureContent}>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDescription}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
