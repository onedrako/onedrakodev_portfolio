// Dependencies
import { Dispatch, SetStateAction, useContext, useState } from 'react'
import Image from 'next/image'

// Icons
import { SiGithub } from 'react-icons/si'
import { HiLink } from 'react-icons/hi'
import { FcNext, FcPrevious } from 'react-icons/fc'
import { AiFillCloseCircle } from 'react-icons/ai'

// Context
import { ThemeContext } from '@contexts/ThemeContext'

// Utils
import { capitalizeFirstLetter } from '@utils/capitalize'
import { handleNavigateNumberOfPages, defineMaxNumberOfPages } from '@utils/homeUtils'

// Types
import type { ProjectsData } from '@customTypes/backendTypes'
import type { ActualPagesProjectsSelector } from '@customTypes/types'

import ListOfTechnologiesInProject from './ListOfTechnologiesInProject'

// COMPONENT
const ProjectItem = (
  {
    data,
    numberOfProjects,
    projectsForPage,
    actualPages,
    actualSelectedProject,
    setPages
  }:
  {
    data: ProjectsData,
    numberOfProjects: number,
    projectsForPage: number,
    actualPages: ActualPagesProjectsSelector,
    actualSelectedProject: string,
    setPages: Dispatch<SetStateAction<ActualPagesProjectsSelector>>
  }) => {
  const [isActive, setIsActive] = useState(true)
  const { theme } = useContext(ThemeContext)

  const defineNumberOfPages = (selectedPageByUser: number): void => {
    let pageToMove = selectedPageByUser

    if (selectedPageByUser < 1) {
      pageToMove = defineMaxNumberOfPages(numberOfProjects, projectsForPage)
    } else if (selectedPageByUser > defineMaxNumberOfPages(numberOfProjects, projectsForPage)) {
      pageToMove = 1
    }

    handleNavigateNumberOfPages(
      pageToMove,
      numberOfProjects,
      projectsForPage,
      actualPages,
      actualSelectedProject,
      setPages
    )
  }

  return (
    <>
      <article className="modal">
        <div className="project-item active-element">
          <h2 className="project-item__title">{data.name}</h2>
          <h3 className="project-item__category">{capitalizeFirstLetter(data.category)} project</h3>

          <div className="project-item__links">
            <a className='project-item__links--item' href={data.githubUrl} target="_blank" rel="noopener noreferrer">
              <SiGithub size={20} />
              <p className="project-item__icon-text">Repository</p>
            </a>
            <a className='project-item__links--item' href={data.projectUrl} target="_blank" rel="noopener noreferrer">
              <HiLink size={20} />
              <p className="project-item__icon-text">Project</p>
            </a>
          </div>

          <p>Description: {data.description}</p>

          <div className='project-item__image'>
            <Image width={250} height={200} style={{ borderBottomRightRadius: '10%' }} src={data.images[0]}></Image>
          </div>

          <ListOfTechnologiesInProject title='Stack used:' data={data.stack} />
          <ListOfTechnologiesInProject title='Principal Libraries:' data={data.libraries} />
          <ListOfTechnologiesInProject title='Environment Technologies:' data={data.environment} />

          {!isActive && <button className="project-item__see-details-button" type="button">See more</button>}

          <div className='project-item__navigation prev'>
            <FcPrevious size={30} onClick={() => defineNumberOfPages(actualPages[actualSelectedProject as keyof ActualPagesProjectsSelector] - 1)} />
          </div>
          <div className='project-item__navigation next'>
            <FcNext size={30} onClick={() => defineNumberOfPages(actualPages[actualSelectedProject as keyof ActualPagesProjectsSelector] + 1)}/>
          </div>

          <div className='project-item__navigation close'>
            <AiFillCloseCircle size={30} onClick={() => setIsActive(!isActive)} />
          </div>

        </div>
      </article>

      <style jsx>{`
        .project-item {
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 15px;
          font-size: 2.2rem;
          padding: 50px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 15px;
        }
        .project-item p{
          text-align: justify;
        }

        .project-item__title {
          font-size: 2rem;
          text-align: center;
          color: ${theme.activeElementColor};
        }

        .project-item__category{
          border-bottom: 1px solid #ccc;
          font-size : 1.6rem;
          height: 35px;
          width: 70%;
          padding: 5px 0;
          margin: 15px 0;
        }

        .project-item__image{
          width: 100%;
          height: auto;
          display: flex;
          justify-content: center;
          border-radius: 50%;
        }

        .project-item__links {
          display: flex;
          gap: 10px;
          justify-content: space-around;
          margin : 15px 0;
        }

        .project-item__links--item {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 2rem;
          padding: 8px;
          border-radius: 15px;
          border: 1px solid #ccc;
        }

        .project-item__icon-text{
          margin-left: 15px;
        }

        
        

        .project-item__see-details-button {
          /* margin-top: 10px; */
          background: ${theme.backgroundColor};
          color: ${theme.textColor};
          border: 1px solid ${theme.textColor};
          border-radius: 10px;
          width: 60%;
          margin: 10px auto 0 auto;
          height: 30px;
          cursor: pointer;
        }

        .project-item__see-details-button:hover {
          background: ${theme.activeElementColor};
          border: 1px solid ${theme.modalBackgroundColor};
        }

        .modal{
          width: 100vw;
          height: 100vh;
          background: ${theme.backgroundColor};
          position: fixed;
          z-index: 1;
          top: 0px;
          left: 0px;

        }

        .active-element{
          width: 95%;
          height: 90%;
          margin: auto;
          margin-top: 45px;
          overflow: auto;
          border: none;
        }


        .project-item__navigation {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          z-index: 3;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: ${theme.backgroundColor};
          border: 1px solid ${theme.textColor};
          cursor: pointer;
        }
        
        .next{
          top: 50%;
          right: 15px;
        }

        .prev{
          top: 50%;
          left: 15px;
        }

        .close{
          top: 15px;
          right: 15px;
        }
      `} </style>
    </>
  )
}

export { ProjectItem }
