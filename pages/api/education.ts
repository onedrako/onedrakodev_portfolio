import type { NextApiRequest, NextApiResponse } from 'next'
import type { EducationData } from 'types/backendTypes'

const laboralExperience: EducationData[] = [
  {
    id: 1,
    institution: 'Autonomous University of State of Mexico(UAEM)',
    startDate: '2010-08-01',
    endDate: '2013-06-17',
    category: 'Languages',
    description: 'English Intermediate',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Logo_de_la_UAEMex.svg/1200px-Logo_de_la_UAEMex.svg.png'
  },
  {
    id: 2,
    institution: 'National Autonomous University of Mexico(UNAM)',
    startDate: '2013-10-27',
    endDate: '2013-10-27',
    category: 'Languages',
    description: 'English Intermediate',
    iconUrl: 'https://seeklogo.com/images/U/unam-logo-32B6627636-seeklogo.com.png'
  },
  {
    id: 3,
    institution: 'National Autonomous University of Mexico(UNAM)',
    startDate: '2013-01-08',
    endDate: '2017-01-06',
    category: 'Business',
    description: 'Bachelor´s in Administration',
    iconUrl: 'https://seeklogo.com/images/U/unam-logo-32B6627636-seeklogo.com.png'
  },
  {
    id: 4,
    institution: 'National Autonomous University of Mexico(UNAM)',
    startDate: '2018-01-09',
    endDate: '2019-01-05',
    category: 'Business',
    description: 'Degree Diploma in Tourist Business Administration',
    iconUrl: 'https://seeklogo.com/images/U/unam-logo-32B6627636-seeklogo.com.png'
  },
  {
    id: 5,
    institution: 'Platzi',
    startDate: '2019-15-04',
    endDate: '2021-06-03',
    category: 'Technology',
    description: 'JavaScript School',
    progress: 23,
    total: 23,
    iconUrl: 'https://static.platzi.com/media/platzi-isotipo@2x.png'
  },
  {
    id: 6,
    institution: 'Platzi',
    startDate: '2019-15-04',
    endDate: '2021-02-04',
    category: 'Technology',
    description: 'Frontend with React',
    progress: 32,
    total: 32,
    iconUrl: 'https://static.platzi.com/media/platzi-isotipo@2x.png'
  },
  {
    id: 7,
    institution: 'Platzi',
    startDate: '2019-15-04',
    endDate: '2021-02-04',
    category: 'Technology',
    description: 'App Development with React Native',
    progress: 17,
    total: 17,
    iconUrl: 'https://static.platzi.com/media/platzi-isotipo@2x.png'
  },
  {
    id: 8,
    institution: 'Platzi',
    startDate: '2019-15-04',
    endDate: '2021-07-04',
    category: 'Languages',
    description: 'Platzi English Academy',
    progress: 32,
    total: 32,
    iconUrl: 'https://static.platzi.com/media/platzi-isotipo@2x.png'
  },
  {
    id: 9,
    institution: 'Platzi',
    startDate: '2021-15-04',
    endDate: 'Present',
    category: 'Technology',
    description: 'Backend Development with Node.js',
    progress: 20,
    total: 32,
    iconUrl: 'https://static.platzi.com/media/platzi-isotipo@2x.png'
  },
  {
    id: 10,
    institution: 'Platzi',
    startDate: '2021-15-04',
    endDate: 'Present',
    category: 'Technology',
    description: 'Web Development School',
    progress: 70,
    total: 121,
    iconUrl: 'https://static.platzi.com/media/platzi-isotipo@2x.png'
  }

]

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<EducationData[]>
) {
  res.status(200).json(laboralExperience)
}
