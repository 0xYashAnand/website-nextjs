import React from 'react';
import ServiceCard from '../components/ServiceCard';
import styles from '../styles/servicePage.module.css'; // Import global or specific styles if needed

const services = [
  {
    "name": "Blowout",
    "description": "Professional blowout for a sleek and polished look.",
    "price": "₹2,500",
    "category": "Hair",
    "image": "/images/services/blowout.svg"
  },
  {
    "name": "Balayage",
    "description": "Hand-painted highlights for a natural, sun-kissed look.",
    "price": "₹10,000",
    "category": "Hair",
    "image": "/images/services/balayage.svg"
  },
  {
    "name": "Ombre Coloring",
    "description": "Gradient hair coloring from dark to light.",
    "price": "₹8,400",
    "category": "Hair",
    "image": "/images/services/ombre_coloring.svg"
  },
  {
    "name": "Updo Styling",
    "description": "Elegant updo styling for special events.",
    "price": "₹3,600",
    "category": "Hair",
    "image": "/images/services/updo_styling.svg"
  },
  {
    "name": "Deep Conditioning Treatment",
    "description": "Intensive conditioning treatment to nourish and repair hair.",
    "price": "₹2,700",
    "category": "Hair",
    "image": "/images/services/deep_conditioning_treatment.svg"
  },
  {
    "name": "Eyebrow Shaping",
    "description": "Professional eyebrow shaping and grooming.",
    "price": "₹400",
    "category": "Beauty",
    "image": "/images/services/eyebrow_shaping.svg"
  },
  {
    "name": "Lash Extensions",
    "description": "Semi-permanent lash extensions for a fuller, longer look.",
    "price": "₹10,000",
    "category": "Beauty",
    "image": "/images/services/lash_extensions.svg"
  },
  {
    "name": "Airbrush Makeup",
    "description": "Flawless airbrush makeup application for a long-lasting finish.",
    "price": "₹6,700",
    "category": "Makeup",
    "image": "/images/services/airbrush_makeup.svg"
  },
  {
    "name": "Bridal Makeup",
    "description": "Specialized makeup for brides to look stunning on their big day.",
    "price": "₹10,000",
    "category": "Makeup",
    "image": "/images/services/bridal_makeup.svg"
  },
  {
    "name": "Nail Art",
    "description": "Custom nail art design for unique and creative nails.",
    "price": "₹3,500",
    "category": "Nails",
    "image": "/images/services/nail_art.svg"
  },
  {
    "name": "Gel Manicure",
    "description": "Long-lasting gel polish manicure.",
    "price": "₹3,500",
    "category": "Nails",
    "image": "/images/services/gel_manicure.svg"
  },
  {
    "name": "Acrylic Nails",
    "description": "Durable acrylic nail extensions.",
    "price": "₹4,200",
    "category": "Nails",
    "image": "/images/services/acrylic_nails.svg"
  },
  {
    "name": "Hot Stone Massage",
    "description": "Relaxing massage using heated stones to relieve tension.",
    "price": "₹6,300",
    "category": "Beauty",
    "image": "/images/services/hot_stone_massage.svg"
  },
  {
    "name": "Microdermabrasion",
    "description": "Exfoliating treatment to improve skin texture and tone.",
    "price": "₹5,950",
    "category": "Beauty",
    "image": "/images/services/microdermabrasion.svg"
  },
  {
    "name": "Chemical Peel",
    "description": "Skin resurfacing treatment to reduce fine lines and wrinkles.",
    "price": "₹6,700",
    "category": "Beauty",
    "image": "/images/services/chemical_peel.svg"
  }
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


