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
    // Handle form submission logic (e.g., send data to server)
    console.log(formData);
    // Reset form fields after submission
    setFormData({ name: '', email: '', message: '' });
    // Show success message to the user
    alert('Form submitted successfully!');
  };

  return (
    <div className={styles.contactContainer}>
      <Navbar />
      <main className={styles.contactMain}>
        <h1 className={styles.contactHeading}>Contact Us</h1>
        <p className={styles.contactDescription}>
          If you have any questions or would like to book an appointment, please fill out the form below or contact us directly at (123) 456-7890.
        </p>
        <div className={styles.contactContent}>
        <div className={styles.mapContainer}>
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.7743269044286!2d84.73993997544378!3d25.778016577341706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992bb998badff79%3A0xf8111d306b04c001!2sJyoti%20Beauty%20Parlour!5e0!3m2!1sen!2sin!4v1716191166795!5m2!1sen!2sin"
              width="600"
              height="480"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.contactInputGroup}>
              <label className={styles.contactLabel} htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.contactInput}
                placeholder="Enter your name"
              />
            </div>
            <div className={styles.contactInputGroup}>
              <label className={styles.contactLabel} htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.contactInput}
                placeholder="Enter your email"
              />
            </div>
            <div className={styles.contactInputGroup}>
              <label className={styles.contactLabel} htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className={styles.contactTextarea}
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button type="submit" className={styles.contactButton}>Send</button>
          </form>          
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
