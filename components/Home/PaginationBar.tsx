import { useContext, useState } from 'react'
import { ThemeContext } from '@contexts/ThemeContext'
import { FcNext, FcPrevious } from 'react-icons/fc'

const PaginationBar = ({ numberOfTechnologies }: {numberOfTechnologies: number}) => {
  const [actualPage, setActualPage] = useState<number>(1)
  const numberofPages = Math.ceil(numberOfTechnologies / 6)
  console.log(numberofPages)

  const { theme } = useContext(ThemeContext)

  return (
  <>
    <div className="pagination-bar">

        <span className="pagination-bar__arrow previous-element ">
          <FcPrevious size={15} />
        </span>

        <span className="pagination-bar__element"><div>1</div></span>

        {actualPage >= 4 && <span className="pagination-bar__division">...</span> }
        <span className=" pagination-bar__element"><div>2</div></span>
        <span className="pagination-bar__actual-element pagination-bar__element"><div>{actualPage}</div></span>
        <span className=" pagination-bar__element"><div>4</div></span>
        <span className="pagination-bar__division">...</span>
        <span className="pagination-bar__last pagination-bar__element" ><div>5</div></span>

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
