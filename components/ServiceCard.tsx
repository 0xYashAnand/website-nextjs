import React from 'react';
import Image from 'next/image';
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
      <Image src={image} alt={name} width={500} height={300} className={styles.serviceImage} />
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
