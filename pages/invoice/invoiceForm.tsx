import React, { FC, ChangeEvent, useEffect } from "react";
import { FormData, Product, Service } from "../../types";
import CompanyDetails from "../companyDetails";

interface Props {
  formData: FormData;
  setFormData: (data: FormData) => void;
  nextStep: () => void;
}

const InvoicesForm: FC<Props> = ({ formData, setFormData, nextStep }) => {
  useEffect(() => {
    if (formData?.paymentMode === "Cash") {
      setFormData({
        ...formData,
        paidByCash: formData?.billTotal.toString(),
        paidByOnline: "0",
      });
    } else if (formData?.paymentMode === "Online") {
      setFormData({
        ...formData,
        paidByCash: "0",
        paidByOnline: formData?.billTotal.toString(),
      });
    } else if (formData?.paymentMode === "Cash + Online") {
      setFormData({
        ...formData,
        paidByCash: "",
        paidByOnline: "",
      });
    }
  }, [formData?.paymentMode, formData?.billTotal]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
        ...formData?.customerDetails,
        [name]: value,
      },
    });
  };

  const handleProductChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    const products = [...formData?.billProducts];
    const product = products[index];

    if (name in product) {
      (product[name as keyof Product] as string | number) =
        name === "productQuantity" || name === "productPrice" ? +value : value;
      if (name === "productQuantity" || name === "productPrice") {
        product.productTotal = product.productQuantity * product.productPrice;
      }
    }

    setFormData({
      ...formData,
      billProducts: products,
      billTotal: calculateTotal(products, formData?.billServices),
    });
  };

  const handleServiceChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    const services = [...formData?.billServices];
    const service = services[index];

    if (name in service) {
      (service[name as keyof Service] as string | number) = name === "servicePrice" ? +value : value;
      if (name === "servicePrice") {
        service.serviceTotal = service.servicePrice;
      }
    }

    setFormData({
      ...formData,
      billServices: services,
      billTotal: calculateTotal(formData?.billProducts, services),
    });
  };

  const handleAddProduct = () => {
    setFormData({
      ...formData,
      billProducts: [
        ...formData?.billProducts,
        {
          productName: "",
          productQuantity: 0,
          productPrice: 0,
          productTotal: 0,
          productRecommendedBy: "",
        },
      ],
    });
  };

  const handleAddService = () => {
    setFormData({
      ...formData,
      billServices: [
        ...formData?.billServices,
        { serviceName: "", servicePrice: 0, serviceTotal: 0, serviceBy: "" },
      ],
    });
  };

  const handleDeleteProduct = (index: number) => {
    const products = formData?.billProducts.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      billProducts: products,
      billTotal: calculateTotal(products, formData?.billServices),
    });
  };

  const handleDeleteService = (index: number) => {
    const services = formData?.billServices.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      billServices: services,
      billTotal: calculateTotal(formData?.billProducts, services),
    });
  };

  const calculateTotal = (products: Product[], services: Service[]) => {
    const productsTotal = products.reduce(
      (sum, product) => sum + product.productTotal,
      0
    );
    const servicesTotal = services.reduce(
      (sum, service) => sum + service.serviceTotal,
      0
    );
    return productsTotal + servicesTotal;
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    // Add your phone number validation logic here
    return phoneNumber.length === 10 && /^\d+$/.test(phoneNumber);
  };

  const validateEmail = (email: string) => {
    // Basic email validation using regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = () => {
    // Form submission logic here, including validation
    if (!validatePhoneNumber(formData?.customerDetails.customerMobile)) {
      alert(
        "Invalid phone number. Please enter a valid 10-digit phone number."
      );
      return;
    }

    if (!validateEmail(formData?.customerDetails.customerEmail)) {
      alert("Invalid email address. Please enter a valid email.");
      return;
    }

    // Handle the rest of the form submission
    nextStep();
  };

  return (
    <div>
      <h2 className="text-5xl font-bold mb-6 text-center text-purple">
        Create Invoice
      </h2>

      <div className="grid lg:w-3/4 w-full grid-cols-2 md:grid-cols-2 gap-6 mb-6 ">
        <label
          htmlFor="companyId"
          className="text-3xl font-semibold text-purple pb-5"
        >
          Company ID
        </label>
        <input
          type="text"
          id="companyId"
          name="companyId"
          value=""
          onChange={handleInputChange}
          className="mt-2 block p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div className="container mx-auto">
        <CompanyDetails companyId={formData?.companyId} />
      </div>
      <div className="w-full p-6 bg-ebony text-black shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="center">
            <label
              htmlFor="invoiceDate"
              className="block text-white font-semibold mb-2"
            >
              Invoice Date
            </label>
            <input
              type="date"
              name="invoiceDate"
              value={
                formData?.billdate
                  ? formData?.billdate.toISOString().substr(0, 10)
                  : ""
              }
              onChange={handleInputChange}
              className="block w-full md:w-2/3 p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          {formData?.billType === "ADV" && (
            <div>
              <label
                htmlFor="bookingDate"
                className="block font-semibold mb-2 text-white"
              >
                Booking Date
              </label>
              <input
                type="date"
                name="bookingDate"
                value={
                  formData?.billdate
                    ? formData?.billdate.toISOString().substr(0, 10)
                    : ""
                }
                onChange={handleInputChange}
                className="block w-full md:w-2/3 p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-white font-semibold mb-2">
              Bill Type
            </label>
            <select
              name="billType"
              value={formData?.billType}
              onChange={handleInputChange}
              className="block w-full md: p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 text-lg"
              required
            >
              <option value="Full">Full Payment</option>
              <option value="ADV">Advance Booking</option>
              <option value="DUES">Dues Payment</option>
              <option value="PARTIAL">Partial Payment</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-4 text-white text-center">
            Customer Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="customerName"
                className="block text-amber font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                id="customerName"
                name="customerName"
                value={formData?.customerDetails.customerName}
                onChange={handleCustomerDetailsChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="customerAddress"
                className="block text-amber font-semibold"
              >
                Address
              </label>
              <input
                type="text"
                id="customerAddress"
                name="customerAddress"
                value={formData?.customerDetails.customerAddress}
                onChange={handleCustomerDetailsChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="customerMobile"
                className="block text-amber font-semibold"
              >
                Mobile
              </label>
              <input
                type="tel"
                id="customerMobile"
                name="customerMobile"
                value={formData?.customerDetails.customerMobile}
                onChange={handleCustomerDetailsChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="customerEmail"
                className="block text-amber font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="customerEmail"
                name="customerEmail"
                value={formData?.customerDetails.customerEmail}
                onChange={handleCustomerDetailsChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-amber">
              Products & Services
            </h3>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-4 md:mt-0">
              <button
                type="button"
                onClick={handleAddService}
                className="p-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Add Service
              </button>
              <button
                type="button"
                onClick={handleAddProduct}
                className="p-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Add Product
              </button>
            </div>
          </div>
        </div>

        <div className="mb-6">
          {formData?.billProducts.map((product, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-4"
            >
              <div>
                <label
                  htmlFor={`productName-${index}`}
                  className="block text-amber font-semibold"
                >
                  Name
                </label>
                <input
                  type="text"
                  id={`productName-${index}`}
                  name="productName"
                  value={product.productName}
                  onChange={(e) => handleProductChange(index, e)}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor={`productQuantity-${index}`}
                  className="block text-amber font-semibold"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  id={`productQuantity-${index}`}
                  name="productQuantity"
                  value={product.productQuantity}
                  onChange={(e) => handleProductChange(index, e)}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor={`productPrice-${index}`}
                  className="block text-amber font-semibold"
                >
                  Price
                </label>
                <input
                  type="number"
                  id={`productPrice-${index}`}
                  name="productPrice"
                  value={product.productPrice}
                  onChange={(e) => handleProductChange(index, e)}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor={`productRecommendedBy-${index}`}
                  className="block text-amber font-semibold"
                >
                  Recommended By
                </label>
                <input
                  type="text"
                  id={`productRecommendedBy-${index}`}
                  name="productRecommendedBy"
                  value={product.productRecommendedBy}
                  onChange={(e) => handleProductChange(index, e)}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-end">
                <button
                  type="button"
                  onClick={() => handleDeleteProduct(index)}
                  className="w-full p-3 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-6">
          {formData?.billServices.map((service, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4"
            >
              <div>
                <label
                  htmlFor={`serviceName-${index}`}
                  className="block text-amber font-semibold"
                >
                  Name
                </label>
                <input
                  type="text"
                  id={`serviceName-${index}`}
                  name="serviceName"
                  value={service.serviceName}
                  onChange={(e) => handleServiceChange(index, e)}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor={`servicePrice-${index}`}
                  className="block text-amber font-semibold"
                >
                  Price
                </label>
                <input
                  type="number"
                  id={`servicePrice-${index}`}
                  name="servicePrice"
                  value={service.servicePrice}
                  onChange={(e) => handleServiceChange(index, e)}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor={`serviceBy-${index}`}
                  className="block text-amber font-semibold"
                >
                  Service By
                </label>
                <input
                  type="text"
                  id={`serviceBy-${index}`}
                  name="serviceBy"
                  value={service.serviceBy}
                  onChange={(e) => handleServiceChange(index, e)}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-end">
                <button
                  type="button"
                  onClick={() => handleDeleteService(index)}
                  className="w-full p-3 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-amber font-semibold">Total</label>
            <input
              type="number"
              name="billTotal"
              value={formData?.billTotal}
              readOnly
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-amber font-semibold">Billed By</label>
            <input
              type="text"
              name="billedBy"
              value={formData?.billedBy}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="w-full">
            <label className="block text-amber font-semibold">
              Payment Mode
            </label>
            <select
              name="paymentMode"
              value={formData?.paymentMode}
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
            <label className="block text-amber font-semibold">
              Payment Status
            </label>
            <select
              name="paymentStatus"
              value={formData?.paymentStatus}
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

        {formData?.paymentMode === "Cash + Online" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-amber font-semibold">
                Paid By Cash
              </label>
              <input
                type="text"
                name="paidByCash"
                value={formData?.paidByCash}
                onChange={handleInputChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-amber font-semibold">
                Paid By Online
              </label>
              <input
                type="text"
                name="paidByOnline"
                value={formData?.paidByOnline}
                onChange={handleInputChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        )}

        <div className="text-right">
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full md:w-auto p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoicesForm;
