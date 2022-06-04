import React from 'react'

const Description = () => {
  return (
    <>
      <section className='short-about-me'>
        <h2>About Me</h2>
        <hr />
        <p>{'I´m a Frontend and Backend (FullStack) JavaScript Developer.'}</p>
        <p>{'Also I´m a bachelor on administration by UNAM (Universidad Autónoma de México).'}</p>
      </section>

      <style jsx>{`
        .short-about-me {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 20px;
        }

        .short-about-me h2 {
          font-size: 2.2rem;
          margin: 10px auto;
        }

        .short-about-me hr {
          width: 50%;
        }

        .short-about-me p {
          font-size: 1.6rem;
          margin: 10px 0px 0px 0px;
        }
      `}</style>
    </>
  )
}

export { Description }
