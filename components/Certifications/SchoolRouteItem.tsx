
// Dependencies
import { useContext, useState } from 'react'
import Image from 'next/image'

// Icons
import { HiLink } from 'react-icons/hi'
import { TbCertificate } from 'react-icons/tb'

// Components
import ListOfTechnologiesInProject from '@components/globalComponents/ListOfTechnologiesInProject'

// Context
import { ThemeContext } from '@contexts/ThemeContext'

// Utils
import { formatDate } from '@utils/formatDate'

// Types
import { SchoolsAndRoutesData } from '@customTypes/backendTypes'

const SchoolRouteItem = ({ routes }: {routes: SchoolsAndRoutesData }) => {
  const { theme } = useContext(ThemeContext)
  const [numberOfElements, setNumberOfElements] = useState<number>(3)

  let maxNumberOfElements: number
  if (routes.technologies?.length) {
    maxNumberOfElements = routes.technologies?.length
  }

  const handleShowMoreTechnologies = () => {
    if (numberOfElements !== maxNumberOfElements) {
      setNumberOfElements(maxNumberOfElements)
    } else {
      setNumberOfElements(3)
    }
  }

  return (
    <>
    <article className="route">
      <h3 className='route__text'>{`${routes.name} at ${routes.institution}`}</h3>

      <div className='route__image'>
        <Image src={routes.image} alt={routes.name} width={864} height={668} layout="responsive" />
      </div>

      <div className='route__date'>
        <p>{formatDate(routes.date, ['day'])}</p>
      </div>

      <div className='route__links'>
        <a href={routes.routeUrl} target='_blank' rel='noopener noreferrer'><HiLink size={25} /> Description</a>
        <a href={routes.certificateUrl} target='_blank' rel='noopener noreferrer'><TbCertificate size={25}/> Certificate</a>
      </div>

      {
        routes.technologies &&
        <div className='route-technologies'>
          <ListOfTechnologiesInProject title="Technologies Learned" data={routes.technologies.slice(0, numberOfElements)} projectName={`${routes.name}`} />
          {numberOfElements && <button className="route-technologies__button" onClick={() => handleShowMoreTechnologies() } >{numberOfElements === 3 ? 'Show All' : 'Show Less' }</button> }
        </div>
      }
    </article>

    <style jsx>{`
      .route{
        display: flex;
        width: 90%;
        height: fit-content;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        margin-top: 20px;
        padding: 15px;
        border: 1px solid #ccc;
        border-radius: 15px ;
      }
      .route__text{
        font-size: 1.8rem;
        margin-bottom: 10px;
        height: 55px;
      }
      .route__date{
        display: flex;
        width: 100%;
        justify-content: end;
      }
      .route__image{
        width: 225px;
        margin-bottom: 10px;
      }
      .route-technologies{
        display: flex;
      }
      .route-technologies{
        display: flex;
        width: 100%;
        flex-direction: column;
        max-height: 225px;
        overflow-y: scroll;
        overflow-x: hidden;
      }
      .route-technologies__button{
        background-color: ${theme.backgroundColor};
        border: ${theme.activeElementColor} solid 1px;
        font-size: 1.2rem;
        color: ${theme.textColor};
        margin-top: 15px;
        width: 125px;
        min-height: 30px;
        border-radius: 15px;
        align-self: center;
      }

      .route__links{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
        margin-bottom: 10px;
      }

      p{
        font-size: 1.2rem;
      }

      a{
        margin-top: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 1.8rem;
        border: ${theme.textColor} solid 1px;
        padding: 2px 5px;
        border-radius: 10px;
        width: 140px;
      } 
    `}</style>

    </>
  )
}

export default SchoolRouteItem
