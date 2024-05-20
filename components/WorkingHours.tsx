import styles from '../styles/WorkingHours.module.css';

const WorkingHours = () => {
  return (
    <section className={styles.workingHoursSection}>
      <div className={styles.hoursContainer}>
        <div className={styles.dayBox}>
          <div className={styles.day}>SUN</div>
          <div className={styles.hours}>Closed</div>
        </div>
        <div className={styles.dayBox}>
          <div className={styles.day}>MON</div>
          <div className={styles.hours}>9 AM - 5 PM</div>
        </div>
        <div className={styles.dayBox}>
          <div className={styles.day}>TUE</div>
          <div className={styles.hours}>9 AM - 5 PM</div>
        </div>
        <div className={styles.dayBox}>
          <div className={styles.day}>WED</div>
          <div className={styles.hours}>9 AM - 5 PM</div>
        </div>
        <div className={styles.dayBox}>
          <div className={styles.day}>THU</div>
          <div className={styles.hours}>9 AM - 5 PM</div>
        </div>
        <div className={styles.dayBox}>
          <div className={styles.day}>FRI</div>
          <div className={styles.hours}>9 AM - 5 PM</div>
        </div>
        <div className={styles.dayBox}>
          <div className={styles.day}>SAT</div>
          <div className={styles.hours}>10 AM - 4 PM</div>
        </div>
      </div>
    </section>
  );
};

export default WorkingHours;
