import axios from 'axios';

export default async function handler(req, res) {
  const { cid } = req.query;
  try {
    const response = await axios.get(`http://localhost:5000/company/${cid}`);
    const companyDetails = response.data;

    res.status(200).json({
      message: 'Company details fetched successfully',
      data: companyDetails,
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch company details', error: error.message });
  }
}