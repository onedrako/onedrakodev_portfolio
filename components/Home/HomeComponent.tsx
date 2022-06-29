// Components
import { Profile } from './Profile'
import { Technologies } from './Technologies'
import { Projects } from './Projects'
import { SoftSkills } from './SoftSkills'
import { TimeLineContainer } from './TimeLineContainer'
import { educationCategory, jobCategory } from '@customTypes/backendTypes'

const HomeComponent = () => {
  const laboralCategories: jobCategory[] = ['Technology', 'Business', 'Investments']
  const educationCategories: educationCategory[] = ['Languages', 'Technology', 'Business', 'Others']
  return (
    <>
      <main>
        <div className="divisor"></div>
        <Profile />
        <Technologies/>
        <Projects/>
        <SoftSkills/>
        <TimeLineContainer title={'Laboral Experience'} orientation={'left'} endPoint={'/api/laboral'} categories={laboralCategories} />
        <TimeLineContainer title={'Education'} orientation={'right'} endPoint={'/api/education'} categories={educationCategories} redirectTo="/" />
      </main>
      <style jsx>{`
        main {
          /* max-width: 99%; */
          margin: 0 auto;
          /* overflow-x: hidden; */
        }


        @media (min-width: 1440px) {
          main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-areas:
          "div div" 
          "profile profile"
          "technologies softSkills"
          "projects projects"
          "right left";
          padding: 15px;
          gap: 20px;
        }
      }
      `}</style>
    </>
  )
}

export { HomeComponent }
