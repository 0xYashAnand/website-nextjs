import React from 'react';

type ServiceCardProps = {
  name: string;
  description: string;
  price: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ name, description, price }) => {
  return (
    <div className="border p-4 rounded shadow-md bg-white">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-lg font-bold text-green-500 mt-2">{price}</p>
    </div>
  );
};

export default ServiceCard;