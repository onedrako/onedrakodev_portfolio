// Components
import { Profile } from './Profile'
import { Description } from './Description'
import { Technologies } from './Technologies'
import { Projects } from './Projects'
import { SoftSkills } from './SoftSkills'

const HomeComponent = () => {
  return (
      <main>
        <Profile />
        <Description />
        <Technologies/>
        <Projects/>
        <SoftSkills/>
      </main>
  )
}

export { HomeComponent }
