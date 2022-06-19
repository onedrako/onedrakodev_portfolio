// Types
import { CertificatesToRenderType } from '@customTypes/backendTypes'

/* Data for CertificatesList Component =>
        type: values = all or route, route is when the data exist on educationData to bring the total and progress for the progressBar component,
        title is the name of the route or the name of the school,
        and apiUrl to bring the certificates for every route */

const apiUrlBase = '/api/certificates/'

export const certificatesToRender: CertificatesToRenderType[] = [
  { apiUrl: `${apiUrlBase}last?`, title: 'Last Certificates', type: 'all' },
  { apiUrl: `${apiUrlBase}web?`, title: 'Web Development School', type: 'route' },
  { apiUrl: `${apiUrlBase}node?`, title: 'Backend Development with Node.js', type: 'route' },
  { apiUrl: `${apiUrlBase}english?`, title: 'English Academy', type: 'route' },
  { apiUrl: `${apiUrlBase}react-native?`, title: 'App Development with React Native', type: 'route' },
  { apiUrl: `${apiUrlBase}react?`, title: 'Frontend with React', type: 'route' },
  { apiUrl: `${apiUrlBase}js?`, title: 'JavaScript School', type: 'route' },
  { apiUrl: `${apiUrlBase}others?`, title: 'Others', type: 'all' },
  { apiUrl: `${apiUrlBase}python?`, title: 'Backend with Python and Django', type: 'all' }
]
