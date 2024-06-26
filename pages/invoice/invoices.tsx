import React, { FC, useState } from 'react';
import { FormData } from '../../types';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import InvoicesForm from './invoiceForm';
import Review from './review';
import PdfGenerator from './PdfGenerator';

const Invoices: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    companyId: '667819e168aacc053a9a4ae4',
    customerDetails: {
      customerName: 'Yash Anand Singh',
      customerAddress: 'Sector-59, Noida, India',
      customerMobile: '+91 9865233212',
      customerEmail: 'email.name@gmail.com',
    },
    billProducts: [
      {
        productName: 'Dummy Product',
        productQuantity: 1,
        productPrice: 125,
        productTotal: 125,
        productRecommendedBy: 'Amit Kumar',
      },
    ],
    billServices: [
      {
        serviceName: 'Dummy Service',
        servicePrice: 520,
        serviceTotal: 520,
        serviceBy: 'DJ Sharma',
      },
    ],
    billTotal: 0,
    billedBy: 'Yash Anand',
    paymentMode: 'Cash',
    paidByCash: '420',
    paidByOnline: '500',
    paymentStatus: 'PAID',
    billType: 'ADV',
  });

  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
        {step === 1 && (
          <InvoicesForm formData={formData} setFormData={setFormData} nextStep={nextStep} />
        )}
        {step === 2 && (
          <Review formData={formData} prevStep={prevStep} nextStep={nextStep} />
        )}
        {step === 3 && (
          <PdfGenerator formData={formData} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Invoices;
