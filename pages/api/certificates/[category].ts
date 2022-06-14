// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { CertificationsData } from '@customTypes/backendTypes'
import { certifications } from '@utils/certificatesData'

const getOrdererElements = (limit:string, offset:string) => {
  const certificates = [...certifications]
  const orderedCertificates = certificates.sort((a, b) => {
    if (a.date > b.date) {
      return -1
    }
    if (a.date < b.date) {
      return 1
    }
    return 0
  })
  const listOfElements: CertificationsData[] = orderedCertificates.slice(parseInt(offset), (parseInt(offset) + parseInt(limit)))
  return listOfElements
}

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  console.log(req.query)
  const { limit } = req.query || 5
  const { offset } = req.query || 0
  const { category } = req.query

  let data: CertificationsData[]

  if (category === 'last') {
    data = getOrdererElements(limit as string, offset as string)
  } else {
    data = certifications
  }

  res.status(200).json(data)
}
