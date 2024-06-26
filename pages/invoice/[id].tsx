import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from '../../styles/Invoices.module.css';

const InvoicePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [invoice, setInvoice] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/bill/${id}`)
        .then(response => setInvoice(response.data.data))
        .catch(error => console.error(error));
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvoice({ ...invoice, [name]: value });
  };

  const handleNestedInputChange = (e, index, type) => {
    const { name, value } = e.target;
    const updatedItems = [...invoice[type]];
    updatedItems[index] = { ...updatedItems[index], [name]: value };
    setInvoice({ ...invoice, [type]: updatedItems });
  };

  const saveChanges = () => {
    axios.put(`http://localhost:5000/bill/${id}`, invoice)
      .then(response => {
        setInvoice(response.data.data);
        setEditMode(false);
      })
      .catch(error => console.error(error));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Invoice', 14, 16);
    doc.autoTable({
      head: [['Product/Service', 'Price', 'Quantity', 'Total']],
      body: [
        ...invoice.billProducts.map(p => [p.productName, p.productPrice, p.productQuantity, p.productTotal]),
        ...invoice.billServices.map(s => [s.serviceName, s.servicePrice, 1, s.serviceTotal])
      ],
    });
    doc.save('invoice.pdf');
  };

  if (!invoice) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Invoice</h1>
        <div className="mb-4">
          <label className="block mb-2">Company ID</label>
          <input
            type="text"
            name="companyId"
            value={invoice.companyId}
            onChange={handleInputChange}
            disabled={!editMode}
            className={styles.inputField}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Customer ID</label>
          <input
            type="text"
            name="customerId"
            value={invoice.customerId}
            onChange={handleInputChange}
            disabled={!editMode}
            className={styles.inputField}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Total Amount</label>
          <input
            type="number"
            name="totalAmount"
            value={invoice.totalAmount}
            onChange={handleInputChange}
            disabled={!editMode}
            className={styles.inputField}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Billed By</label>
          <input
            type="text"
            name="billedBy"
            value={invoice.billedBy}
            onChange={handleInputChange}
            disabled={!editMode}
            className={styles.inputField}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Payment Mode</label>
          <input
            type="text"
            name="paymentMode"
            value={invoice.paymentMode}
            onChange={handleInputChange}
            disabled={!editMode}
            className={styles.inputField}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Paid by Cash</label>
          <input
            type="number"
            name="paidByCash"
            value={invoice.paidByCash}
            onChange={handleInputChange}
            disabled={!editMode}
            className={styles.inputField}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Paid by Online</label>
          <input
            type="number"
            name="paidByOnline"
            value={invoice.paidByOnline}
            onChange={handleInputChange}
            disabled={!editMode}
            className={styles.inputField}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Payment Status</label>
          <input
            type="text"
            name="paymentStatus"
            value={invoice.paymentStatus}
            onChange={handleInputChange}
            disabled={!editMode}
            className={styles.inputField}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Bill Type</label>
          <input
            type="text"
            name="billType"
            value={invoice.billType}
            onChange={handleInputChange}
            disabled={!editMode}
            className={styles.inputField}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Invoice Date</label>
          <input
            type="text"
            name="invoiceDate"
            value={new Date(invoice.invoiceDate).toLocaleString()}
            disabled
            className={styles.inputField}
          />
        </div>
        <h2 className="text-xl font-bold mb-2">Products</h2>
        {invoice.billProducts.map((product, index) => (
          <div key={product._id} className="mb-4">
            <label className="block mb-2">Product Name</label>
            <input
              type="text"
              name="productName"
              value={product.productName}
              onChange={(e) => handleNestedInputChange(e, index, 'billProducts')}
              disabled={!editMode}
              className={styles.inputField}
            />
            <label className="block mb-2">Product Price</label>
            <input
              type="number"
              name="productPrice"
              value={product.productPrice}
              onChange={(e) => handleNestedInputChange(e, index, 'billProducts')}
              disabled={!editMode}
              className={styles.inputField}
            />
            <label className="block mb-2">Product Quantity</label>
            <input
              type="number"
              name="productQuantity"
              value={product.productQuantity}
              onChange={(e) => handleNestedInputChange(e, index, 'billProducts')}
              disabled={!editMode}
              className={styles.inputField}
            />
            <label className="block mb-2">Product Total</label>
            <input
              type="number"
              name="productTotal"
              value={product.productTotal}
              onChange={(e) => handleNestedInputChange(e, index, 'billProducts')}
              disabled={!editMode}
              className={styles.inputField}
            />
          </div>
        ))}
        <h2 className="text-xl font-bold mb-2">Services</h2>
        {invoice.billServices.map((service, index) => (
          <div key={service._id} className="mb-4">
            <label className="block mb-2">Service Name</label>
            <input
              type="text"
              name="serviceName"
              value={service.serviceName}
              onChange={(e) => handleNestedInputChange(e, index, 'billServices')}
              disabled={!editMode}
              className={styles.inputField}
            />
            <label className="block mb-2">Service Price</label>
            <input
              type="number"
              name="servicePrice"
              value={service.servicePrice}
              onChange={(e) => handleNestedInputChange(e, index, 'billServices')}
              disabled={!editMode}
              className={styles.inputField}
            />
            <label className="block mb-2">Service Total</label>
            <input
              type="number"
              name="serviceTotal"
              value={service.serviceTotal}
              onChange={(e) => handleNestedInputChange(e, index, 'billServices')}
              disabled={!editMode}
              className={styles.inputField}
            />
          </div>
        ))}
        <div className="flex justify-between mt-4">
          <button onClick={() => setEditMode(!editMode)} className={`${styles.button} ${styles.buttonBlue}`}>
            {editMode ? 'Cancel' : 'Edit'}
          </button>
          {editMode && <button onClick={saveChanges} className={`${styles.button} ${styles.buttonGreen}`}>Save</button>}
          <button onClick={generatePDF} className={`${styles.button} ${styles.buttonRed}`}>Generate PDF</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InvoicePage;
