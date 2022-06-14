import type { NextApiRequest, NextApiResponse } from 'next'
import { CertificationsData } from '@customTypes/backendTypes'
import { certifications } from '@utils/certificatesData'

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<CertificationsData[]>
) {
  res.status(200).json(certifications)
}
