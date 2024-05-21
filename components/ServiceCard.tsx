import React from 'react';
import styles from '../styles/serviceCard.module.css';

type ServiceCardProps = {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ name, description, price, category, image }) => {
  return (
    <div className={styles.serviceCard}>
      <img src={image} alt={name} className={styles.serviceImage} />
      <div className={styles.serviceContent}>
        <h2 className={styles.serviceName}>{name}</h2>
        <p className={styles.serviceDescription}>{description}</p>
        <div className={`${styles.serviceFooter} flex justify-between items-center`}>
          <span className={styles.serviceCategory}>{category}</span>
          <span className={styles.servicePrice}>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
