import { useContext } from 'react'

// Context
import { ThemeContext } from '@contexts/ThemeContext'

// Icons
import { technologiesList } from '@utils/listOfTechnologiesIcons'

const ListOfTechnologiesInProject = ({ title, data, projectName }: {title: string, data: string[], projectName:string}) => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <h3 className='technologies-list__title'>{title}</h3>
      <div className='technologies-list__container'>
        {data.map(elem =>
            <div key={`${projectName}-${title}-${data.indexOf(elem)}`} className='technology-item'>
              {technologiesList[elem as keyof typeof technologiesList].icon({ size: 30, color: '#fff', className: 'icon' })}
              <p className='technology-item__name'>{technologiesList[elem as keyof typeof technologiesList].name}</p>
            </div>
        )}
      </div>

      <style jsx>{`
        .technologies-list__container {
          margin-top: 5px;
          padding: 15px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(45px, 1fr));
          gap: 15px;
          width: 100%;
        }

        .technologies-list__title {
          margin-top: 30px;
          margin-bottom: 10px;
          font-size: 1.8rem;
          text-align: center;
        }

        .technology-item:hover {
          transform: scale(1.45);
        }

        .technology-item {
          position: relative;
          font-size: 1.5rem;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        
        .icon > * {
          cursor: default !important; 
          color: green;

        }

        .icon > *:hover {
          color: ${theme.activeElementColor};
        }

        /* .technology-item:hover .technology-item__name {
          visibility: visible;
        } */

        /* .technology-item__name{
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
        } */

        .technology-item__name {
          font-size: 1.2rem;
          margin-top: 5px;
          text-align: center;
        }

        @media (min-width: 350px){
          .technologies-list__container {
            grid-template-columns: repeat(auto-fit, minmax(55px, 1fr));
            gap: 30px;
          }
          .technology-item__name{
            font-size: 1.5rem;
          }
          .technologies-list__title{
            font-size: 2.2rem;
          }
        }


      `}</style>
    </>
  )
}

export default ListOfTechnologiesInProject
