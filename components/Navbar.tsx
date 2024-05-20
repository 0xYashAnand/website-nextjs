import Link from 'next/link';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} bg-transparent`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            <span className={styles.navbarBrand}>Local Salon</span>
          </Link>
          <ul className={`${styles.navbarMenu} sm:flex hidden`}>
            <li><Link href="/" className={styles.navbarLink}>Home</Link></li>
            <li><Link href="/services" className={styles.navbarLink}>Services</Link></li>
            <li><Link href="/about" className={styles.navbarLink}>About</Link></li>
            <li><Link href="/contact" className={styles.navbarLink}>Contact</Link></li>
            
          </ul>
          <Link href="/disclaimer">
            <span className="text-white mx-2">Disclaimer</span>
          </Link>
          <button className={`${styles.navbarButton} sm:hidden`}>Menu</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
