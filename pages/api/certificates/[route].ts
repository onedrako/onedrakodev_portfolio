// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { CertificationsData } from '@customTypes/backendTypes'
import { certifications } from '@utils/data/certificatesData'

const getOrdererElementsByDate = (limit:string, offset:string, data:CertificationsData[]) => {
  const orderedCertificates = data.sort((a, b) => {
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

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { limit } = req.query || 5
  const { offset } = req.query || 0
  const { route } = req.query

  let orderData: CertificationsData[]

  if (route === 'last') {
    orderData = getOrdererElementsByDate(limit as string, offset as string, certifications)
  } else if (route === 'web') {
    const filterData = certifications.filter(certificate => certificate.learningPath.includes(certificate.learningPath.filter(learningPath => learningPath.learningPath === 'Web Development School')[0]))
    orderData = getOrdererElementsBySchoolOrder(limit as string, offset as string, filterData, 'Web Development School')
  } else if (route === 'english') {
    const filterData = certifications.filter(certificate => certificate.learningPath.includes(certificate.learningPath.filter(learningPath => learningPath.learningPath === 'English Academy')[0]))
    orderData = getOrdererElementsBySchoolOrder(limit as string, offset as string, filterData, 'English Academy')
  } else if (route === 'react') {
    const filterData = certifications.filter(certificate => certificate.learningPath.includes(certificate.learningPath.filter(learningPath => learningPath.learningPath === 'Frontend with React')[0]))
    orderData = getOrdererElementsBySchoolOrder(limit as string, offset as string, filterData, 'Frontend with React')
  } else if (route === 'react-native') {
    const filterData = certifications.filter(certificate => certificate.learningPath.includes(certificate.learningPath.filter(learningPath => learningPath.learningPath === 'App Development with React Native')[0]))
    orderData = getOrdererElementsBySchoolOrder(limit as string, offset as string, filterData, 'App Development with React Native')
  } else if (route === 'js') {
    const filterData = certifications.filter(certificate => certificate.learningPath.includes(certificate.learningPath.filter(learningPath => learningPath.learningPath === 'JavaScript School')[0]))
    orderData = getOrdererElementsBySchoolOrder(limit as string, offset as string, filterData, 'JavaScript School')
  } else if (route === 'python') {
    const filterData = certifications.filter(certificate => certificate.learningPath.includes(certificate.learningPath.filter(learningPath => learningPath.learningPath === 'Backend with Python and Django')[0]))
    orderData = getOrdererElementsBySchoolOrder(limit as string, offset as string, filterData, 'Backend with Python and Django')
  } else if (route === 'node') {
    const filterData = certifications.filter(certificate => certificate.learningPath.includes(certificate.learningPath.filter(learningPath => learningPath.learningPath === 'Backend Development with Node.js')[0]))
    orderData = getOrdererElementsBySchoolOrder(limit as string, offset as string, filterData, 'Backend Development with Node.js')
  } else if (route === 'others') {
    const filterData = certifications.filter(certificate => certificate.learningPath.includes(certificate.learningPath.filter(learningPath => learningPath.learningPath === 'Others')[0]))
    orderData = getOrdererElementsByDate(limit as string, offset as string, filterData)
  } else {
    orderData = certifications
  }

  res.status(200).json(orderData)
}
