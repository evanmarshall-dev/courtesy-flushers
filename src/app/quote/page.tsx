"use client";

import { useState } from "react";
// import { Metadata } from "next";
import styles from "./quote.module.css";

// TODO: Figure out how to use metadata export in a client component.
// export const metadata: Metadata = {
//   title: "Get Quote",
//   description:
//     "Get a customized quote from Courtesy Flushers, Maritime Canada&apos;s trusted portable sanitation company.",
// };

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    eventType: "",
    startDate: "",
    endDate: "",
    location: "",
    quantity: "1",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission - replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        eventType: "",
        startDate: "",
        endDate: "",
        location: "",
        quantity: "1",
        message: "",
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.quotePage}>
      <div className="container">
        <header className={styles.pageHeader}>
          <h1>Get Your Free Quote</h1>
          <p>
            Tell us about your portable sanitation needs and we&apos;ll provide
            you with a customized quote within 24 hours.
          </p>
        </header>

        <div className={styles.quoteContent}>
          <div className={styles.formSection}>
            <form onSubmit={handleSubmit} className={styles.quoteForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={styles.formInput}
                    placeholder="Your full name"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={styles.formInput}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.formLabel}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className={styles.formInput}
                    placeholder="(902) 555-0123"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="serviceType" className={styles.formLabel}>
                    Service Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                    className={styles.formSelect}
                  >
                    <option value="">Select service type</option>
                    <option value="portable-toilets">Portable Toilets</option>
                    <option value="luxury-trailers">
                      Luxury Restroom Trailers
                    </option>
                    <option value="construction">Construction Solutions</option>
                    <option value="events">Special Events</option>
                    <option value="emergency">Emergency Services</option>
                  </select>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="eventType" className={styles.formLabel}>
                    Event/Project Type
                  </label>
                  <input
                    type="text"
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    placeholder="Wedding, construction site, festival, etc."
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="quantity" className={styles.formLabel}>
                    Number of Units *
                  </label>
                  <select
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    required
                    className={styles.formSelect}
                  >
                    <option value="1">1 unit</option>
                    <option value="2">2 units</option>
                    <option value="3">3 units</option>
                    <option value="4">4 units</option>
                    <option value="5">5 units</option>
                    <option value="6-10">6-10 units</option>
                    <option value="11-20">11-20 units</option>
                    <option value="21+">21+ units</option>
                  </select>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="startDate" className={styles.formLabel}>
                    Start Date *
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    required
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="endDate" className={styles.formLabel}>
                    End Date *
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    required
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="location" className={styles.formLabel}>
                  Delivery Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
                  placeholder="Street address, city, province"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  Additional Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.formTextarea}
                  placeholder="Any special requirements, access information, or questions you'd like us to know about..."
                  rows={5}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`${styles.submitButton} ${
                  isSubmitting ? styles.submitting : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "Get My Quote"}
              </button>

              {submitStatus === "success" && (
                <div className={styles.successMessage}>
                  <h3>Thank you for your quote request!</h3>
                  <p>
                    We&apos;ll review your requirements and get back to you
                    within 24 hours with a detailed quote.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className={styles.errorMessage}>
                  <h3>Something went wrong</h3>
                  <p>Please try again or call us directly at (902) 555-0123.</p>
                </div>
              )}
            </form>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <h2>🚀 Fast Response</h2>
              <p>
                We&apos;ll get back to you within 24 hours with a detailed quote
                tailored to your specific needs.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h2>💰 No Hidden Fees</h2>
              <p>
                Our quotes include delivery, setup, regular cleaning, and
                pickup. What you see is what you pay.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h2>📞 Need It Faster?</h2>
              <p>
                Call us directly for same-day quotes and emergency services.
              </p>
              <a href="tel:+1-902-555-0123" className={styles.phoneButton}>
                (902) 555-0123
              </a>
            </div>

            <div className={styles.infoCard}>
              <h2>✅ What&apos;s Included</h2>
              <ul>
                <li>Free delivery and setup</li>
                <li>Regular cleaning and maintenance</li>
                <li>24/7 customer support</li>
                <li>Free pickup and removal</li>
                <li>All supplies included</li>
              </ul>
            </div>

            <div className={styles.infoCard}>
              <h2>🏆 Why Choose Us?</h2>
              <ul>
                <li>Maritime Canada&apos;s most trusted provider</li>
                <li>100% satisfaction guarantee</li>
                <li>Eco-friendly cleaning products</li>
                <li>Emergency services available</li>
                <li>Professional, courteous service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
