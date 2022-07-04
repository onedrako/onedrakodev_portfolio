// dependencies
import Image from 'next/image'
import { useContext } from 'react'

// components
import { Description } from './Description'

// contexts
import { ThemeContext } from '@contexts/ThemeContext'

const Profile = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <section className='profile-section'>
        <div className='profile-section__container'>

          <div className='profile-section__container--image'>
            <Image
              src="https://pbs.twimg.com/profile_images/1542017404426928128/mexU6Mdd_400x400.jpg"
              alt="profile-image"
              width={250}
              height={250}
              objectFit="fill"
              style={{ margin: '0 auto', borderRadius: '50%' }}
              />
          </div>

          <ul className="profile-section__list-of-social-Networks">
            <h2>Social Networks</h2>
            <li>
              <a href="https://www.linkedin.com/in/gabrielhvaldez/?locale=en_US" target="_blank" rel="noreferrer noopener" >
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                  alt="linkedIn-logo"
                  width={40}
                  height={40}
                  objectFit="fill"
                  />
                <h3 className='social-network-name' >LinkedIn</h3>
              </a>
            </li>
            <li>
              <a href="https://github.com/onedrako" target="_blank" rel="noreferrer noopener">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
                  alt="github-logo"
                  width={40}
                  height={40}
                  objectFit="fill"
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
                  width={40}
                  height={40}
                  />
                <h3 className='social-network-name' >Twitter</h3>
              </a>
            </li>
          </ul>

          <div className='profile-section__container--titles' >
            <h1>Gabriel Hernández Valdez</h1>
            <hr />
            <h2>{'< OneDrako Dev />'}</h2>
            <h2>{'< FullStack JavaScript Developer />'}</h2>
          </div>
          <Description/>
        </div>

      </section>

      <style jsx>{`
        .profile-section {
          margin : 0 auto;
          width: 100%;
          grid-area: profile;
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
          padding: 3px;
        }

        .profile-section__container--titles{
          margin: 35px auto;
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

        .profile-section__list-of-social-Networks h2{
            display: none;
          }

        hr {
          max-width: 500px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .profile-section{
            border-radius: 15px;
            /* padding-top: 80px; */
            max-width: 800px;
            margin: 0 auto;
          }
          
          .profile-section__container{
            max-width: 650px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-areas: 'photo titles' 
                                'about social'; 
            /* grid-template-rows: 1fr 1fr 1fr; */
            padding: 20px;
            gap: 10px;
          }

          .profile-section__container--image{
            grid-area: photo;
            place-self: center;
            width: 250px;
            height: 250px;
          }

          .profile-section__container--titles{
            grid-area: about;
            border: 1px solid ${theme.modalBackgroundColor};
            border-radius: 15px;
          }

          .profile-section__list-of-social-Networks{
            grid-area: social;
            place-self: center;
            margin: 0 auto;
            border: 1px solid ${theme.modalBackgroundColor};
            border-radius: 15px;
            height: 75%;
            width: 100%;
            align-items: center;
            /* display: grid;
            grid-template-columns: 1fr 1fr ; */
            padding: 0 20px;
          }
          .profile-section__list-of-social-Networks li{
            margin: 0 auto;
          }
          .profile-section__list-of-social-Networks h2{
            font-size: 2.2rem;
            display: block;
          }
        }
        @media (min-width: 800px) {
          .profile-section{
            border: 1px solid ${theme.activeElementColor};
          }
        } 

      `}</style>
    </>

  )
}

export { Profile }
