import React from 'react';
import ServiceCard from '../components/ServiceCard';
import styles from '../styles/servicePage.module.css'; // Import global or specific styles if needed

const services = [
  {
    name: 'Haircut',
    description: 'Stylish haircut by our expert stylists.',
    price: '$50',
    category: 'Hair',
    image: '/images/haircut.jpg', // Example image path
  },
  {
    name: 'Hair Coloring',
    description: 'Full hair coloring using high-quality dyes.',
    price: '$100',
    category: 'Hair',
    image: '/images/hair_coloring.jpg',
  },
  {
    name: 'Facial Treatment',
    description: 'Relaxing and rejuvenating facial treatment.',
    price: '$70',
    category: 'Beauty',
    image: '/images/facial_treatment.jpg',
  },
  {
    name: 'Makeup Session',
    description: 'Professional makeup for special occasions.',
    price: '$80',
    category: 'Makeup',
    image: '/images/makeup_session.jpg',
  },
  {
    name: 'Manicure',
    description: 'Complete manicure including nail shaping and polish.',
    price: '$40',
    category: 'Nails',
    image: '/images/manicure.jpg',
  },
  {
    name: 'Pedicure',
    description: 'Foot care and nail treatment.',
    price: '$45',
    category: 'Nails',
    image: '/images/pedicure.jpg',
  },
];

const ServicePage: React.FC = () => {
  const categories = ['Hair', 'Beauty', 'Makeup', 'Nails'];

  return (
    <div className="bg-primary min-h-screen p-8">
      <h1 className="text-4xl font-heading text-primary mb-8 text-center">Our Services</h1>
      {categories.map((category) => (
        <div key={category} className="mb-10">
          <h2 className="text-3xl font-heading text-primary mb-6">{category}</h2>
          <div className="flex flex-wrap gap-8">
            {services
              .filter(service => service.category === category)
              .map(service => (
                <ServiceCard
                  key={service.name}
                  name={service.name}
                  description={service.description}
                  price={service.price}
                  category={service.category}
                  image={service.image}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicePage;
