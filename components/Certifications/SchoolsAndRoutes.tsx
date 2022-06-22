import React from 'react'

import { useGetData } from 'hooks/useGetData'
import { SchoolsAndRoutesData } from '@customTypes/backendTypes'
import { CertificateItem } from './CertificateItem'

const SchoolsAndRoutes = () => {
  const [routesData, loading, error] = useGetData<SchoolsAndRoutesData>('/api/schools')

  const orderSchools = routesData.sort((a: SchoolsAndRoutesData, b: SchoolsAndRoutesData) => {
    return new Date(b.date).valueOf() - new Date(a.date).valueOf()
  })

  return (
    <>
      <section className='schools'>
        <h2 className='schools__title'>Schools and Routes</h2>
        <h3 className='schools__subtitle'>Schools and Routes Completed</h3>
        <div className='schools__elements'>
          {loading && <p>Loading...</p>}
          {error && <p>Error...</p>}
          {routesData && orderSchools.map((route: SchoolsAndRoutesData) => (
            <CertificateItem key={`${route.id}-${route.name}`} certificates={route} />
          ))}
        </div>
      </section>

      <style jsx>{`
        .schools{
          padding: 15px 15px 0px 15px;
        }
        .schools__title{
          font-size: 2.2rem;
          border-bottom: 1px solid #ccc;
        }
        .schools__subtitle {
          font-size: 1.8rem;
          margin-top: 15px
        }

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
