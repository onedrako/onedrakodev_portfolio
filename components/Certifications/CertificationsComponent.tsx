// Dependencies
import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useInView } from 'react-intersection-observer'

// Components
import { CertificatesList } from './CertificatesList'
import { SchoolsAndRoutes } from './SchoolsAndRoutes'
import { SearchCertificate } from './SearchCertificate'

// CustomHooks
import { useGetData } from '@hooks/useGetData'

// Types
import { CertificatesToRenderType } from '@customTypes/backendTypes'

const CertificationsComponent: NextPage = () => {
  const [numberOfList, setNumberOfList] = useState<number>(0)
  const { ref, inView } = useInView({
    threshold: 0
  })

  const [certificationsGroups, loading] = useGetData<CertificatesToRenderType>('api/certifications-groups')

  useEffect(() => {
    if (certificationsGroups.length > 0) {
      if (numberOfList >= certificationsGroups.length) {
        console.log('reset')
      }
    }
    if (!loading) { setNumberOfList(numberOfList + 2) }
    console.log(numberOfList)
  }, [inView])

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

        {certificationsGroups?.slice(0, numberOfList).map((certificate) =>
          <CertificatesList key={`CertificatesList-${certificate.title}`} apiUrl={certificate.apiUrl} title={certificate.title} type={certificate.type}/>
        )}

        {
          (certificationsGroups.length > 0 && numberOfList >= certificationsGroups.length)
            ? null
            : <span className='intersection-observer' ref={ref}></span>

        }
      </main>

      <style jsx>{`
        main{
          overflow: default;
          width: 90%;
          margin: 0 auto;
        }
        .certifications-title{
          font-size: 2.5rem;
          padding: 50px 15px 0px 15px;
        }
        .intersection-observer{
          display: block;
          width: 100%;
          height: 100px;
        }
        @media (min-width: 768px) {
          .certifications-title{
            font-size: 3.5rem;
          }
        }
        `}</style>
    </>
  )
}

export { CertificationsComponent }
