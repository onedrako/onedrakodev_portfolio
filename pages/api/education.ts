import type { NextApiRequest, NextApiResponse } from 'next'
import type { EducationData } from 'types/backendTypes'

import { education } from '@utils/data/educationData'

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<EducationData[]>
) {
  res.status(200).json(education)
}
