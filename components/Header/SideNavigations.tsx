import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '@contexts/ThemeContext'
import { ElementSelectedOnTabNav } from '@customTypes/types'

import { useRouter } from 'next/router'
import Link from 'next/link'

const initialState = {
  home: false,
  portfolio: false,
  certifications: false,
  personal: false,
  about: false
}

const SideNavigation = () => {
  const [selectedNavigation, setSelectedNavigation] = useState<ElementSelectedOnTabNav>(initialState)

  const route = useRouter()

  const { theme } = useContext(ThemeContext)

  const handleSelectedNavigation = () => {
    let actualRoute = route.pathname.split('/')[1]
    if (actualRoute === '') {
      actualRoute = 'home'
    }
    const navigationObject: ElementSelectedOnTabNav = { ...selectedNavigation }

    const keys = Object.keys(navigationObject) as string[]
    keys.forEach(key => {
      if (key === actualRoute) {
        navigationObject[key as keyof ElementSelectedOnTabNav] = true
      } else {
        navigationObject[key as keyof ElementSelectedOnTabNav] = false
      }
    })
    setSelectedNavigation(navigationObject)
  }

  useEffect(() => {
    handleSelectedNavigation()
  }, [route.pathname])

  return (
    <>
      <div className='SideNavigation'>
        <ul>
        <li className={'SideNavigation__li'} style={
              {
                // color: `${selectedNavigation.home ? 'blue' : '#ffffff'}`,
                borderColor: `${selectedNavigation.home ? 'blue' : '#ffffff'}`
              }}>
              <Link href="/"><a>Home</a></Link>
            </li>
            <li className={'SideNavigation__li'} style={
              {
                // color: `${selectedNavigation.home ? 'blue' : '#ffffff'}`,
                borderColor: `${selectedNavigation.portfolio ? 'blue' : '#ffffff'}`
              }}>
              <Link href="/portfolio"><a>Portfolio</a></Link>
            </li>

            <li className={'SideNavigation__li'} style={
              {
                // color: `${selectedNavigation.home ? 'blue' : '#ffffff'}`,
                borderColor: `${selectedNavigation.certifications ? 'blue' : '#ffffff'}`
              }}>
              <Link href="certifications">Certifications</Link>
            </li>

            <li className={'SideNavigation__li'} style={
              {
                // color: `${selectedNavigation.home ? 'blue' : '#ffffff'}`,
                borderColor: `${selectedNavigation.personal ? 'blue' : '#ffffff'}`
              }}>
              <Link href="personal">Personal</Link>
            </li>

            <li className={'SideNavigation__li'} style={
              {
                // color: `${selectedNavigation.home ? 'blue' : '#ffffff'}`,
                borderColor: `${selectedNavigation.about ? 'blue' : '#ffffff'}`
              }}>
              <Link href="about">About Me</Link>
            </li>
        </ul>
      </div>
      <style jsx>{`
        .SideNavigation {
          height: 300px;
          width:  90%;
          position: absolute;
          top: 15px;
          background: ${theme.modalBackgroundColor};
          padding: 25px;
        }
        .SideNavigation__li {
          width: 60%;
          font-size: 4rem;
          display: flex;
          align-items: center;
          border-bottom: 4px solid #fff;
        }
        ul {
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
      `}</style>
    </>
  )
}

export { SideNavigation }
