import { useEffect, useState, useContext } from 'react'
import axios from 'axios'

import { TimeLine } from './TimeLine'
import { CategoryOptions } from './CategoryOptions'

import { ThemeContext } from '@contexts/ThemeContext'
import { LaboralExperienceData, EducationData, educationCategory, jobCategory } from '@customTypes/backendTypes'
import Link from 'next/link'

type Props = {
  title: string,
  orientation:string,
  endPoint:string
  categories : educationCategory[] | jobCategory[],
  redirectTo?: string
}

const TimeLineContainer = ({ title, orientation, endPoint, categories, redirectTo }: Props) => {
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
          {redirectTo &&
            <Link href="/certifications">
              <a className='seeAllButton'>See all</a>
            </Link>
            }
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
          grid-area: ${orientation};
          height: fit-content;
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
          /* text-align: center; */
          display: flex;
          justify-content: center;
          align-items: center; 
        }
        h2{
          font-size: 2.2rem;
          border-bottom: 1px solid #ccc;
          width: 75%;
        }
        @media (min-width: 650px) {
          .container {
            max-width: 600px;
            margin: 30px auto;
            border: 1px solid ${theme.modalBackgroundColor};
            border-radius: 10px;
            padding: 25px;
          }
          .seeAllButton {
            font-size: 1.5rem;
            width: 100px;
          }

        @media (min-width: 1000px) {
          .container {
            max-width: 900px;
          }
        }
      `}</style>

    </>
  )
}

export { TimeLineContainer }
