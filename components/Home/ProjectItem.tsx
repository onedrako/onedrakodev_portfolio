import type { ProjectsData } from '@customTypes/backendTypes'
import Image from 'next/image'
import { technologiesList } from '@utils/listOfTechnologiesIcons'
// {technologiesList.react({ size: 25 })}
import { capitalizeFirstLetter } from '@utils/capitalize'
import { useContext } from 'react'
import { ThemeContext } from '@contexts/ThemeContext'

const ProjectItem = ({ data }: {data: ProjectsData}) => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <article className="project-item">
        <h2 className="project-item__title">{data.name}</h2>
        <h3>{capitalizeFirstLetter(data.category)} project</h3>
        <p>Description: {data.description}</p>
        <Image width={125} height={125} src={data.images[0]} ></Image>
        <h3>Technologies</h3>
        <div className='project-item__stack'>
          {data.stack.map(stack =>
            <>
              <div className='stack-item'>
                {technologiesList[stack as keyof typeof technologiesList].icon({ size: 30, color: '#fff' })}
                <p className='stack-item__name'>{technologiesList[stack as keyof typeof technologiesList].name}</p>
              </div>
            </>
          )}
        </div>
        <button className="project-item__see-details-button" type="button">See more</button>
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
          font-size: 2rem;
          text-align: center;
        }
        .project-item__stack {
          margin-top: 5px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
          gap: 25px;
        }

        .stack-item {
          position: relative;
          font-size: 1.5rem;
          display: flex;
          justify-content: center;
        }

        .stack-item:hover .stack-item__name {
          visibility: visible;
        }

        .stack-item__name{
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
      `} </style>
    </>
  )
}

export { ProjectItem }
