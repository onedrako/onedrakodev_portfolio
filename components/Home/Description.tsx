import React from 'react'

const Description = () => {
  return (
    <>
      <section className='short-about-me'>
        <h2>About Me</h2>
        <hr />
        <p>{'I´m a Frontend and Backend (FullStack) JavaScript Developer.'}</p>
        <p>{'Also I´m a bachelor on administration by UNAM (Universidad Autónoma de México).'}</p>
        <p>{'Started to learn about programming on early 2021, I´m a self-taught programmer.'}</p>
        <p>{'I starter with HTML, CSS and JavaScript for frontend, nowadays programming with React Js, Next Js for frontend and node Js with Express, ORM Sequelize, and PostgreSQL for backend.'}</p>

        <p>{'I love to program and create projects and keep learning about new technologies to resolve new and different problems.'}</p>

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
