import React from 'react';
import Link from 'next/link';
import styles from '../styles/footer.module.css';
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.box}>
            <h3 className={styles.salonName}>
              Local <span className={styles.salonNameHighlight}>Salon</span>
            </h3>
            <p className={styles.description}>
              Visit us for all your beauty and wellness needs. Our team of experienced stylists and professionals will ensure you leave feeling refreshed and rejuvenated.
            </p>
          </div>
          <div className={styles.box}>
            <div className={styles.midBox}>
              <h3 className={styles.title}>Useful Links</h3>
              <div>
              <div className={styles.links}>
                <Link href="/">Home</Link>
                <Link href="/services">Services</Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact Us</Link>
                <Link href="/disclaimer">Disclaimer</Link>
              </div>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <h3 className={styles.title}>Follow Us</h3>
            <div className={styles.socialIcons}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className={styles.icon} /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className={styles.icon} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube className={styles.icon} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className={styles.icon} /></a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>&copy; 2024 Local Salon</p>
          <div className={styles.policies}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
