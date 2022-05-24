import { useContext, useRef } from 'react'
import { ThemeContext } from '@contexts/ThemeContext'
import { FcNext, FcPrevious } from 'react-icons/fc'

import { ActualPagesTechnologiesSelector } from '@customTypes/types'

const PaginationBar = ({
  numberOfTechnologies,
  actualTechnology,
  actualPages,
  setActualPages
}:{
    numberOfTechnologies: number,
    actualTechnology: string,
    actualPages: ActualPagesTechnologiesSelector,
    setActualPages: (actualPages: ActualPagesTechnologiesSelector) => void
  }) => {
  // const [actualPage, setActualPage] = useState<number>(1)
  // const maxNumberOfPages = 36
  // const [actualPages, setActualPages] = useState<ActualPagesTechnologiesSelector>({
  //   all: 1,
  //   frontend: 1,
  //   mobile: 1,
  //   backend: 1,
  //   databases: 1,
  //   libraries: 1,
  //   others: 1
  // })

  const inputPagination = useRef(null)

  const maxNumberOfPages = Math.ceil(numberOfTechnologies / 6)
  const actualPage = actualPages[actualTechnology as keyof ActualPagesTechnologiesSelector]

  let size:number = 0.90

  const defineSize = ():number => {
    if (maxNumberOfPages >= 6 && (maxNumberOfPages !== actualPage)) {
      size = 0.95
      return size
    } else if (maxNumberOfPages <= 2) {
      size = 0.50
      return size
    } else if (maxNumberOfPages === actualPage) {
      size = 0.70
      return size
    } else {
      size = 0.90
      return size
    }
  }

  defineSize()

  const handleNumberOfPages = (pageToGo:number): void => {
    if (pageToGo < 1) {
      pageToGo = 1
    } else if (pageToGo > maxNumberOfPages) {
      pageToGo = maxNumberOfPages
    }
    setActualPages({
      ...actualPages,
      [actualTechnology]: pageToGo
    })
  }

  const { theme } = useContext(ThemeContext)

  return (
  <>
    <div className='pagination-container' >
      <div className="pagination-bar">

          <span className="pagination-bar__arrow previous-element" onClick={() => handleNumberOfPages(actualPage - 1)}>
            <FcPrevious size={15} />
          </span>

          {/* Prev Pages - firstpage in all, division in case we have more elements far than actual, and before the actual  -2 and -1 */}
          {actualPage !== 1 && <span className="pagination-bar__element" onClick={() => handleNumberOfPages(1)} ><div>1</div></span> }
          {actualPage > 3 && <span className="pagination-bar__division">...</span> }
          {(actualPage !== 1 && actualPage - 1 !== 1) && (actualPage !== 2 && actualPage > 4) && actualPage < 5 && <span className=" pagination-bar__element" onClick={() => handleNumberOfPages(actualPage - 2)}><div>{actualPage - 2 }</div></span> }
          {(actualPage !== 1 && actualPage - 1 !== 1) && <span className=" pagination-bar__element" onClick={() => handleNumberOfPages(actualPage - 1)}><div>{actualPage - 1 }</div></span> }

          {/* Actual Page */}
          <span className="pagination-bar__actual-element pagination-bar__element"><div>{actualPage}</div></span>

          {/* Next Pages - after the actual page +1 and +2, division in case we have more elements far than actual, and the last page  */}
          {(actualPage !== maxNumberOfPages && actualPage + 1 !== maxNumberOfPages) && <span className=" pagination-bar__element" onClick={() => handleNumberOfPages(actualPage + 1)}><div>{actualPage + 1}</div></span> }
          {(actualPage !== maxNumberOfPages && actualPage + 2 !== maxNumberOfPages) && (actualPage !== maxNumberOfPages - 1 && actualPage < 4) && <span className=" pagination-bar__element" onClick={() => handleNumberOfPages(actualPage + 2)}><div>{actualPage + 2}</div></span> }
          {(actualPage + 1 !== maxNumberOfPages && actualPage !== maxNumberOfPages) && <span className="pagination-bar__division" >...</span> }
          {(actualPage !== maxNumberOfPages) && <span className="pagination-bar__last pagination-bar__element" onClick={() => handleNumberOfPages(maxNumberOfPages)}><div>{maxNumberOfPages}</div></span> }

          <span className="pagination-bar__arrow next-element" onClick={() => handleNumberOfPages(actualPage + 1)}>
            <FcNext size={15} />
          </span>
        </div>
        <form className='pagination-go-to-page' onSubmit={(e) => {
          e.preventDefault()
          handleNumberOfPages(parseInt(inputPagination.current.value))
        } }>
          <p>Go to Page</p>
          <input type="number" placeholder="1" ref={inputPagination} />
          <FcNext size={20} onClick={() => handleNumberOfPages(parseInt(inputPagination.current.value)) } />

        </form>
    </div>

      <style jsx>{`
        .pagination-container{
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 18px;
        }

        .pagination-bar {
          display: flex;
          height: 35px;
          width: ${`${size * 100}%`};
          justify-content: space-between;
          align-items: center;
          font-size: 2.4rem;
          margin: 20px 0 0 auto;
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
          width:25px;
          border: solid 2px ${theme.modalBackgroundColor};
          font-size: 1.5rem;
          border-radius: 50%;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
        } 

        .pagination-bar__actual-element div{
          background: ${theme.activeElementColor};
          border: solid 2px ${theme.modalBackgroundColor};
        }

        .pagination-go-to-page{
          display: flex;
          /* gap: 5px; */
          align-items: center;
          justify-content: space-between;
          width: 120px;
          height: 35px;
          padding: 0px 10px;
          border: solid 2px ${theme.activeElementColor};
          border-radius: 15px;
          position: relative;
        }

        .pagination-go-to-page p{
          font-size: 1.3rem;
          margin: 0;
          position: absolute;
          top : -15px;
          left: 26px;
        }

        .pagination-go-to-page input{
          width: 50px;
          height: 25px;
          font-size: 1.3rem;
          background: ${theme.backgroundColor};
          border: none;
          color: ${theme.textColor};
          text-align: center;
          padding: 0 5px 0 0;
          border-right: 1px solid ${theme.activeElementColor};
        }


      `}</style>
  </>
  )
}

export { PaginationBar }
