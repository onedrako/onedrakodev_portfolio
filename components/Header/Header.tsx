import { useState } from 'react'

import { SideNavigation } from './SideNavigations'

import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
  const [isTheMenuOpen, setIsTheMenuOpen] = useState<boolean>(false)

  return (
    <>
      <header>
        <nav>
          <GiHamburgerMenu color="#fff" size={25} />
          <SideNavigation />

        </nav>
      </header>
      <style jsx>{`
        nav {
          padding: 15px;
          position: relative;
        }


      `}</style>
    </>
  )
}

export default Header
