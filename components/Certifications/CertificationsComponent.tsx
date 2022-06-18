// Dependencies
import { NextPage } from 'next'

// Components
import { CertificatesList } from './CertificatesList'
import { SchoolsAndRoutes } from './SchoolsAndRoutes'
import { SearchCertificate } from './SearchCertificate'

import { certificatesToRender } from '@utils/data/certificatesToRender'

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
        {certificatesToRender.map((certificate) =>
          <CertificatesList key={`CertificatesList-${certificate.title}`} apiUrl={certificate.apiUrl} title={certificate.title} type={certificate.type}/>
        )}
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
