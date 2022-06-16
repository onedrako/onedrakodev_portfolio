import type { NextApiRequest, NextApiResponse } from 'next'
import type { EducationData } from 'types/backendTypes'

import { education } from '@utils/data/educationData'

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<EducationData[]>
) {
  const { name } = req.query
  const selectedSchool: EducationData[] = education.filter(route => route.title === name)

  res.status(200).json(selectedSchool)
}
