// Components
import { Profile } from './Profile'
import { Description } from './Description'
import { Technologies } from './Technologies'
import { Projects } from './Projects'

const HomeComponent = () => {
  return (
    <>
      <Profile />
      <Description />
      <Technologies/>
      <Projects/>
    </>
  )
}

export { HomeComponent }
