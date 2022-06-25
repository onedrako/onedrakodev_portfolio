import { ThemeContext } from '@contexts/ThemeContext'
import { ProjectsSelector, TechnologiesSelector } from '@customTypes/types'
import { useContext } from 'react'

type selectors = ProjectsSelector | TechnologiesSelector

interface Props<T> {
  selectedElement: T
  handleSelectedElement: (project: keyof T) => void
  element: string
  title: string
  activeResponsivePx: number
}

const ListItemForFilterBar = <T extends selectors>({ selectedElement, handleSelectedElement, element, title, activeResponsivePx }: Props<T>) => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <li className={`itemList__filter-list--item--background ${selectedElement[element as keyof T] && 'active-filter'}`}>
        <p className={'itemList__filter-list--item'} onClick={() => handleSelectedElement(element as keyof T)} >{title}</p>
      </li>

      <style jsx>{`
        .itemList__filter-list--background{
          border-radius: 0 0 10px 0;
        }

        .itemList__filter-list--item {
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

      @media (min-width: ${`${activeResponsivePx}px`}) {
        .itemList__filter-list--item {
            border: none;
            width: 115px;
            position: relative;
            font-size: 1.8rem;
            height: 45px;
          }
          .itemList__filter-list--background{
            position: absolute;
            width: 0%;
          }
          .active-filter{
            background: ${theme.activeElementColor};
            animation: fillBackground 1.5s ease-in-out;
            border-radius: 0 0 10px 0;
          }
        }

        @keyframes fillBackground {
            0% {
              width: 10%;
            }
            100% {
              width: 100%;
            }
          }
        
      `}</style>
    </>
  )
}

export default ListItemForFilterBar
