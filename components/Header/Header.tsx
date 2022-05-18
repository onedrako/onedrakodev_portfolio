import { RefObject, useState } from 'react'

import { SideNavigation } from './SideNavigations'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
  const [isTheMenuOpen, setIsTheMenuOpen] = useState<boolean>(false)

  const handleSideMenuClick = (action?: string, node?: RefObject<HTMLDivElement>): void => {
    if (action === 'open') {
      setIsTheMenuOpen(!isTheMenuOpen)
      return
    }
    const actualNode = node
    if (actualNode) {
      actualNode.current.classList.remove('showSideNavigation')
      actualNode.current.classList.add('hideSideNavigation')
    }

    setTimeout(() => {
      setIsTheMenuOpen(!isTheMenuOpen)
    }, 1000)
  }

  return (
    <>
      <header>
        <nav>
          <GiHamburgerMenu color="#fff" size={25} onClick={() => handleSideMenuClick('open')} />
          {isTheMenuOpen && <SideNavigation closeMenu={handleSideMenuClick} />}

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
