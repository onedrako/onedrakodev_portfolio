// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { CertificationsData, SchoolsAndRoutesData } from '@customTypes/backendTypes'
import { certifications } from '@utils/data/certificatesData'
import { schoolAndRoutes } from '@utils/data/schoolsData'

const getOrdererElementsByDate = (limit:string, offset:string, data:(CertificationsData | SchoolsAndRoutesData)[]) => {
  const orderedCertificates = data.sort((a, b) => {
    if (a.date > b.date) {
      return -1
    }
    if (a.date < b.date) {
      return 1
    }
    return 0
  })
  const listOfElements: (CertificationsData | SchoolsAndRoutesData)[] = orderedCertificates.slice(parseInt(offset), (parseInt(offset) + parseInt(limit)))
  return listOfElements
}

const getOrderFromLearningPath = (course: CertificationsData, selectedLearningPath: string) => {
  const learningPath = course.learningPath.filter(learningPath => learningPath.learningPath === selectedLearningPath)[0]
  return learningPath.order
}

const getOrdererElementsBySchoolOrder = (limit:string, offset:string, data:CertificationsData[], learningPath: string) => {
  const orderedCertificates = data.sort((a, b) => {
    return getOrderFromLearningPath(b, learningPath) - getOrderFromLearningPath(a, learningPath)
  })

  const listOfElements: CertificationsData[] = orderedCertificates.slice(parseInt(offset), (parseInt(offset) + parseInt(limit)))
  return listOfElements
}

const getFilterData = (filter: string) => {
  const filterData = certifications.filter(certificate => certificate.learningPath.includes(certificate.learningPath.filter(learningPath => learningPath.learningPath === filter)[0]))
  return filterData
}

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { limit } = req.query || 5
  const { offset } = req.query || 0
  const { route } = req.query

  let orderData: (CertificationsData | SchoolsAndRoutesData)[]

  if (route === 'last') {
    orderData = getOrdererElementsByDate(limit as string, offset as string, certifications)
  } else if (route === 'web') {
    const filterData = getFilterData('Web Development School')
    orderData = getOrdererElementsBySchoolOrder(limit as string, offset as string, filterData, 'Web Development School')
  } else if (route === 'english') {
    const filterData = getFilterData('English Academy')
    orderData = getOrdererElementsBySchoolOrder(limit as string, offset as string, filterData, 'English Academy')
  } else if (route === 'react') {
    const filterData = getFilterData('Frontend with React')
    orderData = getOrdererElementsBySchoolOrder(limit as string, offset as string, filterData, 'Frontend with React')
  } else if (route === 'react-native') {
    const filterData = getFilterData('App Development with React Native')
    orderData = getOrdererElementsBySchoolOrder(limit as string, offset as string, filterData, 'App Development with React Native')
  } else if (route === 'js') {
    const filterData = getFilterData('JavaScript School')
    orderData = getOrdererElementsBySchoolOrder(limit as string, offset as string, filterData, 'JavaScript School')
  } else if (route === 'python') {
    const filterData = getFilterData('Backend with Python and Django')
    orderData = getOrdererElementsBySchoolOrder(limit as string, offset as string, filterData, 'Backend with Python and Django')
  } else if (route === 'node') {
    const filterData = getFilterData('Backend Development with Node.js')
    orderData = getOrdererElementsBySchoolOrder(limit as string, offset as string, filterData, 'Backend Development with Node.js')
  } else if (route === 'others') {
    const filterData = getFilterData('Others')
    orderData = getOrdererElementsByDate(limit as string, offset as string, filterData)
  } else if (route === 'search') {
    const findTerm: string = req.query.find as string
    // Getting all data by name and technologies

    // Getting all the schools and routes
    const schoolsSearch: Set<SchoolsAndRoutesData> = new Set([...(schoolAndRoutes.filter(route => route.name.toLowerCase().includes(findTerm.toLowerCase()))), ...(schoolAndRoutes.filter(route => route.technologies && route.technologies?.filter(technology => technology.toLowerCase().includes(findTerm.toLowerCase())).length > 0))])

    const certificatesSearch: Set<CertificationsData> = new Set([...(certifications.filter(route => route.name.toLowerCase().includes(findTerm.toLowerCase()))), ...(certifications.filter(route => route.technologies && route.technologies?.filter(technology => technology.toLowerCase().includes(findTerm.toLowerCase())).length > 0))])

    const completeData: (CertificationsData | SchoolsAndRoutesData)[] = [...schoolsSearch, ...certificatesSearch]
    orderData = getOrdererElementsByDate(limit as string, offset as string, completeData)
  } else {
    orderData = []
  }

  res.status(200).json(orderData)
}
