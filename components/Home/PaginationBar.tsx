import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '@contexts/ThemeContext'
import { FcNext, FcPrevious } from 'react-icons/fc'

import { ActualPagesTechnologiesSelector } from '@customTypes/types'

const PaginationBar = ({ numberOfTechnologies, actualTechnology }: {numberOfTechnologies: number, actualTechnology: string}) => {
  // const [actualPage, setActualPage] = useState<number>(1)
  const maxNumberOfPages = Math.ceil(numberOfTechnologies / 6)
  const [actualPages, setActualPages] = useState<ActualPagesTechnologiesSelector>({
    all: 6,
    frontend: 2,
    mobile: 1,
    backend: 1,
    databases: 1,
    libraries: 1,
    others: 1
  })

  const actualPage = actualPages[actualTechnology as keyof ActualPagesTechnologiesSelector]
  console.log('', actualPage)

  console.log('max', maxNumberOfPages)

  const handleNumberOfPages = (): void => {

  }

  const { theme } = useContext(ThemeContext)

  return (
  <>
    <div className="pagination-bar">

        <span className="pagination-bar__arrow previous-element ">
          <FcPrevious size={15} />
        </span>

        {/* Prev Pages - firstpage in all, division in case we have more elements far than actual, and before the actual  */}
        {actualPage !== 1 && <span className="pagination-bar__element"><div>1</div></span> }
        {actualPage > 3 && <span className="pagination-bar__division">...</span> }
        {(actualPage !== 1 && actualPage - 1 !== 1) && <span className=" pagination-bar__element"><div>{actualPage - 1 }</div></span> }

        {/* Actual Page */}
        <span className="pagination-bar__actual-element pagination-bar__element"><div>{actualPage}</div></span>

        {/* Next Pages - after the actual page, division in case we have more elements far than actual, and the last page  */}
        {(actualPage !== maxNumberOfPages && actualPage + 1 !== maxNumberOfPages) && <span className=" pagination-bar__element"><div>{actualPage + 1}</div></span> }
        {(actualPage + 1 !== maxNumberOfPages && actualPage !== maxNumberOfPages) && <span className="pagination-bar__division">...</span> }
        {(actualPage !== maxNumberOfPages) && <span className="pagination-bar__last pagination-bar__element" ><div>{maxNumberOfPages}</div></span> }

        <span className="pagination-bar__arrow next-element">
          <FcNext size={15} />
        </span>
      </div>

      <style jsx>{`
        .pagination-bar {
          display: flex;
          height: 30px;
          width: 90%;
          justify-content: space-between;
          align-items: center;
          font-size: 2.4rem;
          margin: 20px auto;
          border-radius: 10px;
          border: 1px solid ${theme.activeElementColor};
        }
        .pagination-bar__arrow{
          display: flex;
          align-items: center;
          height: 100%;
          padding: 0 7px;
        }
        
        .previous-element{
          border-right : 1px solid ${theme.activeElementColor};
        }

        .next-element{
          border-left: 1px solid ${theme.activeElementColor};
        }

        .pagination-bar__element{
          display: inline-block;
        }

        .pagination-bar__element div{
          width: 20px;
          border: solid 2px ${theme.modalBackgroundColor};
          font-size: 1.5rem;
          border-radius: 50%;
          text-align: center;
        } 

        .pagination-bar__actual-element div{
          background: ${theme.activeElementColor};
          border: solid 2px ${theme.modalBackgroundColor};
        }


      `}</style>
  </>
  )
}

export { PaginationBar }
