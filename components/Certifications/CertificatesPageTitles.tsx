import React, { ReactNode } from 'react'

const CertificatesPageTitles = ({ title, children }: {title: string, children: ReactNode}) => {
  return (
    <>
      <section className={`${title}-section`}>
        <h2 className={`${title}__title`}>{title}</h2>
        {children}
      </section>
      <style jsx>{`
        .schools{
          padding: 15px 15px 0px 15px;
        }
        .schools__title{
          font-size: 2.2rem;
          border-bottom: 1px solid #ccc;
        }
      `}</style>
    </>
  )
}

export default CertificatesPageTitles
