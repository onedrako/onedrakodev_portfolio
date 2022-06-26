// Dependencies
import { useContext, useState, useEffect } from 'react'
import axios from 'axios'

// Icons
import { SiGithub } from 'react-icons/si'

// Context
import { ThemeContext } from '@contexts/ThemeContext'

// Types
import type { ProjectsSelector, ActualPagesProjectsSelector } from '@customTypes/types'
import type { ProjectsData } from '@customTypes/backendTypes'

// Components
import { ProjectItem } from './ProjectItem'
import { PaginationBar } from './PaginationBar'
import ListItemForFilterBar from './ListItemForFilterBar'

const initialState: ProjectsSelector = {
  all: true,
  frontend: false,
  mobile: false,
  backend: false,
  others: false
}

const Projects = () => {
  const [projects, setProjects] = useState<ProjectsData[] | []>([])
  const [selectedProject, setSelectedProject] = useState<ProjectsSelector>(initialState)
  const [actualProject, setActualProject] = useState<string>('all')
  const [numberOfProjects, setNumberOfProjects] = useState<number>(projects.length)
  const [actualPages, setActualPages] = useState<ActualPagesProjectsSelector>({
    all: 1,
    frontend: 1,
    mobile: 1,
    backend: 1,
    others: 1
  })
  // const [elementsPerPage, setElementsPerPage] = useState<number>(1)
  const elementsPerPage = 1
  const [isModalActive, setIsModalActive] = useState(false)

  const { theme } = useContext(ThemeContext)

  const handleSelectedProject = (project: keyof ProjectsSelector): void => {
    const actualElements = { ...selectedProject }

    Object.keys(actualElements).forEach(key => {
      if (key !== project) {
        actualElements[key as keyof ProjectsSelector] = false
      }
    })

    setSelectedProject({
      ...actualElements,
      [project]: true
    })

    setActualProject(project)
  }

  const defineNumberOfProjects = (): void => {
    if (actualProject === 'all') {
      setNumberOfProjects(projects.length)
      return
    }
    setNumberOfProjects(projects.filter(technology => technology.category === actualProject).length)
  }

  // function to define the items for the pagination projects
  const defineItems = (): {start: number, end:number} => {
    let start = 0
    let end = elementsPerPage
    if (actualPages[actualProject as keyof ActualPagesProjectsSelector] === 1) {
      return { start, end }
    } else {
      start = ((actualPages[actualProject as keyof ActualPagesProjectsSelector]) * elementsPerPage) - elementsPerPage
      end = start + elementsPerPage
      return { start, end }
    }
  }

  useEffect(() => {
    axios.get('/api/projects')
      .then(res => {
        const data = res.data as ProjectsData[]
        setProjects(data)
      })
    defineNumberOfProjects()
  }, [])

  useEffect(() => {
    defineNumberOfProjects()
  }, [projects, actualProject])

  const listNamesFilters: string[] = ['all', 'frontend', 'mobile', 'backend', 'others']
  const listTitlesName: string[] = ['All', 'Frontend', 'Mobile', 'Backend', 'Others']
  const activeResponsivePx: number = 800

  return (
    <>
      <section className='projects'>
        <h2 className='projects__title'>My Projects </h2>
        <hr />

        <nav className='projects__filter-list'>
          <ul>
            {listNamesFilters.map((filter, index) => {
              return (
                <ListItemForFilterBar
                  key={filter}
                  selectedElement={selectedProject}
                  handleSelectedElement={handleSelectedProject}
                  element={filter}
                  title={listTitlesName[index]}
                  activeResponsivePx={activeResponsivePx}
                />
              )
            })}
          </ul>
        </nav>

        <article>
          <ul className='projects__list'>
            {selectedProject.all
              ? projects.slice(defineItems().start, defineItems().end).map(project =>
                <ProjectItem
                  key={`project-${project.id}`}
                  data={project}
                  actualPages={actualPages}
                  setPages={setActualPages}
                  numberOfProjects={numberOfProjects}
                  actualSelectedProject={actualProject}
                  projectsForPage={elementsPerPage}
                  setModalActive={setIsModalActive}
                  isActive={isModalActive}
                  />)
              : projects.filter(project => project.category === actualProject)
                .slice(defineItems().start, defineItems().end)
                .map(project => <ProjectItem
                  key={`project-${project.id}`}
                  data={project}
                  actualPages={actualPages}
                  setPages={setActualPages}
                  numberOfProjects={numberOfProjects}
                  actualSelectedProject={actualProject}
                  projectsForPage={elementsPerPage}
                  setModalActive={setIsModalActive}
                  isActive={isModalActive}
                  />)}
          </ul>

          {numberOfProjects > elementsPerPage &&
              <PaginationBar
                numberOfItems={numberOfProjects}
                actualSelectedItem={actualProject}
                actualPages={actualPages}
                setActualPages={setActualPages}
                elementsForPage={elementsPerPage}
              />
            }

          {projects.filter(project => project.category === actualProject).length === 0 && actualProject !== 'all' &&
              <div className='projects__empty'>
                <a className='project-item__links--item' href="https://github.com/stars/onedrako/lists/courses" target="_blank" rel="noopener noreferrer">
                  <p className='projects__empty--text' >No personal projects yet, but can see courses projects where I´ve used this technology.</p>
                  <SiGithub size={150}></SiGithub>
                </a>
              </div>
          }

        </article>
      </section>

      <style jsx>{`
        .projects {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin: 25px auto;
          padding: 20px;
          max-width: 800px;
        }
        .projects__title{
          font-size: 2.2rem;
        }
        .projects hr{
          width: 100%;
        }

        .projects__list {
          display: grid;
          grid-template-columns: repeat(1, 100%);
          justify-content: center;
          list-style: none;
          padding: 0px;
          margin-top: 20px;
          border-radius: 10px;
          gap: 20px;
          /* background: ${theme.modalBackgroundColor}; */
        }

        .projects__filter-list ul {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
          padding: 0px;
          margin-top: 25px;
        }

        .projects__empty {
          font-size: 1.5rem;
          display: flex;
          width: 100%;
          margin: 0 auto;
          justify-content: center;
          align-items: center;
          gap: 20px;
          border-radius: 10px;
          padding: 20px;
          border: 1px solid ${theme.modalBackgroundColor};
        }

        .project-item__links--item{
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
        }

        .projects__empty--text {
          font-size: 1.8rem;
        }

        @media (min-width: ${`${activeResponsivePx}px`}) {
          .projects{
            position: relative;
            min-height: 425px;
          }
          .projects__list {
            width: 75%;
            margin-left: auto;
          }
          .projects__filter-list {
            position: absolute;
            top: 20%;
            border: 1px solid ${theme.modalBackgroundColor};
            border-radius: 10px;
            padding: 10px;
          }
          .projects__filter-list ul{
            margin: 0;
            display: flex;
            flex-direction: column;
          }
          .projects__empty {
            width: 80%;
            margin: 0 0 0 auto;
          }
        }
        @media (min-width: 800px) {
          .projects {
            border: 1px solid ${theme.modalBackgroundColor};
            border-radius: 10px;
            padding-bottom: 40px;
          }
        }
        

      `}</style>
    </>

  )
}

export { Projects }
