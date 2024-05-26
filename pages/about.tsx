import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div>
      <Navbar />
      <main className={styles.container}>
        <h1 className={styles.heading}>About Us</h1>
        <p className={styles.description}>Our salon has been providing top-notch beauty services for over a decade. Our team of experienced professionals is dedicated to making you look and feel your best.</p>
        <div className={styles.imageContainer}>
          <Image src="/images/2.png" alt="Team" className={styles.image} width={500} height={300} />
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Our Mission &amp; Values</h2>
          <p className={styles.sectionText}>We are committed to delivering exceptional beauty services that enhance our clients&apos; confidence and well-being. Our values are rooted in professionalism, creativity, and customer satisfaction.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Meet Our Team</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <h3 className={styles.sectionHeading}>Jane Doe</h3>
              <p className={styles.sectionText}>Master Stylist with 10 years of experience in the industry.</p>
            </div>
            <div className={styles.teamMember}>
              <h3 className={styles.sectionHeading}>John Smith</h3>
              <p className={styles.sectionText}>Expert Colorist known for creative and vibrant hair colors.</p>
            </div>
            <div className={styles.teamMember}>
              <h3 className={styles.sectionHeading}>Emily Davis</h3>
              <p className={styles.sectionText}>Professional Nail Technician specializing in manicures and pedicures.</p>
            </div>
            <div className={styles.teamMember}>
              <h3 className={styles.sectionHeading}>Emily Davis</h3>
              <p className={styles.sectionText}>Professional Nail Technician specializing in manicures and pedicures.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Client Testimonials</h2>
          <div className={styles.testimonial}>
            <p>&quot;I had an amazing experience at the salon. The staff is incredibly friendly and professional. Highly recommend!&quot;</p>
            <p>- Happy Client</p>
          </div>
          <div className={styles.testimonial}>
            <p>&quot;The best salon in town! They really listen to what you want and deliver beyond expectations.&quot;</p>
            <p>- Satisfied Customer</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
