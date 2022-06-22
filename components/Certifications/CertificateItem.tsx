
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
import { CertificationsData } from '@customTypes/backendTypes'

const detectScreenForNumberOfElements = () => {
  if (window.innerWidth < 767) {
    return 3
  } else {
    return 5
  }
}

const CertificateItem = ({ certificates }: {certificates: CertificationsData }) => {
  const { theme } = useContext(ThemeContext)
  const [numberOfElements, setNumberOfElements] = useState<number>(detectScreenForNumberOfElements())

  let maxNumberOfElements: number
  if (certificates.technologies?.length) {
    maxNumberOfElements = certificates.technologies?.length
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
    <article className="certificate">
      <h3 className='certificate__text'>{`${certificates.name} at ${certificates.institution}`}</h3>

      <div className='certificate__image'>
        <Image src={certificates.image} alt={certificates.name} width={864} height={668} layout="responsive" />
      </div>

      <div className='certificate__date'>
        <p>{formatDate(certificates.date, ['day'])}</p>
      </div>

      <div className='certificate__links'>
        <a href={certificates.courseUrl} target='_blank' rel='noopener noreferrer'><HiLink size={25} /> Description</a>
        <a href={certificates.certificateUrl} target='_blank' rel='noopener noreferrer'><TbCertificate size={25}/> Certificate</a>
      </div>

      {
        certificates.technologies &&
        <div className='certificate-technologies'>
          {certificates.technologies.length > 0 &&
            <ListOfTechnologiesInProject title="Technologies Learned" data={certificates.technologies.slice(0, numberOfElements)} projectName={`${certificates.name}`} />
          }
          {certificates.technologies?.length > detectScreenForNumberOfElements() && <button className="certificate-technologies__button" onClick={() => handleShowMoreTechnologies() } >{numberOfElements === 3 ? 'Show All' : 'Show Less' }</button> }
        </div>
      }
    </article>

    <style jsx>{`
      .certificate{
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
      .certificate__text{
        font-size: 1.8rem;
        margin-bottom: 10px;
        height: 110px;
      }
      .certificate__date{
        display: flex;
        width: 100%;
        justify-content: end;
      }
      .certificate__image{
        width: 225px;
        margin-bottom: 10px;
      }
      .certificate-technologies{
        display: flex;
        width: 100%;
        flex-direction: column;
        min-height: 150px;
        max-height: 225px;
        overflow-y: scroll;
        overflow-x: hidden;
      }
      .certificate-technologies__button{
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

      .certificate__links{
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
      @media (max-width: 767px) {
        .certificate{
          max-width: 262px;
        }
      }

      @media (min-width: 768px) {
        .certificate{
          min-width: 345px;
        }
        .certificate__image{
          width: 98%;
        }
        .certificate__text{
          font-size: 2.2rem;
          height: 80px;
        }
        .certificate__links{
          flex-direction: row;
        }
        .certificate__date p{
          font-size: 1.6rem;
        }
    }
    `}</style>

    </>
  )
}

export { CertificateItem }
