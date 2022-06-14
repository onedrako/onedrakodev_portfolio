// Dependencies
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

// Components
import CertificatesPageTitles from './CertificatesPageTitles'

// Custom Hooks
import { useGetData } from '@hooks/useGetData'
import { CertificationsData } from '@customTypes/backendTypes'

const LastCertificates = () => {
  const apiUrl = '/api/certificates/last'

  const { ref, inView } = useInView({
    threshold: 0
  })

  const [certificatesData, loading]: [CertificationsData[], boolean, any] = useGetData(apiUrl, inView)

  return (
    <>
      <CertificatesPageTitles title='Last Certificates'>
        <div className='lastCertificates'>
          {certificatesData.map((certificate, index) => {
            return (
              <article key={`last-certificates-item-${index}`} className="last-certificates-item">
                <h2 className='last-certificates-item__title'>{certificate.name}</h2>
                {/* <p className='last-certificates-institution'>{certificate.institution}</p> */}
                <div>
                  <Image src={certificate.image} alt={certificate.name} width={864} height={668} layout="responsive" />
                </div>
              </article>
            )
          }
          )}
        {loading && <p className='loading'>Loading More Certificates...</p>}
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
          font-size: 1.8rem;
          text-align: center;
        }
        .loading{
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          background-color: #000000;
          top: 25%;
          left: 25%;
          /* right : 50%; */
          width: 50%;
          height: 50%;
          border-radius: 25px;
          padding: 15px;
          font-size: 2rem;
        }


      `}</style>
    </>
  )
}

export default LastCertificates
