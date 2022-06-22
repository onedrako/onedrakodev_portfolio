import { ThemeContext } from '@contexts/ThemeContext'
import React, { ReactNode, useContext } from 'react'

const CertificatesPageTitles = ({ title, children }: {title: string, children: ReactNode}) => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <section className="section">
        <h2 className="title">{title}</h2>
        {children}
      </section>

      <style jsx>{`
        .section{
          margin-top: 30px;
          padding: 15px;
          position: relative;
          border: 1px solid ${theme.modalBackgroundColor};
          border-radius: 10px;
        }
        .title{
          font-size: 2.2rem;
          border-bottom: 1px solid #ccc;
        }
        @media (min-width: 768px){
          .title{
            font-size: 3rem;
          }
        }
      `}</style>
    </>
  )
}

export default CertificatesPageTitles
