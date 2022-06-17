// Dependencies
import { NextPage } from 'next'

// Components
import { CertificatesList } from './CertificatesList'
import { SchoolsAndRoutes } from './SchoolsAndRoutes'
import { SearchCertificate } from './SearchCertificate'

const CertificationsComponent: NextPage = () => {
  return (
    <>
      <main>
        <h1 className='certifications-title'>Certifications</h1>

        <SearchCertificate />
        <SchoolsAndRoutes />

        {/* CertificatesList Component =>
        type: all or route, route is when the data exist on educationData to bring the total and progress for the progressBar component,
        title is the name of the route or the name of the school,
        and apiUrl to bring the certificates for every route */}

        <CertificatesList apiUrl="/api/certificates/last?" title="Last Certificates" type="all"/>
        <CertificatesList apiUrl="/api/certificates/web?" title="Web Development School" type="route"/>
        {/* <CertificatesList apiUrl="/api/certificates/node?" title="Backend Development with Node.js" type="route"/>
        <CertificatesList apiUrl="/api/certificates/english?" title="English Academy" type="route"/>
        <CertificatesList apiUrl="/api/certificates/react-native?" title="App Development with React Native" type="route"/>
        <CertificatesList apiUrl="/api/certificates/react?" title="Frontend with React" type="route"/>
        <CertificatesList apiUrl="/api/certificates/js?" title="JavaScript School" type="route"/>
        <CertificatesList apiUrl="/api/certificates/others?" title="Others" type="all"/>
        <CertificatesList apiUrl="/api/certificates/python?" title="Backend with Python and Django" type="all"/> */}
      </main>

      <style jsx>{`
        .certifications-title{
          font-size: 2.5rem;
          padding: 50px 15px 0px 15px;
        `}</style>
    </>
  )
}

export { CertificationsComponent }
