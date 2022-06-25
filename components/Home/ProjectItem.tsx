// Dependencies
import { Dispatch, SetStateAction, useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

// Icons
import { SiGithub } from 'react-icons/si'
import { HiLink } from 'react-icons/hi'
import { FcNext, FcPrevious } from 'react-icons/fc'
import { AiFillCloseCircle } from 'react-icons/ai'
import { MdWeb } from 'react-icons/md'
import { FaServer, FaDatabase } from 'react-icons/fa'

// Context
import { ThemeContext } from '@contexts/ThemeContext'

// Utils
import { capitalizeFirstLetter } from '@utils/capitalize'
import { handleNavigateNumberOfPages, defineMaxNumberOfPages } from '@utils/homeUtils'

// Components
import ListOfTechnologiesInProject from '@components/globalComponents/ListOfTechnologiesInProject'

// Types
import type { ProjectsData } from '@customTypes/backendTypes'
import type { ActualPagesProjectsSelector } from '@customTypes/types'

const ProjectItem = (
  {
    data,
    numberOfProjects,
    projectsForPage,
    actualPages,
    actualSelectedProject,
    setPages,
    isActive,
    setModalActive
  }:
    {
      data: ProjectsData,
      numberOfProjects: number,
      projectsForPage: number,
      actualPages: ActualPagesProjectsSelector,
      actualSelectedProject: string,
      setPages: Dispatch<SetStateAction<ActualPagesProjectsSelector>>
      isActive: boolean,
      setModalActive: Dispatch<SetStateAction<boolean>>
    }) => {
  // const [isActive, setIsActive] = useState(false)
  const { theme } = useContext(ThemeContext)
  const [selectedImage, setSelectedImage] = useState<number>(0)

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

  const container = useRef<HTMLElement>(null)
  const item = useRef<HTMLDivElement>(null)

  const openModal = () => {
    setModalActive(true)
    container.current?.classList.add('modal')
    item.current?.classList.add('active-element')
  }

  const closeModal = () => {
    setModalActive(false)
    container.current?.classList.remove('modal')
    item.current?.classList.remove('active-element')
  }

  const handleImageNavigation = (image: number) => {
    const maxImages = data.images.length - 1
    if (image < 0) {
      setSelectedImage(maxImages)
    } else if (image > maxImages) {
      setSelectedImage(0)
    } else {
      setSelectedImage(image)
    }
  }

  useEffect(() => {
    if (isActive) {
      openModal()
    } else {
      closeModal()
    }
  }, [isActive])

  return (
    <>
      <article ref={container}>
        <div ref={item} className="project-item" >
          <h2 className="project-item__title">{data.name}</h2>
          <div className='project-item__category'>
            <h3 className="project-item__category-title">{capitalizeFirstLetter(data.category)} project </h3>
            {data.category === 'frontend' && <MdWeb size={30} />}
            {data.category === 'backend' &&
              <>
                <FaServer size={25} />
                <FaDatabase size={25} />
              </>
            }
          </div>

          {/* Links to Project and Github repository */}
          {isActive &&
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
          }

          <p className='project-item--description'>Description: {data.description}</p>

          {/* Project´s image */}
          <div className='project-item__image'>
            <figure className='project-item__image--item'>
              <Image width={931} height={555} objectFit="fill" style={{ borderRadius: '15px' }} src={data.images[selectedImage]}></Image>
            </figure>

            {data.images.length > 1 && selectedImage !== data.images.length - 1 &&
              <div className='project-item__image--navigation next-image' onClick={() => handleImageNavigation(selectedImage + 1)}>
                <FcNext size={30} />
              </div>
            }

            {
              data.images.length > 1 && selectedImage > 0 &&
              <div className='project-item__image--navigation prev-image' onClick={() => handleImageNavigation(selectedImage - 1)}>
                <FcPrevious size={30} />
              </div>
            }
          </div>

          {data.stack.length > 0 && <ListOfTechnologiesInProject title='Stack used:' data={data.stack} projectName={data.name} />}
          {(isActive && data.libraries.length > 0) && <ListOfTechnologiesInProject title='Principal Libraries:' data={data.libraries} projectName={data.name} />}
          {(isActive && data.environment.length > 0) && <ListOfTechnologiesInProject title='Environment Technologies:' data={data.environment} projectName={data.name} />}

          {/* Button to open modal and see the details of the project */}
          {!isActive && <button className="project-item__see-details-button" type="button" onClick={() => openModal()}>See more</button>}

          {/* Navigation between items and close modal */}
          {
            isActive &&
            <>
              <div className='project-item__navigation prev' onClick={() => defineNumberOfPages(actualPages[actualSelectedProject as keyof ActualPagesProjectsSelector] - 1)}>
                <FcPrevious size={30} />
              </div>
              <div className='project-item__navigation next' onClick={() => defineNumberOfPages(actualPages[actualSelectedProject as keyof ActualPagesProjectsSelector] + 1)}>
                <FcNext size={30} />
              </div>

              <div className='project-item__navigation close' onClick={() => closeModal()}>
                <AiFillCloseCircle size={30} />
              </div>
            </>
          }

        </div>
      </article>

      <style jsx>{`

        .project-item {
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 15px;
          font-size: 2.2rem;
          padding: 15px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 15px;
        }
        .project-item p{
          text-align: justify;
        }

        .project-item__title {
          font-size: 2.5rem;
          text-align: center;
          color: ${theme.activeElementColor};
        }

        
        .project-item__category {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .project-item--description{
          font-size: 1.5rem;
        }
        
        .project-item__category-title{
          border-bottom: 1px solid #ccc;
          font-size : 1.8rem;
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
          position: relative;
        }

        .project-item__image--navigation{
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          z-index: 3;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: ${theme.backgroundColor};
          border: 1px solid ${theme.textColor};
          cursor: pointer;
          opacity: 0.7;
        }

        .project-item__image--navigation:hover{
          opacity: 1;
        }

        .project-item__image--item{
          display: block;
        }

        .next-image{
          right: 10px;
          top: 45%;
        }

        .prev-image{
          left: 10px;
          top: 45%;
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
          z-index: 2;
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
          padding: 50px;
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
          position: fixed;
          z-index: 3;
          cursor: pointer;
        }
        

        /* Responsive Design */

        @media (min-width: 610px) {
          .project-item{
            max-width: 575px;
            margin: auto;
          }
        }

        @media (min-width: 768px) {
          .project-item__image--item{
            width: 700px;
          }
          .project-item{
            margin: 0 0 0 auto;
          }
        }

      `} </style>
    </>
  )
}

export { ProjectItem }
