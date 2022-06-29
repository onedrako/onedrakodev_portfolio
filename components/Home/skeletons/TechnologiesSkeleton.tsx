import { ThemeContext } from '@contexts/ThemeContext'
import { useContext } from 'react'

const TechnologiesSkeleton = ({ itemHeight }: {itemHeight: string}) => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <li className="container">
        <div className="icon"></div>
        <div className="title"></div>
      </li>
      <style jsx>{`
        .container {
          height: ${itemHeight};
          display: flex;
          flex-direction: column;
          gap: 10%;
          align-items: center;
          animation: fadeIn 5s ease-in-out infinite;
        }
        .icon {
          width: 65%;
          height: 70%;
          background-color: ${theme.textColor};
          border-radius: 50%;
        }
        .title {
          width: 65%;
          height:20%;
          background-color: ${theme.textColor};
          border-radius: 10px;
        }
        @keyframes fadeIn {
        0% {
          opacity: 0.8;
        }
        50%{
          opacity: 0.2;
        }
        to {
          opacity: 0.8;
        }
      }

      `}</style>
    </>
  )
}

export { TechnologiesSkeleton }
