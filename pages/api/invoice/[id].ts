// import { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   const { id } = req.query;

//   if (req.method === 'GET') {
//     try {
//       const response = await axios.get(`https://app-backend-4mv8.onrender.com/bill/${id}`);
//       res.status(200).json(response.data.data); // Adjusting to match the response structure
//     } catch (error: any) {
//       res.status(error.response?.status || 500).json({ message: error.message });
//     }
//   } else if (req.method === 'PUT') {
//     try {
//       const response = await axios.put(`https://app-backend-4mv8.onrender.com/bill/${id}`, req.body);
//       res.status(200).json(response.data.data); // Adjusting to match the response structure
//     } catch (error: any) {
//       res.status(error.response?.status || 500).json({ message: error.message });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// };
