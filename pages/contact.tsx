// pages/contact.tsx
import React, { FC } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Contact.module.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: FC = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h2 className={styles.contactHeading}>Contact Information</h2>
          <h3 className={styles.subHeading}>Where to find us</h3>
          <div className={styles.contactItem}>
            <FaPhoneAlt className={styles.contactIcon} />
            <span className={styles.contactText}>+1 234 567 890</span>
          </div>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.contactIcon} />
            <span className={styles.contactText}>info@localsalon.com</span>
          </div>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.contactIcon} />
            <span className={styles.contactText}>123 Beautybvncv xng St, Salon City, SC 12345</span>
          </div>
        </div>
        <div className={styles.contactForm}>
          <form>
            <div className={styles.formRow}>
              <div className={styles.formField}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" placeholder="" />
              </div>
              <div className={styles.formField}>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" placeholder="" />
              </div>
            </div>
            <div className={styles.formRow}>
            <div className={styles.formField}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="" />
            </div>
            <div className={styles.formField}>
              <label htmlFor="mobile">Mobile Number</label>
              <input type="number" id="mobile" name="mobile" placeholder="" />
            </div>
            </div>
            <div className={styles.formField}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={3} placeholder="Write your message"></textarea>
            </div>
            <div className={styles.formField}>
              <button type="submit" className={styles.submitButton}>Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
