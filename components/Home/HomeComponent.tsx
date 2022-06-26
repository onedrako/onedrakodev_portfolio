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
      <main>
        <div style={{ paddingTop: '75px' }}></div>
        <Profile />
        <Technologies/>
        <Projects/>
        <SoftSkills/>
        <TimeLineContainer title={'Laboral Experience'} orientation={'right'} endPoint={'/api/laboral'} categories={laboralCategories} />
        <TimeLineContainer title={'Education'} orientation={'left'} endPoint={'/api/education'} categories={educationCategories} redirectTo="/" />
      </main>
  )
}

export { HomeComponent }
