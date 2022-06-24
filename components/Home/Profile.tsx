import Image from 'next/image'
import React from 'react'

const Profile = () => {
  return (
    <>
      <section className='profile-section'>
        <div className='profile-section__container'>

          <div className='profile-section__container--image'>
            <Image
              src="https://pbs.twimg.com/profile_images/1097241453863014400/Z9tN1MXZ_400x400.png"
              alt="profile-image"
              width={135}
              height={135}
              style={{ margin: '0 auto', borderRadius: '50%' }}
              />
          </div>

          <ul className="profile-section__list-of-social-Networks">
            <li>
              <a href="https://www.linkedin.com/in/gabrielhvaldez" target="_blank" rel="noreferrer noopener" >
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                  alt="linkedIn-logo"
                  width={35}
                  height={35}
                  />
                <h3 className='social-network-name' >LinkedIn</h3>
              </a>
            </li>
            <li>
              <a href="https://github.com/onedrako" target="_blank" rel="noreferrer noopener">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
                  alt="github-logo"
                  width={35}
                  height={35}
                  style={ { background: '#ffffff', borderRadius: '35px' } }
                  />
                <h3 className='social-network-name'>Github</h3>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/OneDrako" target="_blank" rel="noreferrer noopener">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                  alt="twitter-logo"
                  width={35}
                  height={35}
                  />
                <h3 className='social-network-name' >Twitter</h3>
              </a>
            </li>
          </ul>

          <div className='profile-section__container--titles' >
            <h1>{'Gabriel Hernández Valdez'}</h1>
            <hr />
            <h2>{'< OneDrako Dev />'}</h2>
            <h2>{'< FullStack JavaScript Developer />'}</h2>
          </div>
        </div>

      </section>

      <style jsx>{`
        .profile-section {
          padding-top: 60px;
        }

        .profile-section__container {
          display: flex;
          flex-direction: column;
          margin-bottom: 50px;
        }

        .profile-section__container--image{
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          width: 140px;
          height: 140px;
          background: #ffffff;
          border-radius: 50%;
        }

        .profile-section__container--titles{
          margin: 5px auto;
          width: 100%;
          padding: 0 20px;
        }

        .profile-section__container--titles h1{
          font-size: 2.3rem;
          width: 100%;
          margin: 10px auto;
          text-align: center;
        }

        .profile-section__container--titles h2{
          font-size: 2rem;
          width: 100%;
          margin: 10px auto;
          text-align: center;
        }

        .profile-section__list-of-social-Networks {
          padding: 0;
          list-style: none;
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 25px;
        }
        a{
          display: flex;
          width: 65px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .social-network-name{
          font-size: 1.3rem;
          margin-top: 5px;
        }

        @media (min-width: 768px) {
          .profile-section{
            padding-top: 80px;
          }
        }
      `}</style>
    </>

  )
}

export { Profile }
