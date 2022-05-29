// dependencies
import { useContext, useState, useEffect } from 'react'
import axios from 'axios'

// Context
import { ThemeContext } from '@contexts/ThemeContext'

// Types
import type { ProjectsSelector, ActualPagesProjectsSelector } from '@customTypes/types'
import type { ProjectsData } from '@customTypes/backendTypes'

// Components
import { ProjectItem } from './ProjectItem'
import { PaginationBar } from './PaginationBar'

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
  const [elementsPerPage, setElementsPerPage] = useState<number>(1)
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

  return (
    <>
      <section className='projects'>
        <h2 className='projects__title'>My Projects </h2>
        <hr />
        <nav className='projects__filter-list'>
          <ul>
            <li className={`projects__filter-list--item ${selectedProject.all && 'active-filter'}`} onClick={() => handleSelectedProject('all')} >All</li>
            <li className={`projects__filter-list--item ${selectedProject.frontend && 'active-filter'}`} onClick={() => handleSelectedProject('frontend')}>Frontend</li>
            <li className={`projects__filter-list--item ${selectedProject.mobile && 'active-filter'}`} onClick={() => handleSelectedProject('mobile')}>Mobile</li>
            <li className={`projects__filter-list--item ${selectedProject.backend && 'active-filter'}`} onClick={() => handleSelectedProject('backend')}>Backend</li>
            <li className={`projects__filter-list--item ${selectedProject.others && 'active-filter'}`} onClick={() => handleSelectedProject('others')}>Others</li>
          </ul>
        </nav>
        <article>
            {numberOfProjects > elementsPerPage &&
              <PaginationBar
                numberOfItems={numberOfProjects}
                actualSelectedItem={actualProject}
                actualPages={actualPages}
                setActualPages={setActualPages}
                elementsForPage={elementsPerPage}
              />
            }

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
                .map(project => <ProjectItem key={`project-${project.id}`} data={project} />)}

          </ul>

        </article>
      </section>

      <style jsx>{`
        .projects {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin: 25px auto;
          padding: 20px;
          position: absolute;
        }
        .projects__title{
          font-size: 2.2rem;
        }
        .projects hr{
          width: 100%;
        }

        .projects__filter-list ul {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
          padding: 0px;
          margin-top: 25px;
        }

        .projects__filter-list--item {
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

      `}</style>
    </>

  )
}

export { Projects }
