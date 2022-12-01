import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { id } = req.query
    const config = {
        method: req.method,
        url: `${process.env.SUPERADMIN_API_URL}/platforms/${id}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${req.headers.authorization}`
        }
    }
        console.log("🚀 ~ file: [id].ts:24 ~ config", config)
        const post = await axios(config).then((response) => {
            res.status(200).json(response.data)
        }).catch((error: any) => {
            if(error.response) res.status(error.response.status || 400).json({ message: error.response?.data?.message || "Something went wrong" })
        })
    
}