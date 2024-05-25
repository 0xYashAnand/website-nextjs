import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Disclaimer.module.css';

const Disclaimer = () => {
  return (
    <div>
      <Navbar />
      <main className={styles.container}>
        <h1 className={styles.heading}>Disclaimer</h1>
        <p className={styles.text}>
          The information provided by Local Salon on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
        </p>
        <p className={styles.text}>
          Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
        </p>

        <h2 className={styles.subheading}>Service-Specific Disclaimers</h2>
        <p className={styles.text}>
          Our salon provides a variety of beauty services, including but not limited to facials, makeup applications, haircuts, hair coloring, manicures, pedicures, and other related services. Please note the following disclaimers:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Facials:</strong> Results may vary based on individual skin types and conditions. We recommend a patch test prior to the treatment to avoid any allergic reactions.
          </li>
          <li className={styles.listItem}>
            <strong>Makeup:</strong> The makeup products used are of high quality, but we advise clients to inform us of any allergies or sensitivities prior to the service.
          </li>
          <li className={styles.listItem}>
            <strong>Hair Services:</strong> Haircuts, coloring, and treatments are provided by experienced professionals. However, results may vary based on hair type, condition, and maintenance.
          </li>
          <li className={styles.listItem}>
            <strong>Manicures and Pedicures:</strong> We adhere to strict hygiene practices, but we encourage clients to notify us of any skin conditions or infections before the service.
          </li>
          <li className={styles.listItem}>
            <strong>General:</strong> All services are performed by trained professionals. If you have any health conditions or concerns, please consult with your healthcare provider before undergoing any beauty treatments.
          </li>
        </ul>

        <h2 className={styles.subheading}>Booking and Appointments</h2>
        <p className={styles.text}>
          By booking an appointment with Local Salon, you acknowledge that you have read, understood, and agreed to the terms of this disclaimer. Please arrive on time for your appointment to ensure you receive your full service. Late arrivals may result in reduced service time or rescheduling.
        </p>

        <h2 className={styles.subheading}>Cancellation Policy</h2>
        <p className={styles.text}>
          We understand that life can be unpredictable. If you need to cancel or reschedule your appointment, please do so at least 24 hours in advance. Failure to do so may result in a cancellation fee.
        </p>

        <h2 className={styles.subheading}>Health and Safety</h2>
        <p className={styles.text}>
          Your health and safety are our top priority. We follow all recommended guidelines for sanitation and hygiene to ensure a safe environment for our clients. Please inform us of any health concerns or conditions before your service so we can accommodate your needs appropriately.
        </p>

        <h2 className={styles.subheading}>Contact Information</h2>
        <p className={styles.text}>
          If you have any questions or concerns about this disclaimer, please feel free to contact us:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}><strong>Email:</strong> support@localsalon.com</li>
          <li className={styles.listItem}><strong>Phone:</strong> (123) 456-7890</li>
          <li className={styles.listItem}><strong>Address:</strong> 123 Beauty St, Glamour City, GC 12345</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Disclaimer;
