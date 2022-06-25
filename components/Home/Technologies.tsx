// dependencies
import { useContext, useState, useEffect } from 'react'
import axios from 'axios'

// Context
import { ThemeContext } from '@contexts/ThemeContext'

// Types
import type { TechnologiesSelector, ActualPagesTechnologiesSelector } from '@customTypes/types'
import type { TechnologiesData } from '@customTypes/backendTypes'

// Components
import { TechnologyItem } from './TechnologyItem'
import { PaginationBar } from './PaginationBar'

const initialState: TechnologiesSelector = {
  all: true,
  frontend: false,
  mobile: false,
  backend: false,
  databases: false,
  libraries: false,
  others: false
}

const Technologies = () => {
  const [technologies, setTechnologies] = useState<TechnologiesData[] | []>([])
  const [selectedTechnology, setSelectedTechnology] = useState<TechnologiesSelector>(initialState)
  const [actualTechnology, setActualTechnology] = useState<string>('all')
  const [numberOfTechnologies, setNumberOfTechnologies] = useState<number>(technologies.length)
  const [actualPages, setActualPages] = useState<ActualPagesTechnologiesSelector>({
    all: 1,
    frontend: 1,
    mobile: 1,
    backend: 1,
    databases: 1,
    libraries: 1,
    others: 1
  })
  const [elementsPerPage, setElementsPerPage] = useState<number>(6)

  const { theme } = useContext(ThemeContext)

  // function to get the technologies selected by user
  const handleSelectedTechnology = (technology: keyof TechnologiesSelector): void => {
    const actualElements = { ...selectedTechnology }

    Object.keys(actualElements).forEach(key => {
      if (key !== technology) {
        actualElements[key as keyof TechnologiesSelector] = false
      }
    })

    setSelectedTechnology({
      ...actualElements,
      [technology]: true
    })

    setActualTechnology(technology)
  }

  // function to define the number of technologies to show
  const defineNumberOfTechnologies = (): void => {
    if (actualTechnology === 'all') {
      setNumberOfTechnologies(technologies.length)
      return
    }
    setNumberOfTechnologies(technologies.filter(technology => technology.category === actualTechnology).length)
  }

  // function to define the items for the pagination technologies
  const defineItems = (): {start: number, end:number} => {
    let start = 0
    let end = 6
    if (actualPages[actualTechnology as keyof ActualPagesTechnologiesSelector] === 1) {
      return { start, end }
    } else {
      start = ((actualPages[actualTechnology as keyof ActualPagesTechnologiesSelector]) * elementsPerPage) - elementsPerPage
      end = start + elementsPerPage
      return { start, end }
    }
  }

  useEffect(() => {
    axios.get('/api/technologies')
      .then(res => {
        const data = res.data as TechnologiesData[]
        setTechnologies(data)
      })
    defineNumberOfTechnologies()
  }, [])

  useEffect(() => {
    defineNumberOfTechnologies()
  }, [technologies, actualTechnology])

  return (
    <>
      <section className='technologies'>

        <h2 className='technologies__title'>Technologies I´ve used</h2>
        <hr />
        <nav className='technologies__filter-list'>
          <ul>
            <div className={`technologies__filter-list--item--background ${selectedTechnology.all && 'active-filter'}`}>
              <li className={'technologies__filter-list--item'} onClick={() => handleSelectedTechnology('all')} >All</li>
            </div>
            <div className={`technologies__filter-list--item--background ${selectedTechnology.frontend && 'active-filter'}`}>
              <li className={'technologies__filter-list--item'} onClick={() => handleSelectedTechnology('frontend')}>Frontend</li>
            </div>
            <div className={`technologies__filter-list--item--background ${selectedTechnology.mobile && 'active-filter'}`}>
              <li className={'technologies__filter-list--item '} onClick={() => handleSelectedTechnology('mobile')}>Mobile</li>
            </div>
            <div className={`technologies__filter-list--item--background ${selectedTechnology.backend && 'active-filter'}`}>
              <li className={'technologies__filter-list--item '} onClick={() => handleSelectedTechnology('backend')}>Backend</li>
            </div>
            <div className={`technologies__filter-list--item--background ${selectedTechnology.databases && 'active-filter'}`}>
              <li className={'technologies__filter-list--item '} onClick={() => handleSelectedTechnology('databases')}>Databases</li>
            </div>
            <div className={`technologies__filter-list--item--background ${selectedTechnology.libraries && 'active-filter'}`}>
              <li className={'technologies__filter-list--item '} onClick={() => handleSelectedTechnology('libraries')}>{"Principal Library's"}</li>
            </div>
            <div className={`technologies__filter-list--item--background ${selectedTechnology.others && 'active-filter'}`}>
              <li className={'technologies__filter-list--item '} onClick={() => handleSelectedTechnology('others')}>Others</li>
            </div>
          </ul>
        </nav>
        <article>
            {numberOfTechnologies > elementsPerPage &&
              <PaginationBar
                numberOfItems={numberOfTechnologies}
                actualSelectedItem={actualTechnology}
                actualPages={actualPages}
                setActualPages={setActualPages}
                elementsForPage={elementsPerPage}
              />
            }

          <ul className='technologies__list'>
            {selectedTechnology.all

              ? technologies.slice(defineItems().start, defineItems().end).map(technology => <TechnologyItem key={`technology-${technology.id}`} data={technology} />)
              : technologies.filter(technology => technology.category === actualTechnology)
                .slice(defineItems().start, defineItems().end)
                .map(technology => <TechnologyItem key={`technology-${technology.id}`} data={technology} />)}

          </ul>

        </article>
      </section>

      <style jsx>{`
        .technologies {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin: 25px auto;
          padding: 20px;
        }
        .technologies__title{
          font-size: 2.2rem;
        }
        .technologies hr{
          width: 100%;
        }

        .technologies__filter-list ul {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
          padding: 0px;
          margin-top : 25px;
        }

        .technologies__filter-list--item {
          list-style: none;
          font-size: 1.5rem;
          border: 1px solid ${theme.modalBackgroundColor};
          border-radius: 0 0 10px 0;
          text-align : center;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .active-filter{
          background: ${theme.activeElementColor};
          border-radius: 0 0 10px 0;
        }

        .technologies__list {
          display: grid;
          grid-template-columns: repeat(3, 30%);
          justify-content: center;
          list-style: none;
          padding: 10px;
          margin-top: 20px;
          border-radius: 10px;
          gap: 20px;
          /* background: ${theme.modalBackgroundColor}; */
        }

        .technologies__filter-list--background{
          border-radius: 0 0 10px 0;
        }

        @media (min-width: 600px) {
          .technologies{
            position: relative;
            min-height: 425px;
          }
          .technologies__list {
            width: 75%;
            margin-left: auto;
          }
          .technologies__filter-list {
            position: absolute;
            top: 20%;
            border: 1px solid ${theme.modalBackgroundColor};
            border-radius: 10px;
            padding: 10px;
          }
          .technologies__filter-list ul{
            margin: 0;
            display: flex;
            flex-direction: column;
          }
          .technologies__filter-list--item {
            border: none;
            width: 115px;
            position: relative;
          }
          .technologies__filter-list--background{
            position: absolute;
            width: 0%;
          }
          .active-filter{
            background: ${theme.activeElementColor};
            animation: fillBackground 1.5s ease-in-out;
            border-radius: 0 0 10px 0;
          }

          @keyframes fillBackground {
            0% {
              width: 10%;
            }
            100% {
              width: 100%;
            }
          }
        }

      `}</style>
    </>

  )
}

export { Technologies }
