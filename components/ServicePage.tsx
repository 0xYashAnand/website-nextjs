import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    name: 'Haircut',
    description: 'Stylish haircut by our expert stylists.',
    price: '$50',
    category: 'Hair',
  },
  {
    name: 'Hair Coloring',
    description: 'Full hair coloring using high-quality dyes.',
    price: '$100',
    category: 'Hair',
  },
  {
    name: 'Facial Treatment',
    description: 'Relaxing and rejuvenating facial treatment.',
    price: '$70',
    category: 'Beauty',
  },
  {
    name: 'Makeup Session',
    description: 'Professional makeup for special occasions.',
    price: '$80',
    category: 'Makeup',
  },
  {
    name: 'Manicure',
    description: 'Complete manicure including nail shaping and polish.',
    price: '$40',
    category: 'Nails',
  },
  {
    name: 'Pedicure',
    description: 'Foot care and nail treatment.',
    price: '$45',
    category: 'Nails',
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services
              .filter(service => service.category === category)
              .map(service => (
                <ServiceCard
                  key={service.name}
                  name={service.name}
                  description={service.description}
                  price={service.price}
                  category={service.category}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicePage;