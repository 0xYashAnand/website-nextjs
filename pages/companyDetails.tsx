import React, { useEffect, useState } from 'react';

interface Props {
  companyId: string;
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

const CompanyDetails = ({ companyId }: Props) => {
  const [companyDetails, setCompanyDetails] = useState<CompanyDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const response = await fetch(`/api/company/${companyId}`);
        const result = await response.json();
        if (response.ok) {
          setCompanyDetails(result.data);
        } else {
          setError(result.message || 'Error fetching company details');
        }
      } catch (error) {
        setError('Error fetching company details');
        console.error('Error fetching company details:', error);
      } finally {
        setLoading(false);
      }
    };
   
    fetchCompanyDetails();
  }, [companyId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
<div className="grid lg:w w-full   md:grid gap-6 mb-6 text-white">
  <div className="bg-ebony rounded-lg p-6 shadow-md">
    <h2 className="font-semibold text-purple text-lg mb-4">Company Details</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
      <div className="mb-2">
        <p><strong>Name:</strong> {companyDetails?.companyName}</p>
      </div>
      <div className="mb-2">
        <p><strong>Address:</strong> {companyDetails?.companyAddress}</p>
      </div>
      <div className="mb-2">
        <p><strong>City:</strong> {companyDetails?.companyCity}</p>
      </div>
      <div className="mb-2">
        <p><strong>Pincode:</strong> {companyDetails?.companyPincode}</p>
      </div>
      <div className="mb-2">
        <p><strong>State:</strong> {companyDetails?.companyState}</p>
      </div>
      <div className="mb-2">
        <p><strong>Country:</strong> {companyDetails?.companyCountry}</p>
      </div>
      <div className="mb-2">
        <p><strong>Contact:</strong> {companyDetails?.companyContact}</p>
      </div>
      <div className="mb-2">
        <p><strong>Email:</strong> {companyDetails?.companyEmail}</p>
      </div>
    </div>
  </div>
</div>

  );
};

export default CompanyDetails;
