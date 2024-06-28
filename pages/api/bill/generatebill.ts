import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const generateBill = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const response = await axios.post('http://localhost:5000/bill/generatebill', req.body);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to generate bill' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default generateBill;
