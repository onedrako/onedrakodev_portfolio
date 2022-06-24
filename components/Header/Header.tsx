import { RefObject, useEffect, useState } from 'react'

import { SideNavigation } from './SideNavigation'
import { GiHamburgerMenu } from 'react-icons/gi'
import Navigation from './Navigation'

const Header = () => {
  const [isTheMenuOpen, setIsTheMenuOpen] = useState<boolean>(false)
  const [headerViewWidth, setHeaderViewWidth] = useState<number>(10)
  const [sideBarIsVisible, setSideBarIsVisible] = useState<boolean>(false)

  const handleSideMenuClick = (action?: string, node?: RefObject<HTMLDivElement>): void => {
    if (action === 'open') {
      setHeaderViewWidth(100)
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
        setHeaderViewWidth(10)
      }, 1000)
    }
  }

  const handleSideBarVisible = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) {
        setSideBarIsVisible(true)
      } else {
        setSideBarIsVisible(false)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleSideBarVisible)
  }, [])

  return (
    <>
      <header className='header'>
            { sideBarIsVisible
              ? <>
                < nav>
                  <GiHamburgerMenu color="#fff" size={25} onClick={() => handleSideMenuClick('open')} />
                  {isTheMenuOpen && <SideNavigation closeMenu={handleSideMenuClick} />}
                </nav>
              </>
              : <Navigation/>
            }
      </header>
      <style jsx>{`
        .header {
          position: fixed;
          width: ${`${headerViewWidth}vw`};
          z-index: 2;
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
