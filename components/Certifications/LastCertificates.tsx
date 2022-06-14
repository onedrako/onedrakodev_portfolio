// Dependencies
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

// Components
import CertificatesPageTitles from './CertificatesPageTitles'

// Custom Hooks
import { useGetData } from '@hooks/useGetData'
import { CertificationsData } from '@customTypes/backendTypes'

const LastCertificates = () => {
  // Query Paramas
  const [offset, setOffset] = useState<number>(0)
  const limit = 10

  const { ref, inView } = useInView({
    threshold: 0
  })

  const [certificatesData, loading, error]: [CertificationsData[], boolean, any] = useGetData(`/api/certificates/last?limit=${limit}&offset=${offset}`)

  if (inView) {
    console.log('Last Certificates In View')
  }

  return (
    <>
      <CertificatesPageTitles title='Last Certificates'>
        <div className='lastCertificates'>
          {certificatesData.map((certificate, index) => {
            return (
              <arcicle key={`last-certificates-item-${index}`} className="last-certificates-item">
                <h2 className='last-certificates-item__title'>{certificate.name}</h2>
                <p className='last-certificates-institution'>{certificate.institution}</p>
              </arcicle>
            )
          }
          )}
        <span ref={ref}></span>
        </div>

      </CertificatesPageTitles>

      <style jsx>{`
        .certificates{
          margin-top: 50px;
          margin-bottom: 25px;
          padding: 15px 15px 0px 15px;
          font-size: 2.5rem;
        }
        .lastCertificates{
          width: 100%;
          display: flex; 
          gap: 20px;
          overflow: auto;
          margin-top: 25px;
          margin-bottom: 25px;
        }
        .last-certificates-item{
          min-width: 257px;
          border-radius: 5px;
          border: 1px solid #e6e6e6;
          padding: 15px;
        }
        .last-certificates-item__title{
          font-size: 2.5rem;
        }


      `}</style>
    </>
  )
}

export default LastCertificates
