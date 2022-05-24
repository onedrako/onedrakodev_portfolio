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

  const { theme } = useContext(ThemeContext)

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
    console.log(actualPages)
    if (actualPages[actualTechnology as keyof ActualPagesTechnologiesSelector] === 1) {
      return { start, end }
    } else {
      start = ((actualPages[actualTechnology as keyof ActualPagesTechnologiesSelector]) * 6) - 6
      end = start + 6
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
        <h2 className='technologies__title'>Technologies that I used in my projects</h2>
        <hr />
        <nav className='technologies__filter-list'>
          <ul>
            <li className={`technologies__filter-list--item ${selectedTechnology.all && 'active-filter'}`} onClick={() => handleSelectedTechnology('all')} >All</li>
            <li className={`technologies__filter-list--item ${selectedTechnology.frontend && 'active-filter'}`} onClick={() => handleSelectedTechnology('frontend')}>Frontend</li>
            <li className={`technologies__filter-list--item ${selectedTechnology.mobile && 'active-filter'}`} onClick={() => handleSelectedTechnology('mobile')}>Mobile</li>
            <li className={`technologies__filter-list--item ${selectedTechnology.backend && 'active-filter'}`} onClick={() => handleSelectedTechnology('backend')}>Backend</li>
            <li className={`technologies__filter-list--item ${selectedTechnology.databases && 'active-filter'}`} onClick={() => handleSelectedTechnology('databases')}>Databases</li>
            <li className={`technologies__filter-list--item ${selectedTechnology.libraries && 'active-filter'}`} onClick={() => handleSelectedTechnology('libraries')}>{"Principal Library's"}</li>
            <li className={`technologies__filter-list--item ${selectedTechnology.others && 'active-filter'}`} onClick={() => handleSelectedTechnology('others')}>Others</li>
          </ul>
        </nav>
        <article>
            {numberOfTechnologies > 6 &&
              <PaginationBar
                numberOfTechnologies={numberOfTechnologies}
                actualTechnology={actualTechnology}
                actualPages={actualPages}
                setActualPages={setActualPages}
              />
            }

          <ul className='technologies__list'>
            {selectedTechnology.all

              ? technologies.slice(defineItems().start, defineItems().end).map(technology => <TechnologyItem key={technology.id} data={technology} />)
              : technologies.filter(technology => technology.category === actualTechnology)
                .slice(defineItems().start, defineItems().end)
                .map(technology => <TechnologyItem key={technology.id} data={technology} />)}

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
        }

        .active-filter{
          background: ${theme.activeElementColor};
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

      `}</style>
    </>

  )
}

export { Technologies }
