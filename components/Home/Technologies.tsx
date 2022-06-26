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
import ListItemForFilterBar from './ListItemForFilterBar'

const initialState: TechnologiesSelector = {
  all: true,
  frontend: false,
  mobile: false,
  backend: false,
  databases: false,
  libraries: false,
  others: false
}

const defineNumberOfElements = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth >= 530 && window.innerWidth < 600) {
      return 8
    } else if (window.innerWidth >= 600 && window.innerWidth < 700) {
      return 9
    } else if (window.innerWidth >= 700) {
      return 12
    } else {
      return 6
    }
  } else {
    return 6
  }
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
  const [elementsPerPage, setElementsPerPage] = useState<number>(defineNumberOfElements())

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
    let end = elementsPerPage
    if (actualPages[actualTechnology as keyof ActualPagesTechnologiesSelector] === 1) {
      return { start, end }
    } else {
      start = ((actualPages[actualTechnology as keyof ActualPagesTechnologiesSelector]) * elementsPerPage) - elementsPerPage
      end = start + elementsPerPage
      return { start, end }
    }
  }

  const listNamesFilters: string[] = ['all', 'frontend', 'mobile', 'backend', 'databases', 'libraries', 'others']
  const listTitlesName: string[] = ['All', 'Frontend', 'Mobile', 'Backend', 'Databases', "Principal Library's", 'Others']
  const activeResponsivePx: number = 600

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      setElementsPerPage(defineNumberOfElements())
    }
    )
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
            {listNamesFilters.map((filter, index) => {
              return (
                <ListItemForFilterBar
                  key={filter}
                  selectedElement={selectedTechnology}
                  handleSelectedElement={handleSelectedTechnology}
                  element={filter}
                  title={listTitlesName[index]}
                  activeResponsivePx={activeResponsivePx}
                />
              )
            })}
          </ul>
        </nav>
        <article>
          <ul className='technologies__list'>
              {selectedTechnology.all

                ? technologies.slice(defineItems().start, defineItems().end).map(technology => <TechnologyItem key={`technology-${technology.id}`} data={technology} />)
                : technologies.filter(technology => technology.category === actualTechnology)
                  .slice(defineItems().start, defineItems().end)
                  .map(technology => <TechnologyItem key={`technology-${technology.id}`} data={technology} />)}

            </ul>
          {numberOfTechnologies > elementsPerPage &&
            <PaginationBar
              numberOfItems={numberOfTechnologies}
              actualSelectedItem={actualTechnology}
              actualPages={actualPages}
              setActualPages={setActualPages}
              elementsForPage={elementsPerPage}
            />
          }

        </article>
      </section>

      <style jsx>{`
        .technologies {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin: 25px auto;
          padding: 20px;
          max-width: 800px;
        }
        .technologies__title{
          font-size: 2.2rem;
        }
        .technologies hr{
          width: 100%;
        }


        .technologies__list {
          display: grid;
          grid-template-columns: repeat(auto-fit, 100px);
          /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
          justify-content: center;
          list-style: none;
          padding: 10px;
          margin-top: 20px;
          border-radius: 10px;
          gap: 20px;
          /* background: ${theme.modalBackgroundColor}; */
        }

        .technologies__filter-list ul {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
          padding: 0px;
          margin-top : 25px;
        }



        @media (min-width: ${`${activeResponsivePx}px`}) {
          .technologies{
            position: relative;
            min-height: 500px;
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

        @media (min-width: 800px) {
          .technologies{
            border: 1px solid ${theme.modalBackgroundColor};
            border-radius: 10px;
            padding-bottom: 40px;
          }
        }

      `}</style>
    </>

  )
}

export { Technologies }
