import { useContext, useRef, useState } from 'react'
import { ThemeContext } from '@contexts/ThemeContext'

import { TechnologiesSelector } from '@customTypes/types'

const initialState: TechnologiesSelector = {
  all: true,
  frontend: false,
  mobile: false,
  backend: false,
  databases: false,
  others: false
}

const Technologies = () => {
  const [selectedTechnology, setSelectedTechnology] = useState<TechnologiesSelector>(initialState)

  const { theme } = useContext(ThemeContext)
  const selectedNode = useRef<HTMLDivElement>(null)

  const handleSelectedTechnology = (technology: string): void => {
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
  }

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
            <li className={`technologies__filter-list--item ${selectedTechnology.others && 'active-filter'}`} onClick={() => handleSelectedTechnology('others')}>Others</li>
          </ul>
        </nav>
        <div>
        </div>
      </section>

      <style jsx>{`
        .technologies {
          display: flex;
          flex-direction: column;
          width: 90%;
          margin: 25px auto;
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
          background: ${theme.modalBackgroundColor};
          border-radius: 0 0 10px 0;
          text-align : center;
        }

        .active-filter{
          background: ${theme.activeElementColor};
        }

      `}</style>
    </>

  )
}

export { Technologies }
