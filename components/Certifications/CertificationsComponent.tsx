import { NextPage } from 'next'
import LastCertificates from './LastCertificates'

// Components
import { SchoolsAndRoutes } from './SchoolsAndRoutes'

const CertificationsComponent: NextPage = () => {
  return (
    <>
      <main>
        <h1 className='certifications-title'>Certifications</h1>
        <SchoolsAndRoutes />
        <LastCertificates />
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
