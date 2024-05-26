// pages/404.js

import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/404.module.css';

const Custom404 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.subtitle}>Page Not Found</p>
        <p className={styles.description}>
          Oops! The page you are looking for does not exist. But don't worry, we're here to pamper you.
        </p>
        <Link href="/" className={styles.homeLink}>Go back to Home</Link>
        <Image src="/images/3.png" alt="Beauty Salon" className={styles.image} width={500} height={300} />
      </div>
    </div>
  );
};

export default Custom404;
