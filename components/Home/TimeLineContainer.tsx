import { useEffect, useState, useContext } from 'react'
import axios from 'axios'

import { TimeLine } from './TimeLine'
import { CategoryOptions } from './CategoryOptions'

import { ThemeContext } from '@contexts/ThemeContext'
import { LaboralExperienceData, EducationData, educationCategory, jobCategory } from '@customTypes/backendTypes'

const TimeLineContainer = (
  { title, orientation, endPoint, categories, redirectTo }:
  {
    title: string,
    orientation:string,
    endPoint:string
    categories : educationCategory[] | jobCategory[],
    redirectTo?: string
  }) => {
  type typeData = LaboralExperienceData | EducationData
  const [data, setData] = useState<typeData[]>([])

  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    axios.get(endPoint)
      .then((res: { data: typeData[] }) => {
        setData(res.data.sort((a:typeData, b:typeData) => b.id - a.id))
      })
  }, [])

  return (
    <>
      <section className='container'>
        <div className='titles-container'>
          <h2>{title}</h2>
          {redirectTo && <button type='button' className='seeAllButton'>See all</button>}
        </div>
        <CategoryOptions categories={categories} title={title}/>
        <TimeLine data={data} orientation={orientation} />
      </section>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          padding: 0 25px;
          margin : 30px 0 ;
        }
        .titles-container {
          display: flex;
          gap: 10px;
          width: 100%;
        } 
        .seeAllButton {
          font-size: 1.2rem;
          width: 50px;
          border: 1px solid ${theme.activeElementColor};
          background-color: ${theme.backgroundColor};
          color: ${theme.textColor};
          border-radius: 5px;
          cursor: pointer;
        }
        h2{
          font-size: 2.2rem;
          border-bottom: 1px solid #ccc;
          width: 75%;
        }
      `}</style>
    </>
  )
}

export { TimeLineContainer }
