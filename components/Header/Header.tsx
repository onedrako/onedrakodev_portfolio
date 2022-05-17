import { useState } from 'react'

import { SideNavigation } from './SideNavigations'

import { useRouter } from 'next/router'

import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'

import { ElementSelectedOnTabNav } from '@customTypes/types'

const Header = ({}) => {
  const [isTheMenuOpen, setIsTheMenuOpen] = useState<boolean>(false)
  const [selectedNavigation, setSelectedNavigation] = useState<ElementSelectedOnTabNav>({
    home: true,
    portfolio: false,
    certifications: false,
    personal: false,
    about: false
  })

  const handleSelectedNavigation = () => {
    const navigationObject: ElementSelectedOnTabNav = { ...selectedNavigation }

    const keys = Object.keys(navigationObject) as string[]
    keys.forEach(key => {
      if (key === actualRoute) {
        navigationObject[key] = true
      } else {
        navigationObject[key] = false
      }
    })
    setSelectedNavigation(navigationObject)
  }

  return (
    <>
      <header>
        <nav>
          <GiHamburgerMenu color="#fff" size={25} />
          <SideNavigation>
            <li className={'SideNavigation__li'} onClick={():void => handleSelectedNavigation()} style={
              {
                // color: `${selectedNavigation.home ? 'blue' : '#ffffff'}`,
                borderColor: `${selectedNavigation.home ? 'blue' : '#ffffff'}`
              }}>
              <Link href="/">Home</Link>
            </li>
            <li className={'SideNavigation__li'} onClick={():void => handleSelectedNavigation()} style={
              {
                // color: `${selectedNavigation.home ? 'blue' : '#ffffff'}`,
                borderColor: `${selectedNavigation.portfolio ? 'blue' : '#ffffff'}`
              }}>
              <Link href="portfolio">Portfolio</Link>
            </li>

            <li className={'SideNavigation__li'} onClick={(): Promise<void> => handleSelectedNavigation()}>
              <Link href="certifications">Certifications</Link>
            </li>

            <li className={'SideNavigation__li'} onClick={(): Promise<void> => handleSelectedNavigation()}>
              <Link href="personal">Personal</Link>
            </li>

            <li className={'SideNavigation__li'} onClick={(): Promise<void> => handleSelectedNavigation()}>
              <Link href="about">About Me</Link>
            </li>
          </SideNavigation>
        </nav>
      </header>
      <style jsx>{`
        nav {
          padding: 15px;
          position: relative;
        }
        .SideNavigation__li {
          width: 60%;
          font-size: 4rem;
          display: flex;
          align-items: center;
          border-bottom: 4px solid #fff;
        }

      `}</style>
    </>
  )
}

export default Header
