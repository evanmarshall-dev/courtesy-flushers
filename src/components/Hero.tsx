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
      <div className={styles.background}>
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt=""
            fill
            className={styles.backgroundImage}
            priority
            sizes="100vw"
          />
        )}
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            <p className={styles.description}>{description}</p>

            <div className={styles.ctaButtons}>
              <Link href={primaryCTA.href} className={styles.primaryCTA}>
                {primaryCTA.text}
              </Link>
              <a href={secondaryCTA.href} className={styles.secondaryCTA}>
                {secondaryCTA.text}
              </a>
            </div>
          </div>

          {features.length > 0 && (
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
          )}
        </div>
      </div>
    </section>
  );
}
