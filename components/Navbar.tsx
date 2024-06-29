import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { FaBars } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/">
          <span className={styles.navbarBrand}>Local Salon</span>
        </Link>
        <div className={`${styles.linksContainer} ${isOpen ? styles.open : ""}`}>
          <ul>
            <li>
              <Link href="/" className={styles.navbarLink} onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className={styles.navbarLink} onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.navbarLink} onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.navbarLink} onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className={styles.navbarLink} onClick={() => setIsOpen(false)}>
                Disclaimer
              </Link>
            </li>
            <li className={styles.bookingLink}>
              <Link href="/bookingForm" className={styles.navbarLink} onClick={() => setIsOpen(false)}>
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
        <button onClick={toggleMenu} className={styles.navbarButton} aria-label="Toggle menu">
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
