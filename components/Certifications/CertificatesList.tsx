// Dependencies
import { useInView } from 'react-intersection-observer'

// Components
import CertificatesPageTitles from './CertificatesPageTitles'

// Custom Hooks
import { useGetData } from '@hooks/useGetData'

// Components
import { CertificateItem } from './CertificateItem'
import ProgressBar from '@components/globalComponents/ProgressBar'

// Types
import { CertificationsData, EducationData, route } from '@customTypes/backendTypes'
import { CertificatesListTitle } from '@customTypes/types'
import { useRef } from 'react'

const CertificatesList = ({ apiUrl, title, type, searchValue }: {apiUrl:string, title: route | CertificatesListTitle, type: string, searchValue?: string}) => {
  const { ref, inView } = useInView({
    threshold: 0
  })

  const searchSection = useRef<HTMLDivElement>(null)

  const [routeData] = useGetData<EducationData>(`/api/schools/${title}`)
  const [certificatesData, loading, error, fullData] = useGetData<CertificationsData>(apiUrl, inView, searchValue, searchSection)
  let total, progress, category

  if (type === 'route') {
    total = routeData[0]?.total
    progress = routeData[0]?.progress
    category = routeData[0]?.category
  }

  return (
    <>
    {!error &&
        <CertificatesPageTitles title={title}>
          {type === 'route' && <ProgressBar progress={progress as number} total={total as number} category={category as string} />}
          <div ref={searchSection} className='CertificatesList'>
            {certificatesData.map((certificate) => {
              return (
                <CertificateItem key={`CertificatesList-item-${title}-${certificate.id}-${certificate.name}`} certificates={certificate}/>
              )
            }
            )}
            {!fullData && <span className='intersection-observer' ref={ref}>.</span>}
            {type === 'search' && certificatesData.length === 0 && !loading && <p className='CertificatesList__no-results'>No results for this technology 😔, try another one</p>}
            {loading && <p className='loading'>Loading Certificates...</p>}
          </div>
        </CertificatesPageTitles>
    }

      <style jsx>{`
        .certificates{
          margin-top: 50px;
          margin-bottom: 25px;
          padding: 15px 15px 0px 15px;
          font-size: 2.5rem;
        }
        .CertificatesList{
          width: 100%;
          display: flex; 
          gap: 20px;
          overflow-x: scroll  ;
          margin-top: 5px;
          margin-bottom: 25px;
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
        .CertificatesList__no-results{
          display: flex;
          font-size: 2.5rem;
          padding: 15px;
        }
        .intersection-observer{
          height: 100px;
          width: 100px;
        }

      `}</style>
    </>
  )
}

export { CertificatesList }
