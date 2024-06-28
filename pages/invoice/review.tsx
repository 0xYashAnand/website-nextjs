import React, { FC } from 'react';
import { FormData } from '../../types';

interface Props {
  formData: FormData;
  prevStep: () => void;
  nextStep: () => void;
}

const Review: FC<Props> = ({ formData, prevStep, nextStep }) => {
  return (
    <div className="max-w mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Review Invoice Details</h2>
      
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Customer Details</h3>
        <div className="grid grid-cols-2 gap-4 text-gray-600">
          <p><strong>Name:</strong> {formData.customerDetails.customerName}</p>
          <p><strong>Address:</strong> {formData.customerDetails.customerAddress}</p>
          <p><strong>Mobile:</strong> {formData.customerDetails.customerMobile}</p>
          <p><strong>Email:</strong> {formData.customerDetails.customerEmail}</p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4 text-blue-600">Products and Services</h3>
        {formData.billProducts.length > 0 || formData.billServices.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">Name</th>
                <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">Quantity</th>
                <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">Rate</th>
                <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">Total</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {formData.billProducts.map((product, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-normal break-words">{product.productName}</td>
                  <td className="px-6 py-4 whitespace-normal break-words">{product.productQuantity}</td>
                  <td className="px-6 py-4 whitespace-normal break-words">{product.productPrice}</td>
                  <td className="px-6 py-4 whitespace-normal break-words">{product.productTotal}</td>
                </tr>
              ))}
              {formData.billServices.map((service, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-normal break-words">{service.serviceName}</td>
                  <td className="px-6 py-4 whitespace-normal break-words">-</td>
                  <td className="px-6 py-4 whitespace-normal break-words">{service.servicePrice}</td>
                  <td className="px-6 py-4 whitespace-normal break-words">{service.serviceTotal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No Bill Can Be Created.</p>
        )}
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Payment Details</h3>
        <div className="grid grid-cols-2 gap-4 text-gray-600">
          
        <p><strong>Bill Type:</strong> {formData.billType}</p>
          <p><strong>Payment Mode:</strong> {formData.paymentMode}</p>
          {formData.paymentMode && (
            <p><strong>Cash Paid:</strong> {formData.paidByCash}</p>
          )} 
          {formData.paidByOnline && (
            <p><strong>Online:</strong> {formData.paidByOnline}</p>
          )}
          <p><strong>Payment Status:</strong> {formData.paymentStatus}</p>
          <p><strong>Billed By:</strong> {formData.billedBy}</p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Total Amount : ${formData.billTotal.toFixed(2)}
        </h3>
        
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={prevStep} 
          className="p-3 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 transition duration-300">
          Edit
        </button>
        <button 
          onClick={nextStep} 
          className="p-3 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition duration-300">
          Print PDF
        </button>
      </div>
    </div>
  );
};

export default Review;
