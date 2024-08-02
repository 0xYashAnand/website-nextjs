import React, { FC, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useRouter } from "next/router";
import { FormData } from "../../types";

interface Props {
  formData: FormData;
}

const InvoiceDetails: FC<{ formData: FormData }> = ({ formData }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-gray-800 text-lg">
      <h1 className="text-3xl font-extrabold mb-6 text-blue-800">
        Invoice Details
      </h1>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">
          Customer Details
        </h3>
        <div className="grid grid-cols-2 gap-4 text-gray-600">
          <p>
            <strong>Name:</strong> {formData?.customerDetails?.customerName}
          </p>
          <p>
            <strong>Address:</strong> {formData?.customerDetails?.customerAddress}
          </p>
          <p>
            <strong>Mobile:</strong> {formData?.customerDetails?.customerMobile}
          </p>
          <p>
            <strong>Email:</strong> {formData?.customerDetails?.customerEmail}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4 text-blue-600">
          Products and Services
        </h3>
        {formData?.billProducts.length > 0 ||
        formData?.billServices.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase"
                >
                  Name
                </th>
                {  formData?.billProducts.length > 0 ?
                  <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase"
                >
                  Quantity
                </th> : <th> </th>
                }
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase"
                >
                  Rate
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase"
                >
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {formData?.billProducts.map((product, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-normal break-words">
                    {product.productName}
                  </td>
                  <td className="px-6 py-4 whitespace-normal break-words">
                    {product.productQuantity}
                  </td>
                  <td className="px-6 py-4 whitespace-normal break-words">
                    {product.productPrice}
                  </td>
                  <td className="px-6 py-4 whitespace-normal break-words">
                    {product.productTotal}
                  </td>
                </tr>
              ))}
              {formData?.billServices.map((service, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-normal break-words">
                    {service.serviceName}
                  </td>
                  <td className="px-6 py-4 whitespace-normal break-words">-</td>
                  <td className="px-6 py-4 whitespace-normal break-words">
                    {service.servicePrice}
                  </td>
                  <td className="px-6 py-4 whitespace-normal break-words">
                    {service.serviceTotal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No products or services added.</p>
        )}
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4 text-blue-600">
          Payment Details
        </h3>
        <p className="mb-2">
          <strong>Payment Mode:</strong> {formData?.paymentMode}
        </p>
        <p className="mb-2">
          <strong>Paid By Cash:</strong> {formData?.paidByCash}
        </p>
        <p className="mb-2">
          <strong>Paid By Online:</strong> {formData?.paidByOnline}
        </p>
        <p className="mb-2">
          <strong>Payment Status:</strong> {formData?.paymentStatus}
        </p>
      </div>
      <div className="mt-8 flex justify-end">
        <div className="w-2/5">
          <div className=" p-4"></div>
        </div>

        <div className="w-3/5 ml-4">
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">
              Total Amount : ₹{" "}
              <span className="inline-block whitespace-nowrap">
                {formData?.billTotal}
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 p-4">
        <p className="text-gray-700">Notes</p>
      </div>
    </div>
  );
};

const PdfGenerator: FC<Props> = ({ formData }) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const goBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto p-4 text-lg">
      <div ref={componentRef}>
        <InvoiceDetails formData={formData} />
      </div>

      <div className="mt-4 flex space-x-4">
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Download PDF
        </button>
        <button
          onClick={goBack}
          className="px-4 py-2 bg-gray-600 text-white rounded"
        >
          Previous Page
        </button>
      </div>
    </div>
  );
};

export default PdfGenerator;
