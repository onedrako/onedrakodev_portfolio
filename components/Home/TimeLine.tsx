import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from '@contexts/ThemeContext'

import { CategoryColorsForTimeLine } from '@utils/constants'
import { LaboralExperienceData, EducationData } from '@customTypes/backendTypes'

type typeData = LaboralExperienceData | EducationData

const TimeLine = ({ data, orientation }: {data: typeData[], orientation: string }) => {
  const { theme } = useContext(ThemeContext)

  const defineColorPoint = (category: string) => {
    return CategoryColorsForTimeLine[category as keyof typeof CategoryColorsForTimeLine]
  }

  const formatDate = (date: string) => {
    if (date === 'Present') {
      return date
    } else {
      const formatDate = new Date(date)
      const month = formatDate.toLocaleDateString('en-US', { month: 'short' })
      const year = formatDate.getFullYear()
      return `${month} ${year}`
    }
  }
  return (
    <>
      <div className='laboral-container'>
        {data.map((item: any) =>
          <article className='laboral-item' key={`laboral-experience-${item.id}`} >
            <div className='laboral-item__titles' >
              <figure className='laboral-item__container-image'>
                <Image className='laboral-item__image' src={item.iconUrl} width={50} height={50} style={{ borderRadius: `${50}%` }} ></Image>
              </figure>
              <div>

                <h3 className='laboral-item__titles--position' >{item.title}</h3>

                <h4 className='laboral-item__titles--institution'>{item.institution }</h4>
              </div>
              <div className='laboral-item__dates'>
                <p className='laboral-item__dates--date'>{formatDate(item.endDate)}</p>
                <span className='laboral-item__dates--circle' style={{ border: `2px solid ${defineColorPoint(item.category)}` }}></span>
                <p className='laboral-item__dates--category'>{item.category}</p>
                <p className='laboral-item__dates--date'>{formatDate(item.startDate)}</p>
              </div>
            </div>
            {item.description && <p className='laboral-item__description'>{item.description}</p>}
            {
              item?.progress &&
              <div className="laboral-item__progress" >
                  <div className="laboral-item__progress--percentage">
                    <div className="laboral-item__progress--percentage--bar" style={{ background: defineColorPoint(item.category), width: `${Math.round((item.progress / item.total) * 100)}%` }} >
                      <p className='laboral-item__progress--text'>{`${Math.round((item.progress / item.total) * 100)}%`}</p>
                    </div>
                  </div>
                  <p className='laboral-item__progress--text'>{`Courses Completed: ${item.progress}/${item.total}`}</p>
              </div>
            }

          </article>
        )}
      </div>

      <style jsx>{`
        .laboral-container {
          display: grid;
          grid-template-columns: 1fr;
          margin: 10px 0 0 15px;
          position: relative;  
        }
        .laboral-item {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          border-left: 3px solid #ccc;
          padding: 45px 0px 45px 50px;
          position: relative;
          /* margin : 20px 0 ; */
        }
        .laboral-item__titles {
          display: grid;
          grid-template-columns: 50px 1fr;
          gap: 10px;
          margin-bottom: 10px;
          width: 100%;
        }
        .laboral-item__container-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .laboral-item__image{
          border-radius: 50%;
          width: 50px;
          height: 50px;
        }

        .laboral-item__titles--position {
          grid-column: 2 / 3;
          border-bottom: 1px solid #ccc;
          margin-bottom: 5px;
          text-align: end;
          font-size: 1.8rem;
        }
        .laboral-item__titles--institution {
          font-size: 1.3rem;
          grid-column: 2 / 3;
          text-align: end;

        }
        .laboral-item__description {
          font-size: 1.5rem;
          text-align: end;
          width: 100%;
        } 


        .laboral-item__dates {
          display: flex;
          flex-direction: column;
          gap: 5px;
          align-items: center;
          width: 50px;
          /* height: 100px; */
          position: absolute;
          top: 30%;
          left: -26px;
        }
        .laboral-item__dates--circle {
          background: ${theme.backgroundColor};
          border-radius: 50%;
          width: 20px;
          height: 20px;
          position: relative;
          z-index: 1;
        }
        .laboral-item__dates--date {
          font-size: 1.3rem;
          width: 110%;
          background: ${theme.backgroundColor};
          text-align: center;
        }
        .laboral-item__dates--category {
          font-size: 1.3rem;
          position: absolute;
          top: 35%;
          background: ${theme.backgroundColor};
          height: 20px;
          vertical-align: center;
          display: none;
        }
        .laboral-item__dates:hover .laboral-item__dates--category{
          display: block;
          z-index: 2;
        }    

        .laboral-item__progress{
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 100%;
          justify-content: flex-end;
          align-items: center;
          padding: 5px;
        }
        .laboral-item__progress--percentage {
          border: 1px solid #ccc;
          border-radius: 15px ;
          width: 100%;   
          height: 25px;
        }
        .laboral-item__progress--percentage--bar {
          border-right: 1px solid #ccc;
          border-radius: 15px ;
          width: 100%;   
          height: 100%;
        }
        .laboral-item__progress--text{
          font-size: 1.4rem;
          text-align: center;
        }    
      `}</style>
    </>
  )
}

export { TimeLine }
