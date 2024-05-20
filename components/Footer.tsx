import React from 'react';
import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Local Salon</h3>
            <p className="text-gray-300">Visit us for all your beauty and wellness needs. Our team of experienced stylists and professionals will ensure you leave feeling refreshed and rejuvenated.</p>
            <p className="text-gray-300 mt-2">&copy; {new Date().getFullYear()} Local Salon. All rights reserved.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Services</h3>
            <ul className="text-gray-300">
              <li className="mb-2">Haircuts & Styling</li>
              <li className="mb-2">Hair Coloring</li>
              <li className="mb-2">Hair Extensions</li>
              <li className="mb-2">Special Occasion Styling</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
            <p className="text-gray-300">Monday - Friday: 9:00 AM - 7:00 PM</p>
            <p className="text-gray-300">Saturday: 10:00 AM - 6:00 PM</p>
            <p className="text-gray-300">Sunday: Closed</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-gray-300">123 Beauty Street</p>
            <p className="text-gray-300">Cityville, ABC 12345</p>
            <p className="text-gray-300">Phone: (123) 456-7890</p>
            <p className="text-gray-300">Email: info@localsalon.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
