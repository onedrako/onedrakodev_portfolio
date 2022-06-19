import type { NextApiRequest, NextApiResponse } from 'next'
import { CertificatesToRenderType } from '@customTypes/backendTypes'

import { certificatesToRender } from '@utils/data/certificatesToRender'

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<CertificatesToRenderType[]>
) {
  res.status(200).json(certificatesToRender)
}
