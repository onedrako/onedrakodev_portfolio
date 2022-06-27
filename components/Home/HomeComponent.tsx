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
        <div className="divisor"style={{ paddingTop: '75px', gridArea: 'div' }}></div>
          <Profile />
          <Technologies/>
          <Projects/>
          <SoftSkills/>
          <TimeLineContainer title={'Laboral Experience'} orientation={'left'} endPoint={'/api/laboral'} categories={laboralCategories} />
          <TimeLineContainer title={'Education'} orientation={'right'} endPoint={'/api/education'} categories={educationCategories} redirectTo="/" />
      </main>
      <style jsx>{`
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
          gap: 20px;
          padding: 10px
        }

      }
      `}</style>
    </>
  )
}

export { HomeComponent }
