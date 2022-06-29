import { useContext } from 'react'
import { ThemeContext } from '@contexts/ThemeContext'
import { TechnologiesSkeleton } from './TechnologiesSkeleton'

const ProjectItemSkeleton = () => {
  const { theme } = useContext(ThemeContext)
  const defaultOptions = `
  background: ${theme.textColor};
  border-radius: 15px;
  `

  const skeletonElements = () => {
    const elements = []
    for (let i = 0; i < 6; i++) {
      elements.push(<TechnologiesSkeleton key={i} itemHeight="58px"/>)
    }
    return elements
  }
  return (
    <>
      <li className="project-container-skeleton">
        <div className='project-container-skeleton__title'></div>
        <div className='project-container-skeleton__category'>
          <div className='project-container-skeleton__category-title'></div>
          <div className='project-container-skeleton__category-icon'></div>
        </div>
        <div className='project-container-skeleton__description'></div>
        <div className='project-container-skeleton__image'></div>
        <div className='project-container-skeleton__stack'></div>
        <ul className='project-container-skeleton__technologies'>
          {skeletonElements()}
        </ul>
        <div className='project-container-skeleton__btn'></div>
      </li>
      <style jsx>{`
        .project-container-skeleton {
          width: 100%;
          height: fit-content;
          border: 1px solid ${theme.textColor};
          border-radius: 15px;
          padding: 15px;
          display: flex; 
          flex-direction: column;
          gap: 15px;
          animation: fadeIn 4s ease-in-out infinite;
        }
        .project-container-skeleton__title {
          width: 100%;
          height: 50px;
          ${defaultOptions}
        }
        .project-container-skeleton__category {
          width: 90%;
          height: 40px;
          display: flex;
          gap: 10px;
        }
        .project-container-skeleton__category-title {
          width: 80%;
          height: 100%;
          ${defaultOptions}
        }
        .project-container-skeleton__category-icon {
          width: 20%;
          height: 100%;
          ${defaultOptions}

        }
        .project-container-skeleton__description {
          width: 100%;
          height: 100px;
          ${defaultOptions}

        }
        .project-container-skeleton__image {
          width: 100%;
          height: 150px;
          ${defaultOptions}
        }
        .project-container-skeleton__stack {
          margin-top: 10px;
          width:50%;
          margin: 10px auto 0 auto;
          height: 40px;
          ${defaultOptions}
        }
        .project-container-skeleton__technologies {
          display: grid;
          grid-template-columns: repeat(auto-fit, 60px);
          justify-content: center;
          list-style: none;
          padding: 10px;
          margin-top: 20px;
          border-radius: 10px;
          gap: 20px;
        }
        .project-container-skeleton__btn {
          width: 60%;
          height: 40px;
          ${defaultOptions}
          margin: 0 auto;
        }
        @media (min-width: 650px) {
          .project-container-skeleton {
            max-width: 575px;
            margin: 0 auto;
          }
        }
        @media (min-width: 800px) {
          .project-container-skeleton {
            max-width: 800px;
          }
        }
        @keyframes fadeIn {
        0% {
          opacity: 0.8;
        }
        50%{
          opacity: 0.2;
        }
        to {
          opacity: 0.8;
        }
      }
      `}</style>
    </>
  )
}

export default ProjectItemSkeleton
