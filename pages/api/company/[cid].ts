import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cid } = req.query;
  try {
    const response = await axios.get(`https://app-backend-4mv8.onrender.com/company/${cid}`);
    const companyDetails = response.data;

    res.status(200).json({
      message: 'Company details fetched successfully',
      data: companyDetails,
    });
  } catch (error) {
    if(error){
      res.status(500).json({ message: 'Failed to fetch company details' });
    }
    
  }
}