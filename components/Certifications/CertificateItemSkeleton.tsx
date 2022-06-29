import { ThemeContext } from '@contexts/ThemeContext'
import { useContext } from 'react'

const CertificateItemSkeleton = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <article className='skeleton'>
        <h3 className='skeleton__title'>Loading this certificate</h3>
        <div className='skeleton__image'></div>
        <div className='skeleton__date'> 15/04/2021 </div>
        <div className='skeleton__links'>
          <div className='skeleton__links--item'></div>
          <div className='skeleton__links--item'></div>
        </div>
      </article>

      <style jsx>{`
        .skeleton{
          height: 451px;
          width: 313px;
          margin: 20px 5px;
          padding: 15px;
          border: 1px solid ${theme.textColor};
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          animation: fadeIn 5s ease-in-out infinite;
        }
        .skeleton__title{
          width: 90%;
          height: 80px;
          /* color: ${theme.backgroundColor}; */
          font-size: 2.5rem;
          margin-bottom: 10px;
        }
        .skeleton__image{
          width: 100%;
          height: 237px;
          border-radius: 10px;
          background-color: ${theme.textColor};
          margin-bottom: 10px;
        }

        .skeleton__date{
          width: 100%;
          font-size: 1.5rem;
          text-align: end;
          margin-bottom: 10px;
        }

        .skeleton__links{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
        margin-bottom: 10px;
      }

      .skeleton__links--item{
        margin-top: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 1.8rem;
        border: ${theme.textColor} solid 1px;
        padding: 2px 5px;
        border-radius: 10px;
        width: 140px;
        height: 30px;
        background: ${theme.textColor};
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
      @media (max-width: 767px) {
        .skeleton{
          min-width: 232px;
          max-width: 232px;
        }
      }
      @media (min-width: 768px) {
        .skeleton__links{
          flex-direction: row;
        }
    }
      `}</style>
    </>
  )
}

export { CertificateItemSkeleton }
