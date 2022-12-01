import axios, { AxiosError } from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const config = {
        method: req.method,
        url: process.env.SUPERADMIN_API_URL + '/platforms',
        data: {
            ...req.body
        },
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${req.headers.authorization}`
        }
    }
        const post = await axios(config).then((response) => {
            res.status(200).json(response.data)
        }).catch((error: any) => {
            if(error.response) res.status(error.response.status || 400).json({ message: error.response?.data?.message || "Something went wrong" })
        })
    
}