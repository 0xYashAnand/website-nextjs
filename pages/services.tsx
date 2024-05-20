import React from 'react';
import Navbar from '../components/Navbar'; // Import the Header component
import Footer from '../components/Footer'; // Import the Footer component
import ServiceCard from '../components/ServiceCard';
import '../styles/ServiceCard.module.css';

const ServicesPage: React.FC = () => {
  return (
    <div>
      <Navbar /> {/* Include the Header component */}
      <div className="bg-primary min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-heading font-semibold text-primary mb-8">Our Services</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              name="Bridal Makeup"
              description="Let our expert makeup artists create a customized bridal look that enhances your natural beauty and complements your style."
              price="Starting from $150"
            />
            <ServiceCard
              name="Hair Styling"
              description="Transform your hair with our range of services, including haircuts, coloring, styling, and more."
              price="Starting from $50"
            />
            <ServiceCard
              name="Nail Care"
              description="Treat yourself to a pampering nail service, from classic manicures and pedicures to trendy nail art designs."
              price="Starting from $30"
            />
            {/* Add more ServiceCard components for other services */}
          </div>
        </div>
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default ServicesPage;
