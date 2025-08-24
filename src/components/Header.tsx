"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      submenu: [
        { name: "Portable Toilets", href: "/services/portable-toilets" },
        { name: "Luxury Trailers", href: "/services/luxury-trailers" },
        { name: "Construction Solutions", href: "/services/construction" },
        { name: "Special Events", href: "/services/events" },
      ],
    },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={styles.header} role="banner">
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" aria-label="Courtesy Flushers - Home">
            <Image
              src="/logo.svg"
              alt="Courtesy Flushers"
              width={200}
              height={60}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {navigation.map((item) => (
              <li key={item.name} className={styles.navItem}>
                {item.submenu ? (
                  <div className={styles.dropdown}>
                    <Link href={item.href} className={styles.navLink}>
                      {item.name}
                      <span className={styles.dropdownIcon} aria-hidden="true">
                        ▾
                      </span>
                    </Link>
                    <ul className={styles.submenu}>
                      {item.submenu.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            href={subItem.href}
                            className={styles.submenuLink}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link href={item.href} className={styles.navLink}>
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Buttons */}
        <div className={styles.ctaButtons}>
          <a href="tel:+1-902-555-0123" className={styles.phoneButton}>
            📞 Call Now
          </a>
          <Link href="/quote" className={styles.quoteButton}>
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle main menu"
        >
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav
          className={styles.mobileNav}
          id="mobile-menu"
          aria-label="Mobile navigation"
        >
          <ul className={styles.mobileNavList}>
            {navigation.map((item) => (
              <li key={item.name} className={styles.mobileNavItem}>
                <Link
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <ul className={styles.mobileSubmenu}>
                    {item.submenu.map((subItem) => (
                      <li key={subItem.name}>
                        <Link
                          href={subItem.href}
                          className={styles.mobileSubmenuLink}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className={styles.mobileCTA}>
              <a href="tel:+1-902-555-0123" className={styles.mobilePhone}>
                📞 Call Now
              </a>
              <Link href="/quote" className={styles.mobileQuote}>
                Get Quote
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
