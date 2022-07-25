import type { NextApiRequest, NextApiResponse } from 'next'
import type { LaboralExperienceData } from 'types/backendTypes'

const laboralExperience: LaboralExperienceData[] = [
  {
    id: 1,
    institution: 'Investor on my own',
    title: 'Investor',
    startDate: '2017-11-01',
    endDate: 'Present',
    description: 'Investing on the Mexican Stock Market, SIC and cryptocurrencies',
    category: 'Investments',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968260.png',
    important: true
  },
  {
    id: 2,
    institution: 'Centro Nacional de Control del Gas Natural',
    title: 'Social Service',
    startDate: '2017-11-01',
    endDate: '2018-03-01',
    category: 'Business',
    description: 'Principally Organization for the Area',
    iconUrl: 'https://i.imgur.com/G55Mj0h.png',
    important: true
  },
  {
    id: 3,
    institution: 'Centro Nacional de Control del Gas Natural',
    title: 'Jr Analyst',
    startDate: '2018-04-01',
    endDate: '2019-02-01',
    category: 'Business',
    description: 'Organization in general and for the data of area, providers negotiation and control',
    iconUrl: 'https://i.imgur.com/G55Mj0h.png',
    important: true
  },
  {
    id: 4,
    institution: 'El Compi / Sabor a Mi',
    title: 'Co-founder / Manager',
    startDate: '2019-07-17',
    endDate: '2021-03-31',
    category: 'Business',
    description: 'I founded a Dark Mexican Kitchen in Mexico City, was in charge of Supply, Budget, cost and forecast, management before the authorities, contact to suppliers, customer service, human resources management y maintenance for the unit.',
    iconUrl: 'https://i.imgur.com/5vFcRNi.png',
    important: true
  }
]

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<LaboralExperienceData[]>
) {
  res.status(200).json(laboralExperience)
}
