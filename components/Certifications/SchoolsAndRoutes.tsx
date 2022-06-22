import React from 'react'

import { useGetData } from 'hooks/useGetData'
import { SchoolsAndRoutesData } from '@customTypes/backendTypes'
import { CertificateItem } from './CertificateItem'
import CertificatesPageTitles from './CertificatesPageTitles'

const SchoolsAndRoutes = () => {
  const [routesData, loading, error] = useGetData<SchoolsAndRoutesData>('/api/schools')

  const orderSchools = routesData.sort((a: SchoolsAndRoutesData, b: SchoolsAndRoutesData) => {
    return new Date(b.date).valueOf() - new Date(a.date).valueOf()
  })

  return (
    <>
    <CertificatesPageTitles title="Schools and Routes Completed">
        <div className='schools__elements'>
          {loading && <p>Loading...</p>}
          {error && <p>Error...</p>}
          {routesData && orderSchools.map((route: SchoolsAndRoutesData) => (
            <CertificateItem key={`${route.id}-${route.name}`} certificates={route} />
          ))}
        </div>
      {/* </section> */}
    </CertificatesPageTitles>

      <style jsx>{`
        .schools__elements{
          display: flex;
          overflow-x: auto;
          gap: 15px;
        }
        
      `}</style>
    </>
  )
}

export { SchoolsAndRoutes }
