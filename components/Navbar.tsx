import Link from 'next/link';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} bg-purple-800`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            <span className={`${styles.navbarBrand} text-white text-2xl font-bold cursor-pointer`}>Local Salon</span>
          </Link>
          <ul className={`${styles.navbarMenu} sm:flex hidden space-x-4`}>
            <li><Link href="/" className={`${styles.navbarLink} text-white hover:text-purple-300`}>Home</Link></li>
            <li><Link href="/services" className={`${styles.navbarLink} text-white hover:text-purple-300`}>Services</Link></li>
            <li><Link href="/about" className={`${styles.navbarLink} text-white hover:text-purple-300`}>About</Link></li>
            <li><Link href="/contact" className={`${styles.navbarLink} text-white hover:text-purple-300`}>Contact</Link></li>
          </ul>
          <Link href="/disclaimer">
            <span className="text-white mx-2 cursor-pointer hover:text-purple-300">Disclaimer</span>
          </Link>
          <button className={`${styles.navbarButton} sm:hidden text-white bg-purple-600 py-1 px-4 rounded-full hover:bg-purple-700`}>Menu</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
