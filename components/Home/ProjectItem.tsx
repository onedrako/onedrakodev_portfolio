// Dependencies
import { useContext, useState } from 'react'
import Image from 'next/image'

// Icons
import { SiGithub } from 'react-icons/si'
import { HiLink } from 'react-icons/hi'
import { FcNext, FcPrevious } from 'react-icons/fc'
import { AiFillCloseCircle } from 'react-icons/ai'

// Context
import { ThemeContext } from '@contexts/ThemeContext'

// Utils
import { technologiesList } from '@utils/listOfTechnologiesIcons'
import { capitalizeFirstLetter } from '@utils/capitalize'

// Types
import type { ProjectsData } from '@customTypes/backendTypes'

// COMPONENT
const ProjectItem = ({ data }: {data: ProjectsData}) => {
  const [isActive, setIsActive] = useState(true)

  const { theme } = useContext(ThemeContext)
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

          <h3>Technologies</h3>
          <div className='project-item__technologies'>
            {data.stack.map(stack =>
              <>
                <div className='technology-item'>
                  {technologiesList[stack as keyof typeof technologiesList].icon({ size: 30, color: '#fff' })}
                  <p className='technology-item__name'>{technologiesList[stack as keyof typeof technologiesList].name}</p>
                </div>
              </>
            )}
          </div>

          <h3>Principal Libraries</h3>
          <div className='project-item__technologies'>
            {data.libraries.map(library =>
              <>
                <div className='technology-item'>
                  {technologiesList[library as keyof typeof technologiesList].icon({ size: 30, color: '#fff' })}
                  <p className='technology-item__name'>{technologiesList[library as keyof typeof technologiesList].name}</p>
                </div>
              </>
            )}
          </div>

          <h3>Environment Technologies</h3>
          <div className='project-item__technologies'>
            {data.environment.map(library =>
              <>
                <div className='technology-item'>
                  {technologiesList[library as keyof typeof technologiesList].icon({ size: 30, color: '#fff' })}
                  <p className='technology-item__name'>{technologiesList[library as keyof typeof technologiesList].name}</p>
                </div>
              </>
            )}
          </div>

          {!isActive && <button className="project-item__see-details-button" type="button">See more</button>}

          <div className='project-item__navigation prev'>
            <FcPrevious size={30} />
          </div>
          <div className='project-item__navigation next'>
            <FcNext size={30} />
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

        
        .project-item__technologies {
          margin-top: 5px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
          gap: 25px;
        }

        .technology-item {
          position: relative;
          font-size: 1.5rem;
          display: flex;
          justify-content: center;
        }

        .technology-item:hover .technology-item__name {
          visibility: visible;
        }

        .technology-item__name{
          position: absolute;
          font-size: 1.2rem;
          cursor:default;
          background: rgba(0,0,0,0.8);
          top: -10px;
          width: 100%;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          padding: 2px;
          visibility: hidden;
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
