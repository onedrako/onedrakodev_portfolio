// Components
import { Profile } from './Profile'
import { Description } from './Description'
import { Technologies } from './Technologies'
import { Projects } from './Projects'
import { SoftSkills } from './SoftSkills'
import { TimeLineContainer } from './TimeLineContainer'

const HomeComponent = () => {
  return (
      <main>
        <Profile />
        <Description />
        <Technologies/>
        <Projects/>
        <SoftSkills/>
        <TimeLineContainer title={'Laboral Experience'} orientation={'right'} endPoint={'/api/laboral'} />
        <TimeLineContainer title={'Education'} orientation={'left'} endPoint={'/api/education'} redirectTo="/"/>
      </main>
  )
}

export { HomeComponent }
