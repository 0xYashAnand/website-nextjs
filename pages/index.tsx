import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Local Salon - Home</title>
        <meta name="description" content="Welcome to Local Salon, the best place for all your beauty needs." />
        <meta name="keywords" content="salon, beauty, haircut, hair coloring" />
        <meta name="author" content="Local Salon" />
      </Head>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Welcome to Local Salon</h1>
          <p className={styles.heroSubtitle}>Experience the best in beauty and wellness with our professional services.</p>
        </section>

        <section className={styles.servicesSection}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <p className={styles.sectionSubtitle}>Discover our wide range of services designed to make you look and feel your best.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Haircut</h3>
              <p>Professional haircuts tailored to your style.</p>
              <p className={styles.servicePrice}>$30</p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Hair Coloring</h3>
              <p>Beautiful hair coloring services to suit your preferences.</p>
              <p className={styles.servicePrice}>$60</p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Manicure</h3>
              <p>Keep your nails looking perfect with our manicure services.</p>
              <p className={styles.servicePrice}>$25</p>
            </div>
          </div>
        </section>

        <section className={styles.testimonialsSection}>
          <h2 className={styles.sectionTitle}>Testimonials</h2>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>“Local Salon is the best! My hair has never looked better.”</p>
            <p className={styles.testimonialAuthor}>- Jane Doe</p>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>“Amazing service and friendly staff. Highly recommend!”</p>
            <p className={styles.testimonialAuthor}>- John Smith</p>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h2 className={styles.sectionTitle}>Book an Appointment</h2>
          <p className={styles.sectionSubtitle}>Ready to experience the best in beauty and wellness? Book your appointment today!</p>
          <button className={styles.ctaButton}>Book Now</button>
        </section>

        <section className={styles.aboutSection}>
          <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Experienced Professionals</h3>
              <p>Our team consists of highly experienced and trained professionals dedicated to providing the best services.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Top Quality Products</h3>
              <p>We use only top quality products to ensure your satisfaction and well-being.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
