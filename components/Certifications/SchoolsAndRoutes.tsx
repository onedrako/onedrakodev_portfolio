import React, { useContext } from 'react'

import { useGetCertificatesData } from '@hooks/useGetCertificatesData'
import { SchoolsAndRoutesData } from '@customTypes/backendTypes'
import { CertificateItem } from './CertificateItem'
import CertificatesPageTitles from './CertificatesPageTitles'
import { ThemeContext } from '@contexts/ThemeContext'
import { CertificateItemSkeleton } from './skeletons/CertificateItemSkeleton'

const SchoolsAndRoutes = () => {
  const [routesData, loading, error] = useGetCertificatesData<SchoolsAndRoutesData>('/api/schools')

  const orderSchools = routesData.sort((a: SchoolsAndRoutesData, b: SchoolsAndRoutesData) => {
    return new Date(b.date).valueOf() - new Date(a.date).valueOf()
  })

  const { theme } = useContext(ThemeContext)

  return (
    <>
    <CertificatesPageTitles title="Schools and Routes Completed">
        <div className='schools__elements'>
          {loading &&
          <>
            <CertificateItemSkeleton />
            <CertificateItemSkeleton />
            <CertificateItemSkeleton />
            <CertificateItemSkeleton />
            <CertificateItemSkeleton />
          </>}
          {error && <p>Error...</p>}
          {routesData && orderSchools.map((route: SchoolsAndRoutesData) => (
            <CertificateItem key={`${route.id}-${route.name}`} certificates={route} />
          ))}
        </div>
    </CertificatesPageTitles>

      <style jsx>{`
        .schools__elements{
          display: flex;
          overflow-x: auto;
          gap: 15px;
        }

        .schools__elements::-webkit-scrollbar {
        border: 1px solid ${theme.textColor};
        border-radius: 10px;
      }

      .schools__elements::-webkit-scrollbar-thumb {
        background-color: ${theme.textColor};
        border-radius: 10px;
      }
        
      `}</style>
    </>
  )
}

export { SchoolsAndRoutes }
