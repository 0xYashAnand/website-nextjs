import React, { FC } from 'react';
import { FormData } from '../../types';

interface Props {
  formData: FormData;
  prevStep: () => void;
  nextStep: () => void;
}

const Review: FC<Props> = ({ formData, prevStep, nextStep }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">Review Invoice Details</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4">Customer Details</h3>
        <p><strong>Name:</strong> {formData.customerDetails.customerName}</p>
        <p><strong>Address:</strong> {formData.customerDetails.customerAddress}</p>
        <p><strong>Mobile:</strong> {formData.customerDetails.customerMobile}</p>
        <p><strong>Email:</strong> {formData.customerDetails.customerEmail}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4">Products</h3>
        {formData.billProducts.length > 0 ? (
          formData.billProducts.map((product, index) => (
            <div key={index} className="mb-2">
              <p><strong>Name:</strong> {product.productName}</p>
              <p><strong>Quantity:</strong> {product.productQuantity}</p>
              <p><strong>Rate:</strong> {product.productPrice}</p>
              <p><strong>Total:</strong> {product.productTotal}</p>
            </div>
          ))
        ) : (
          <p>No products added.</p>
        )}
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4">Services</h3>
        {formData.billServices.length > 0 ? (
          formData.billServices.map((service, index) => (
            <div key={index} className="mb-2">
              <p><strong>Name:</strong> {service.serviceName}</p>
              <p><strong>Rate:</strong> {service.servicePrice}</p>
              <p><strong>Total:</strong> {service.serviceTotal}</p>
            </div>
          ))
        ) : (
          <p>No services added.</p>
        )}
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4">Payment Details</h3>
        <p><strong>Billed By:</strong> {formData.billedBy}</p>
        <p><strong>Payment Mode:</strong> {formData.paymentMode}</p>
        {formData.paymentMode.includes('Cash') && (
          <p><strong>Paid By Cash:</strong> {formData.paidByCash}</p>
        )}
        {formData.paymentMode.includes('Online') && (
          <p><strong>Paid By Online:</strong> {formData.paidByOnline}</p>
        )}
        <p><strong>Payment Status:</strong> {formData.paymentStatus}</p>
        <p><strong>Bill Type:</strong> {formData.billType}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4">Invoice Total</h3>
        <p><strong>Total Amount:</strong> {formData.billTotal}</p>
      </div>

      <button onClick={prevStep} className="p-2 bg-yellow-500 text-white rounded-md w-full">
        Edit
      </button>
      <button onClick={nextStep} className="p-2 bg-green-500 text-white rounded-md w-full mt-4">
        Confirm and Generate PDF
      </button>
    </div>
  );
};

export default Review;
