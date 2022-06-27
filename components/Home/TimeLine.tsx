// Dependencies
import Image from 'next/image'
import { useContext } from 'react'

// Context
import { ThemeContext } from '@contexts/ThemeContext'

// Types
import { LaboralExperienceData, EducationData } from '@customTypes/backendTypes'

// Functions
import { defineColorPoint } from '@utils/defineColorPoint'
import { formatDate } from '@utils/formatDate'
import ProgressBar from '@components/globalComponents/ProgressBar'

type typeData = LaboralExperienceData | EducationData

interface Props<T> {
  data: T[]
  orientation: string
}

const TimeLine = <T extends typeData>({ data, orientation }: Props<T>) => {
  const { theme } = useContext(ThemeContext)

  const timeLineOrientationStyleElements = {
    borderOrientation: `${`border-${orientation}: 3px solid ${theme.textColor};`}`,
    paddingOrientation: `${orientation === 'left' ? '45px 0px 45px 50px;' : '45px 50px 45px 0px;'}`,
    datesOrientation: `${orientation === 'left' ? 'left: -26px;' : 'right: -26px'}`
  }

  return (
    <>
      <div className='timeLine-container'>
        {data.map((item: any) =>
          <article className='timeLine-item' key={`timeLine-experience-${item.id}`} >
            <div className='timeLine-item__titles' >
              <figure className='timeLine-item__container-image'>
                <Image className='timeLine-item__image' src={item.iconUrl} width={50} height={50} style={{ borderRadius: `${50}%` }} ></Image>
              </figure>
              <div>

                <h3 className='timeLine-item__titles--position' >{item.title}</h3>

                <h4 className='timeLine-item__titles--institution'>{item.institution }</h4>
              </div>
              <div className='timeLine-item__dates'>
                <p className='timeLine-item__dates--date'>{formatDate(item.endDate)}</p>
                <span className='timeLine-item__dates--circle' style={{ border: `2px solid ${defineColorPoint(item.category)}` }}></span>
                <p className='timeLine-item__dates--category'>{item.category}</p>
                <p className='timeLine-item__dates--date'>{formatDate(item.startDate)}</p>
              </div>
            </div>
            {item.description && <p className='timeLine-item__description'>{item.description}</p>}
            {
              item?.progress &&
              <ProgressBar category={item.category} progress={item.progress} total={item.total} />
            }

          </article>
        )}
      </div>

      <style jsx>{`
        .timeLine-container {
          display: grid;
          grid-template-columns: 1fr;
          margin: 10px 0 0 15px;
          padding: 0 25px;
        }
        .timeLine-item {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          ${timeLineOrientationStyleElements.borderOrientation}
          padding: ${timeLineOrientationStyleElements.paddingOrientation}
          position: relative;
        }
        .timeLine-item__titles {
          display: grid;
          grid-template-columns: 50px 1fr;
          gap: 10px;
          margin-bottom: 10px;
          width: 100%;
        }
        .timeLine-item__container-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .timeLine-item__image{
          border-radius: 50%;
          width: 50px;
          height: 50px;
        }

        .timeLine-item__titles--position {
          grid-column: 2 / 3;
          border-bottom: 1px solid ${theme.textColor};
          margin-bottom: 5px;
          text-align: end;
          font-size: 1.8rem;
        }
        .timeLine-item__titles--institution {
          font-size: 1.3rem;
          grid-column: 2 / 3;
          text-align: end;

        }
        .timeLine-item__description {
          font-size: 1.5rem;
          text-align: end;
          width: 100%;
        } 

        .timeLine-item__dates {
          display: flex;
          flex-direction: column;
          gap: 5px;
          align-items: center;
          width: 50px;
          /* height: 100px; */
          position: absolute;
          top: 30%;
          ${timeLineOrientationStyleElements.datesOrientation}
          /* left: -26px; */

        }
        .timeLine-item__dates--circle {
          background: ${theme.backgroundColor};
          border-radius: 50%;
          width: 20px;
          height: 20px;
          position: relative;
          z-index: 1;
        }
        .timeLine-item__dates--date {
          font-size: 1.3rem;
          width: 110%;
          background: ${theme.backgroundColor};
          text-align: center;
        }
        .timeLine-item__dates--category {
          font-size: 1.3rem;
          position: absolute;
          top: 35%;
          background: ${theme.backgroundColor};
          height: 20px;
          vertical-align: center;
          display: none;
        }
        .timeLine-item__dates:hover .timeLine-item__dates--category{
          display: block;
          z-index: 2;
        }    
        
        @media (min-width: 550px) {
          .timeLine-container {
          padding: 0 25px;
        }
        @media (min-width: 600px) {
          .timeLine-item__description {
            font-size: 1.8rem;
          }
          .timeLine-item__titles--institution {
            font-size: 2rem;
          } 
        .timeLine-item__titles--position {
          font-size: 2.3rem;
        }
      `}</style>
    </>
  )
}

export { TimeLine }
