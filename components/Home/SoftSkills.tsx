import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { SoftSkillsData } from '@customTypes/backendTypes'
import { PaginationBar } from './PaginationBar'
import { SoftSkillItem } from './SoftSkillItem'
import { ThemeContext } from '@contexts/ThemeContext'

const SoftSkills = () => {
  const [softSkills, setSoftSkills] = useState<SoftSkillsData[]>([])
  const [actualPages, setActualPages] = useState<{all: number}>({
    all: 1
  })

  // const [elementsPerPage, setElementsPerPage] = useState<number>(2)
  const elementsPerPage = 2
  const actualSkill = 'all'
  const numberOfItems = softSkills.length

  useEffect(() => {
    axios.get('/api/soft-skills')
      .then(res => {
        const data = res.data as SoftSkillsData[]
        setSoftSkills(data)
      })
  }, [])

  const defineItems = (): {start: number, end:number} => {
    let start = 0
    let end = elementsPerPage
    if (actualPages[actualSkill as keyof {all:number}] === 1) {
      return { start, end }
    } else {
      start = ((actualPages[actualSkill as keyof {all:number}]) * elementsPerPage) - elementsPerPage
      end = start + elementsPerPage
      return { start, end }
    }
  }

  const { theme } = useContext(ThemeContext)

  return (
    <>
      <section className='soft-skills-container'>
        <h2>Principal Soft Skills</h2>

        <ul className='soft-skills-list'>
          {softSkills.slice(defineItems().start, defineItems().end).map(softSkill => (
            <SoftSkillItem key={`soft-skill-${softSkill.id}`} softSkill={softSkill} />
          ))}
        </ul>
        <PaginationBar
          numberOfItems={numberOfItems}
          actualSelectedItem={actualSkill}
          actualPages={actualPages}
          setActualPages={setActualPages}
          elementsForPage={elementsPerPage}
        />
      </section>

      <style jsx>{`
        .soft-skills-container {
          display: flex;
          flex-direction: column;
          padding: 0 25px;
          margin-top: 25px;
          grid-area: softSkills;
        }

        .soft-skills-list {
          display: flex;
          flex-direction: column; 
          width: 100%;
          margin: 15px auto;
          gap: 15px;
        }
        
        h2 {
          font-size: 2.2rem;
          border-bottom: 1px solid #e6e6e6;
        }

        @media (min-width: 800px) {
          .soft-skills-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 25px;
            border: 1px solid ${theme.modalBackgroundColor};
            border-radius: 10px;
          }
        }
      `}</style>
    </>
  )
}

export { SoftSkills }
