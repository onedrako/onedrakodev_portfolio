import { ThemeContext } from '@contexts/ThemeContext'
import { useContext } from 'react'

const CertificateItemSkeleton = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <article className='skeleton'>
        <h3 className='skeleton__title'>Curso realizado por el buen Gabito</h3>
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
          opacity: 0.3;
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
