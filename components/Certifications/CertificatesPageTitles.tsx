import React, { ReactNode } from 'react'

const CertificatesPageTitles = ({ title, children }: {title: string, children: ReactNode}) => {
  return (
    <>
      <section className="section">
        <h2 className="title">{title}</h2>
        {children}
      </section>

      <style jsx>{`
        .section{
          margin-top: 30px;
          padding: 15px 15px 0px 15px;
          position: relative;
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
