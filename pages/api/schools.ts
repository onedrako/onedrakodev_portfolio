import type { NextApiRequest, NextApiResponse } from 'next'
import { schoolAndRoutes } from '@utils/data/schoolsData'

// Types
import { SchoolsAndRoutesData } from '@customTypes/backendTypes'

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<SchoolsAndRoutesData[]>
) {
  res.status(200).json(schoolAndRoutes)
}
