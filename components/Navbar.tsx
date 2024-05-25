import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';
import { FaBars } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.navbar}`}>
      <div className={`${styles.container} ${styles.flex} ${styles.justifyBetween} py-4 px-6`}>
        <Link href="/">
          <span className={styles.navbarBrand}>Local Salon</span>
        </Link>
        <div className={`${styles.flex}`}>
          <ul className={`${styles.linksContainer} sm:flex hidden`}>
            <li><Link href="/" className={styles.navbarLink}>Home</Link></li>
            <li><Link href="/services" className={styles.navbarLink}>Services</Link></li>
            <li><Link href="/about" className={styles.navbarLink}>About</Link></li>
            <li><Link href="/contact" className={styles.navbarLink}>Contact</Link></li>
            <li><Link href="/disclaimer" className={styles.navbarLink}>Disclaimer</Link></li>
          </ul>
          <div className="sm:hidden ml-auto">
            <button 
              onClick={toggleMenu} 
              className={styles.navbarButton}
              aria-label="Toggle menu"
            >
              <FaBars />
            </button>
          </div>
        </div>
        <div className="hidden sm:block">
          <Link href="/book" passHref>
            <button className="text-white bg-purple-600 py-2 px-4 rounded-full hover:bg-purple-700">
              Book Appointment
            </button>
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className={`${styles.mobileMenu}`}>
          <ul>
            <li><Link href="/" className={styles.navbarLink} onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/services" className={styles.navbarLink} onClick={toggleMenu}>Services</Link></li>
            <li><Link href="/about" className={styles.navbarLink} onClick={toggleMenu}>About</Link></li>
            <li><Link href="/contact" className={styles.navbarLink} onClick={toggleMenu}>Contact</Link></li>
            <li><Link href="/book" className={styles.navbarLink} onClick={toggleMenu}>Book Appointment</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
