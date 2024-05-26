import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import styles from '../styles/bookingForm.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface FormData {
  name: string;
  email: string;
  date: string;
  service: string;
}

interface Errors {
  name?: string;
  email?: string;
  date?: string;
  service?: string;
  form?: string;
}

const BookingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    date: '',
    service: '',
  });

  const [errors, setErrors] = useState<Errors>({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const validate = (): Errors => {
    const tempErrors: Errors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.date) tempErrors.date = "Date is required";
    if (!formData.service) tempErrors.service = "Service is required";
    return tempErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const tempErrors = validate();
    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Appointment booked successfully!');
        setFormData({ name: '', email: '', date: '', service: '' });
      } else {
        setErrors({ form: 'Failed to book appointment. Please try again.' });
      }
    } catch (error) {
      setErrors({ form: 'An error occurred. Please try again later.' });
    }
  };

  if (!isClient) return null;

  return (
    
    <div>
      <Navbar />
      <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.fieldContainer}>
        <label className={styles.label} htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={`${styles.input} ${errors.name ? styles.error : ''}`}
        />
        {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
      </div>
      <div className={styles.fieldContainer}>
        <label className={styles.label} htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={`${styles.input} ${errors.email ? styles.error : ''}`}
        />
        {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
      </div>
      <div className={styles.fieldContainer}>
        <label className={styles.label} htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
          className={`${styles.input} ${errors.date ? styles.error : ''}`}
        />
        {errors.date && <p className={styles.errorMessage}>{errors.date}</p>}
      </div>
      <div className={styles.fieldContainer}>
        <label className={styles.label} htmlFor="service">Service</label>
        <select
          name="service"
          id="service"
          value={formData.service}
          onChange={handleChange}
          className={`${styles.select} ${errors.service ? styles.error : ''}`}
        >
          <option value="">Select Service</option>
          <option value="hair">Hair</option>
          <option value="nails">Nails</option>
          <option value="bridal">Bridal Makeup</option>
          <option value="beauty">Beauty</option>
        </select>
        {errors.service && <p className={styles.errorMessage}>{errors.service}</p>}
      </div>
      {errors.form && <p className={styles.errorMessage}>{errors.form}</p>}
      {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
      <button type="submit" className={styles.button}>Book Appointment</button>
    </form>
      <Footer />
    </div>
    
  );
};

export default BookingForm;
