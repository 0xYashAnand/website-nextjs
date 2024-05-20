import React, { useState, ChangeEvent, FormEvent } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className={styles.contactContainer}>
      <Navbar />
      <main className={styles.contactMain}>
        <h1 className={styles.contactHeading}>Contact Us</h1>
        <p className={styles.contactDescription}>If you have any questions or would like to book an appointment, please fill out the form below or contact us directly at (123) 456-7890.</p>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.contactInputGroup}>
            <label className={styles.contactLabel}>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.contactInput}
            />
          </div>
          <div className={styles.contactInputGroup}>
            <label className={styles.contactLabel}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.contactInput}
            />
          </div>
          <div className={styles.contactInputGroup}>
            <label className={styles.contactLabel}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.contactTextarea}
            ></textarea>
          </div>
          <button type="submit" className={styles.contactButton}>Send</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
