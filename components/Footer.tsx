import React from 'react';
import styles from '../styles/footer.module.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <h3 className={styles.title}>Local Salon</h3>
            <p className={styles.text}>
              Visit us for all your beauty and wellness needs. Our team of experienced stylists and professionals will ensure you leave feeling refreshed and rejuvenated.
            </p>
            <p className={`${styles.text} ${styles.marginTop}`}>&copy; {new Date().getFullYear()} Local Salon. All rights reserved.</p>
          </div>
          <div>
            <h3 className={styles.title}>Services</h3>
            <ul className={styles.text}>
              <li className={styles.listItem}>Haircuts & Styling</li>
              <li className={styles.listItem}>Hair Coloring</li>
              <li className={styles.listItem}>Hair Extensions</li>
              <li className={styles.listItem}>Special Occasion Styling</li>
            </ul>
          </div>
          <div>
            <h3 className={styles.title}>Contact Us</h3>
            <p className={styles.text}><FaMapMarkerAlt className={styles.icon} /> 123 Beauty Street, Cityville, ABC 12345</p>
            <p className={styles.text}><FaPhoneAlt className={styles.icon} /> (123) 456-7890</p>
            <p className={styles.text}><FaEnvelope className={styles.icon} /> info@localsalon.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
