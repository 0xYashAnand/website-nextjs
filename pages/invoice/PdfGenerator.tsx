import React, { FC, useRef } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; 
import { FormData } from '../../types';

interface Props {
  formData: FormData;
}

const PdfGenerator: FC<Props> = ({ formData }) => {
  const printRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = () => {
    if (!printRef.current) return;

    const pdf = new jsPDF();
    const pdfWidth = pdf.internal.pageSize.getWidth();

    let y = 20;
    
    // Add title
    pdf.setFontSize(18);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Invoice Details', 10, y);
    y += 10;
    
    // Add customer details
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`Customer Name: ${formData.customerDetails.customerName}`, 10, y);
    y += 10;
    pdf.text(`Customer Address: ${formData.customerDetails.customerAddress}`, 10, y);
    y += 10;
    pdf.text(`Customer Mobile: ${formData.customerDetails.customerMobile}`, 10, y);
    y += 10;
    pdf.text(`Customer Email: ${formData.customerDetails.customerEmail}`, 10, y);
    y += 15;

    // Add Products table
    pdf.setFontSize(14);
    pdf.text('Products', 10, y);
    y += 10;

  const productsTable = {
    headers: ['Name', 'Quantity', 'Rate', 'Total'],
    rows: formData.billProducts.map(product => [
      product.productName,
      product.productQuantity.toString(),
      product.productPrice.toString(),
      product.productTotal.toString()
    ])
  };

  pdf.autoTable({
    startY: y,
    head: [productsTable.headers],
    body: productsTable.rows,
  });
  y = pdf.autoTableEndPosY() + 10;

  // Add Services table
  pdf.setFontSize(14);
  pdf.text('Services', 10, y);
  y += 10;

  const servicesTable = {
    headers: ['Name', 'Rate', 'Total'],
    rows: formData.billServices.map(service => [
      service.serviceName,
      service.servicePrice.toString(),
      service.serviceTotal.toString()
    ])
  };

  pdf.autoTable({
    startY: y,
    head: [servicesTable.headers],
    body: servicesTable.rows,
  });
  y = pdf.autoTableEndPosY() + 10;

    // Add Invoice Total
    pdf.setFontSize(14);
    pdf.text(`Invoice Total Amount: ${formData.billTotal}`, 10, y);

    // Save the PDF
    pdf.save('invoice.pdf');
  };

  return (
    <div className="container mx-auto p-4">
      <div ref={printRef} className="bg-white p-4 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Invoice Details</h1>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Customer Details</h3>
          <p><strong>Name:</strong> {formData.customerDetails.customerName}</p>
          <p><strong>Address:</strong> {formData.customerDetails.customerAddress}</p>
          <p><strong>Mobile:</strong> {formData.customerDetails.customerMobile}</p>
          <p><strong>Email:</strong> {formData.customerDetails.customerEmail}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">Products</h3>
          {formData.billProducts.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rate</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {formData.billProducts.map((product, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{product.productName}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{product.productQuantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{product.productPrice}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{product.productTotal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No products added.</p>
          )}
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">Services</h3>
          {formData.billServices.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rate</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {formData.billServices.map((service, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{service.serviceName}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{service.servicePrice}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{service.serviceTotal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No services added.</p>
          )}
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">Invoice Total</h3>
          <p><strong>Total Amount:</strong> {formData.billTotal}</p>
        </div>
      </div>
      
      <button onClick={handleDownloadPdf} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        Download PDF
      </button>
    </div>
  );
};

export default PdfGenerator;
