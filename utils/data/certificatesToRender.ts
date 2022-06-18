// Types
import { route } from '@customTypes/backendTypes'
import { CertificatesListTitle } from '@customTypes/types'

export type CertificatesToRender = {apiUrl:string, title: route | CertificatesListTitle, type: string}

/* Data for CertificatesList Component =>
        type: all or route, route is when the data exist on educationData to bring the total and progress for the progressBar component,
        title is the name of the route or the name of the school,
        and apiUrl to bring the certificates for every route */

export const certificatesToRender: CertificatesToRender[] = [
  { apiUrl: '/api/certificates/last?', title: 'Last Certificates', type: 'all' },
  { apiUrl: '/api/certificates/web?', title: 'Web Development School', type: 'route' },
  { apiUrl: '/api/certificates/node?', title: 'Backend Development with Node.js', type: 'route' },
  { apiUrl: '/api/certificates/english?', title: 'English Academy', type: 'route' },
  { apiUrl: '/api/certificates/react-native?', title: 'App Development with React Native', type: 'route' },
  { apiUrl: '/api/certificates/react?', title: 'Frontend with React', type: 'route' },
  { apiUrl: '/api/certificates/js?', title: 'JavaScript School', type: 'route' },
  { apiUrl: '/api/certificates/others?', title: 'Others', type: 'all' },
  { apiUrl: '/api/certificates/python?', title: 'Backend with Python and Django', type: 'all' }
]
