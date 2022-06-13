import React from 'react'

import { useGetData } from 'hooks/useGetData'
import { SchoolsAndRoutesData } from '@customTypes/backendTypes'
import SchoolRouteItem from './SchoolRouteItem'

const SchoolsAndRoutes = () => {
  const [routesData, loading, error]: [SchoolsAndRoutesData[], boolean, any] = useGetData('/api/schools')

  const orderSchools = routesData.sort((a: SchoolsAndRoutesData, b: SchoolsAndRoutesData) => {
    return new Date(b.date) - new Date(a.date)
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
            <SchoolRouteItem key={route.id} routes={route} />
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
