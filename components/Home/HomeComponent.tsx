// Components
import { Profile } from './Profile'
import { Description } from './Description'
import { Technologies } from './Technologies'
import { Projects } from './Projects'

const HomeComponent = () => {
  return (
      <main>
        <Profile />
        <Description />
        <Technologies/>
        <Projects/>
      </main>
  )
}

export { HomeComponent }
