import { RefObject, useState } from 'react'

import { SideNavigation } from './SideNavigation'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
  const [isTheMenuOpen, setIsTheMenuOpen] = useState<boolean>(false)

  const handleSideMenuClick = (action?: string, node?: RefObject<HTMLDivElement>): void => {
    if (action === 'open') {
      setIsTheMenuOpen(!isTheMenuOpen)
      return
    }
    if (node) {
      const actualNode: RefObject<HTMLDivElement> = node
      if (actualNode !== null && actualNode.current !== null) {
        actualNode.current.classList.remove('showSideNavigation')
        actualNode.current.classList.add('hideSideNavigation')
      }

      setTimeout(() => {
        setIsTheMenuOpen(!isTheMenuOpen)
      }, 1000)
    }
  }

  return (
    <>
      <header className='header'>
        <nav>
          <GiHamburgerMenu color="#fff" size={25} onClick={() => handleSideMenuClick('open')} />
          {isTheMenuOpen && <SideNavigation closeMenu={handleSideMenuClick} />}

        </nav>
      </header>
      <style jsx>{`
        .header {
          position: fixed;
          width: 100vw;
          z-index: 1;
        }

        nav {
          padding: 15px;
          position: relative;
        }


      `}</style>
    </>
  )
}

export default Header
