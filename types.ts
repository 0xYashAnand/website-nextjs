export interface CustomerDetails {
    customerName: string;
    customerAddress: string;
    customerMobile: string;
    customerEmail: string;
  }
  
  export interface Product {
    productName: string;
    productQuantity: number;
    productPrice: number;
    productTotal: number;
    productRecommendedBy: string;
  }
  
  export interface Service {
    serviceName: string;
    servicePrice: number;
    serviceTotal: number;
    serviceBy: string;
  }
  
  export interface FormData {
    companyId: string;
    customerDetails: CustomerDetails;
    billProducts: Product[];
    billServices: Service[];
    billTotal: number;
    billedBy: string;
    paymentMode: string;
    paidByCash: string;
    paidByOnline: string;
    paymentStatus: string;
    billType: string;
  }
  