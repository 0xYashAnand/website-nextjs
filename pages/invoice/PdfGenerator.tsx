import React, { FC, useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { FormData } from "../../types";

interface Props {
  formData: FormData;
  prevStep: () => void;
}

interface CompanyDetails {
  companyName: string;
  companyAddress: string;
  companyCity: string;
  companyPincode: string;
  companyState: string;
  companyCountry: string;
  companyContact: string;
  companyEmail: string;
  createdAt: string;
  updatedAt: string;
}

const InvoiceDetails: FC<{ formData: FormData; companyDetails: CompanyDetails | null }> = ({ formData, companyDetails }) => {
  return (
    <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg text-gray-800 text-lg">
      
      {/* Company Details */}
      {companyDetails && (
        <div className="mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-gray-700">
            Company Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-gray-600">
            <p>
              <strong>Name:</strong> {companyDetails.companyName}
            </p>
            <p>
              <strong>Address:</strong> {companyDetails.companyAddress}, {companyDetails.companyCity}, {companyDetails.companyState}, {companyDetails.companyPincode}
            </p>
            <p>
              <strong>Contact:</strong> {companyDetails.companyContact}
            </p>
            <p>
              <strong>Email:</strong> {companyDetails.companyEmail}
            </p>
          </div>
        </div>
      )}

      {/* Customer Details */}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-gray-700">
          Customer Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-gray-600">
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

      {/* Products and Services */}
      <div className="mt-4 sm:mt-8">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-blue-600">
          Products and Services
        </h3>
        {formData?.billProducts.length > 0 || formData?.billServices.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th
                    scope="col"
                    className="px-4 sm:px-6 py-2 sm:py-3 text-left text-sm font-semibold text-gray-700 uppercase"
                  >
                    Name
                  </th>
                  {formData?.billProducts.length > 0 ? (
                    <th
                      scope="col"
                      className="px-4 sm:px-6 py-2 sm:py-3 text-left text-sm font-semibold text-gray-700 uppercase"
                    >
                      Quantity
                    </th>
                  ) : (
                    <th> </th>
                  )}
                  <th
                    scope="col"
                    className="px-4 sm:px-6 py-2 sm:py-3 text-left text-sm font-semibold text-gray-700 uppercase"
                  >
                    Rate
                  </th>
                  <th
                    scope="col"
                    className="px-4 sm:px-6 py-2 sm:py-3 text-left text-sm font-semibold text-gray-700 uppercase"
                  >
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {formData?.billProducts.map((product, index) => (
                  <tr key={index} className="hover:bg-gray-100 transition">
                    <td className="px-4 sm:px-6 py-2 sm:py-4 whitespace-normal break-words">
                      {product.productName}
                    </td>
                    <td className="px-4 sm:px-6 py-2 sm:py-4 whitespace-normal break-words">
                      {product.productQuantity}
                    </td>
                    <td className="px-4 sm:px-6 py-2 sm:py-4 whitespace-normal break-words">
                      {product.productPrice}
                    </td>
                    <td className="px-4 sm:px-6 py-2 sm:py-4 whitespace-normal break-words">
                      {product.productTotal}
                    </td>
                  </tr>
                ))}
                {formData?.billServices.map((service, index) => (
                  <tr key={index} className="hover:bg-gray-100 transition">
                    <td className="px-4 sm:px-6 py-2 sm:py-4 whitespace-normal break-words">
                      {service.serviceName}
                    </td>
                    <td className="px-4 sm:px-6 py-2 sm:py-4 whitespace-normal break-words">-</td>
                    <td className="px-4 sm:px-6 py-2 sm:py-4 whitespace-normal break-words">
                      {service.servicePrice}
                    </td>
                    <td className="px-4 sm:px-6 py-2 sm:py-4 whitespace-normal break-words">
                      {service.serviceTotal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No products or services added.</p>
        )}
      </div>

      {/* Payment Details */}
      <div className="mt-6 sm:mt-8">
        <h3 className="text-sm sm:text-2xl font-bold mb-2 sm:mb-4 text-blue-600">
          Payment Summary
        </h3>
        <p className="mb-1 sm:mb-2 text-sm">
          <strong>Payment Mode:</strong> {formData?.paymentMode}
        </p>
        {formData?.paidByCash!=='0' && (<p className="mb-1 sm:mb-2 text-sm">
          <strong>Paid By Cash:</strong> {formData?.paidByCash}
        </p>)}
        {formData?.paidByOnline!=='0' && (<p className="mb-1 sm:mb-2 text-sm">
          <strong>Paid By Online:</strong> {formData?.paidByOnline}
        </p>)}
        <p className="mb-1 sm:mb-2 text-sm">
          <strong>Payment Status:</strong> {formData?.paymentStatus}
        </p>
      </div>

      {/* Total Amount */}
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-end items-end sm:items-center space-y-4 sm:space-y-0">
        <div className="w-full sm:w-auto">
          <div className=" p-4"></div>
        </div>

        <div className="w-full sm:w-auto ml-0 sm:ml-4">
          <div className="p-4 bg-blue-50 rounded-lg shadow-md">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-600">
              Total Amount: ₹{" "}
              <span className="inline-block whitespace-nowrap">
                {formData?.billTotal}
              </span>
            </h3>
          </div>
        </div>
      </div>
      
      {/* Notes */}
      <div className="bg-gray-200 p-4 rounded-lg mt-6 sm:mt-8">
        <p className="text-gray-700">Notes</p>
      </div>
    </div>
  );
};

const PdfGenerator: FC<Props> = ({ formData, prevStep}) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const [companyDetails, setCompanyDetails] = useState<CompanyDetails | null>(null);

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const response = await fetch(`/api/company/${formData.companyId}`);
        const result = await response.json();
        if (response.ok) {
          setCompanyDetails(result.data);
        } else {
          console.error("Error fetching company details:", result.message);
        }
      } catch (error) {
        console.error("Error fetching company details:", error);
      }
    };

    fetchCompanyDetails();
  }, [formData.companyId]);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });



  return (
    <div className="container mx-auto text-lg p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-extrabold mb-4 sm:mb-6 text-blue-800">
        Invoice Details
      </h1>
      <div ref={componentRef}>
        <InvoiceDetails formData={formData} companyDetails={companyDetails} />
      </div>

      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 space-x-0 sm:space-x-4">
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
        >
          Download PDF
        </button>
        <button
          onClick={prevStep}
          className="px-4 py-2 bg-gray-600 text-white rounded shadow hover:bg-gray-700 transition"
        >
          Previous Page
        </button>
      </div>
    </div>
  );
};

export default PdfGenerator;
