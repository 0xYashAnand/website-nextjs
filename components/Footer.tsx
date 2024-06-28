import React from 'react';
import Link from 'next/link';
import styles from '../styles/footer.module.css';
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaFileInvoice } from 'react-icons/fa';

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
              <h3 className={styles.title}>Links</h3>
              <ul className={styles.links}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/about">About Us</Link></li>                
                <li><Link href="/disclaimer">Disclaimer</Link></li>
              </ul>
            </div>
          </div>
          <div className={styles.box}>
            <h3 className={styles.title}>Follow Us</h3>
            <div className={styles.socialIcons}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className={styles.icon} /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className={styles.icon} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube className={styles.icon} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className={styles.icon} /></a>
              <Link href="/invoice/invoices" rel="noopener noreferrer"><FaFileInvoice className={styles.icon} /></Link>
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
