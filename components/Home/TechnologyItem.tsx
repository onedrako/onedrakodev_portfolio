import { useContext } from 'react'

import Image from 'next/image'

import type { TechnologiesData } from '@customTypes/backendTypes'

const TechnologyItem = ({ data }: {data: TechnologiesData}) => {
  return (
    <>
      <li className='technology-item'>
        <div className='technology-item__container'>
          <div className='technology-item__Image'>
            <Image src={data.image} alt={data.name} width={45} height={45} style={{ borderRadius: '10px' }}/>
          </div>
          <h3>{data.name}</h3>
          <div className='technology-item__description'>
            <p>{data.description}</p>
          </div>
        </div>
      </li>

      <style jsx>{`
        .technology-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;        
        }

        .technology-item__container:hover .technology-item__description{
          visibility: visible;
        }

        .technology-item__container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          height: 80px;
          /* background-color: #808183; */
          border-radius: 50%;
        }



        .technology-item__Image {
          display: flex;
          justify-content: center;
          width: 45px;
          border-radius: 50%;
          background-color: #ffff ;
          position: relative;
        }

        .technology-item__description {
          display: flex;
          justify-content: center;
          padding: 10px;
          background-color: rgba(0,0,0,0.9);
          position: absolute;
          width: 100px;
          z-index: 1;
          border-radius: 10px;
          
          visibility: hidden;
        }

        .technology-item__description p{
          font-size: 1.2rem;
          margin: 0 auto;
          text-align: center;
        }



        .technology-item h3{
          margin-top: 5px;
          font-size: 1.5rem;
          text-align: center;
        }
      `} </style>
    </>
  )
}

export { TechnologyItem }
