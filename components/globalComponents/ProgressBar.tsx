import React from 'react'

import { defineColorPoint } from '@utils/defineColorPoint'

const ProgressBar = ({ category, progress, total }: {category: string, progress: number, total: number }) => {
  return (
    <>
      <div className="progress" >
        <div className="progress--percentage">
          <div className="progress--percentage--bar" style={{ background: defineColorPoint(category), width: `${Math.round((progress / total) * 100)}%` }} >
            <p className='progress--text'>{`${Math.round((progress / total) * 100)}%`}</p>
          </div>
        </div>
        <p className='progress--text'>{`Courses Completed: ${progress}/${total}`}</p>
      </div>

      <style jsx>{`
        .progress{
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 100%;
          justify-content: flex-end;
          align-items: center;
          padding: 5px;
          margin: 0 auto; 
        }
        .progress--percentage {
          border: 1px solid #ccc;
          border-radius: 15px ;
          width: 100%;   
          height: 25px;
        }
        .progress--percentage--bar {
          border-right: 1px solid #ccc;
          border-radius: 15px ;
          width: 100%;   
          height: 100%;
        }
        .progress--text{
          font-size: 1.4rem;
          text-align: center;
        }
        @media (min-width: 768px){
          .progress{
            margin-top: 10px;
            width: 60%;
            display: flex;
          }
          .progress--percentage {
            height: 40px;
          }
          .progress--percentage--bar {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .progress--text{
            font-size: 1.8rem;
          }
        } 
      `}</style>
    </>

  )
}

export default ProgressBar
