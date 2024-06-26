import React, { FC, ChangeEvent, useEffect } from 'react';
import { FormData, Product, Service } from '../../types';

interface Props {
  formData: FormData;
  setFormData: (data: FormData) => void;
  nextStep: () => void;
}

const InvoicesForm: FC<Props> = ({ formData, setFormData, nextStep }) => {
  useEffect(() => {
    if (formData.paymentMode === 'Cash') {
      setFormData({
        ...formData,
        paidByCash: formData.billTotal.toString(),
        paidByOnline: '0',
      });
    } else if (formData.paymentMode === 'Online') {
      setFormData({
        ...formData,
        paidByCash: '0',
        paidByOnline: formData.billTotal.toString(),
      });
    } else if (formData.paymentMode === 'Cash + Online') {
      setFormData({
        ...formData,
        paidByCash: '',
        paidByOnline: '',
      });
    }
  }, [formData.paymentMode, formData.billTotal]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCustomerDetailsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      customerDetails: {
        ...formData.customerDetails,
        [name]: value,
      },
    });
  };

  const handleProductChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const products = [...formData.billProducts];
    const product = products[index];

    if (name in product) {
      product[name as keyof Product] = name === 'productQuantity' || name === 'productPrice' ? +value : value;
      if (name === 'productQuantity' || name === 'productPrice') {
        product.productTotal = product.productQuantity * product.productPrice;
      }
    }

    setFormData({
      ...formData,
      billProducts: products,
      billTotal: calculateTotal(products, formData.billServices),
    });
  };

  const handleServiceChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const services = [...formData.billServices];
    const service = services[index];

    if (name in service) {
      service[name as keyof Service] = name === 'servicePrice' ? +value : value;
      if (name === 'servicePrice') {
        service.serviceTotal = service.servicePrice;
      }
    }

    setFormData({
      ...formData,
      billServices: services,
      billTotal: calculateTotal(formData.billProducts, services),
    });
  };

  const handleAddProduct = () => {
    setFormData({
      ...formData,
      billProducts: [
        ...formData.billProducts,
        { productName: '', productQuantity: 0, productPrice: 0, productTotal: 0, productRecommendedBy: '' },
      ],
    });
  };

  const handleAddService = () => {
    setFormData({
      ...formData,
      billServices: [
        ...formData.billServices,
        { serviceName: '', servicePrice: 0, serviceTotal: 0, serviceBy: '' },
      ],
    });
  };

  const handleDeleteProduct = (index: number) => {
    const products = formData.billProducts.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      billProducts: products,
      billTotal: calculateTotal(products, formData.billServices),
    });
  };

  const handleDeleteService = (index: number) => {
    const services = formData.billServices.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      billServices: services,
      billTotal: calculateTotal(formData.billProducts, services),
    });
  };

  const calculateTotal = (products: Product[], services: Service[]) => {
    const productsTotal = products.reduce((sum, product) => sum + product.productTotal, 0);
    const servicesTotal = services.reduce((sum, service) => sum + service.serviceTotal, 0);
    return productsTotal + servicesTotal;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Invoice</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 font-semibold">Company ID</label>
          <input
            type="text"
            name="companyId"
            value={formData.companyId}
            onChange={handleInputChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-4 text-gray-700">Customer Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              name="customerName"
              value={formData.customerDetails.customerName}
              onChange={handleCustomerDetailsChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Address</label>
            <input
              type="text"
              name="customerAddress"
              value={formData.customerDetails.customerAddress}
              onChange={handleCustomerDetailsChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Mobile</label>
            <input
              type="text"
              name="customerMobile"
              value={formData.customerDetails.customerMobile}
              onChange={handleCustomerDetailsChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              name="customerEmail"
              value={formData.customerDetails.customerEmail}
              onChange={handleCustomerDetailsChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-4 text-gray-700">Products</h3>
        {formData.billProducts.map((product, index) => (
          <div key={index} className="mb-4 border p-4 rounded-lg bg-gray-50">
            <label className="block text-gray-700 font-semibold">Product Name</label>
            <input
              type="text"
              name="productName"
              value={product.productName}
              onChange={(e) => handleProductChange(index, e)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              required
            />
            <label className="block text-gray-700 font-semibold mt-4">Quantity</label>
            <input
              type="number"
              name="productQuantity"
              value={product.productQuantity}
              onChange={(e) => handleProductChange(index, e)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              required
            />
            <label className="block text-gray-700 font-semibold mt-4">Price</label>
            <input
              type="number"
              name="productPrice"
              value={product.productPrice}
              onChange={(e) => handleProductChange(index, e)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              required
            />
            <label className="block text-gray-700 font-semibold mt-4">Recommended By</label>
            <input
              type="text"
              name="productRecommendedBy"
              value={product.productRecommendedBy}
              onChange={(e) => handleProductChange(index, e)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              required
            />
            <label className="block text-gray-700 font-semibold mt-4">Total</label>
            <input
              type="number"
              name="productTotal"
              value={product.productTotal}
              readOnly
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              onClick={() => handleDeleteProduct(index)}
              className="mt-4 p-2 bg-red-500 text-white rounded-md w-full hover:bg-red-600 transition duration-300"
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddProduct}
          className="mt-4 p-3 bg-blue-500 text-white rounded-md w-full hover:bg-blue-600 transition duration-300"
        >
          Add Product
        </button>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-4 text-gray-700">Services</h3>
        {formData.billServices.map((service, index) => (
          <div key={index} className="mb-4 border p-4 rounded-lg bg-gray-50">
            <label className="block text-gray-700 font-semibold">Service Name</label>
            <input
              type="text"
              name="serviceName"
              value={service.serviceName}
              onChange={(e) => handleServiceChange(index, e)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              required
            />
            <label className="block text-gray-700 font-semibold mt-4">Price</label>
            <input
              type="number"
              name="servicePrice"
              value={service.servicePrice}
              onChange={(e) => handleServiceChange(index, e)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              required
            />
            <label className="block text-gray-700 font-semibold mt-4">Service By</label>
            <input
              type="text"
              name="serviceBy"
              value={service.serviceBy}
              onChange={(e) => handleServiceChange(index, e)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              required
            />
            <label className="block text-gray-700 font-semibold mt-4">Total</label>
            <input
              type="number"
              name="serviceTotal"
              value={service.serviceTotal}
              readOnly
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              onClick={() => handleDeleteService(index)}
              className="mt-4 p-2 bg-red-500 text-white rounded-md w-full hover:bg-red-600 transition duration-300"
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddService}
          className="mt-4 p-3 bg-blue-500 text-white rounded-md w-full hover:bg-blue-600 transition duration-300"
        >
          Add Service
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 font-semibold">Total</label>
          <input
            type="number"
            name="billTotal"
            value={formData.billTotal}
            readOnly
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Billed By</label>
          <input
            type="text"
            name="billedBy"
            value={formData.billedBy}
            onChange={handleInputChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="w-full">
          <label className="block text-gray-700 font-semibold">Payment Mode</label>
          <select
            name="paymentMode"
            value={formData.paymentMode}
            onChange={handleInputChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 text-lg"
            required
          >
            <option value="Online">Online</option>
            <option value="Cash">Cash</option>
            <option value="Cash + Online">Cash + Online</option>
          </select>
        </div>

        <div className="w-full">
          <label className="block text-gray-700 font-semibold">Payment Status</label>
          <select
            name="paymentStatus"
            value={formData.paymentStatus}
            onChange={handleInputChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 text-lg"
            required
          >
            <option value="PAID">Paid</option>
            <option value="DUES">Dues</option>
            <option value="PARTIAL PAYMENT-DUE">Partial Payment-Due</option>
            <option value="PARTIAL-ADV">Partial-Adv</option>
          </select>
        </div>
      </div>

      {formData.paymentMode === 'Cash + Online' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 font-semibold">Paid By Cash</label>
            <input
              type="text"
              name="paidByCash"
              value={formData.paidByCash}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Paid By Online</label>
            <input
              type="text"
              name="paidByOnline"
              value={formData.paidByOnline}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>
      )}

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold">Bill Type</label>
        <select
          name="billType"
          value={formData.billType}
          onChange={handleInputChange}
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 text-lg"
          required
        >
          <option value="ADV">Advance Payment</option>
          <option value="DUES">Dues</option>
          <option value="REGULAR">Regular</option>
        </select>
      </div>

      <button
        type="button"
        onClick={nextStep}
        className="mt-6 p-3 bg-green-500 text-white rounded-md w-full hover:bg-green-600 transition duration-300"
      >
        Next
      </button>
    </div>
  );
};

export default InvoicesForm;
