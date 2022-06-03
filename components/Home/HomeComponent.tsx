// Components
import { Profile } from './Profile'
import { Description } from './Description'
import { Technologies } from './Technologies'
import { Projects } from './Projects'
import { SoftSkills } from './SoftSkills'
import { LaboralExperience } from './Experience'

const HomeComponent = () => {
  return (
      <main>
        <Profile />
        <Description />
        <Technologies/>
        <Projects/>
        <SoftSkills/>
        <LaboralExperience/>
      </main>
  )
}

export { HomeComponent }
