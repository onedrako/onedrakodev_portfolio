import { ThemeContext } from '@contexts/ThemeContext'
import { ElementSelectedOnTabNav } from '@customTypes/types'
import { useRouter } from 'next/router'
import { useContext, useEffect, useRef, useState } from 'react'
import { NavigationListItems } from './NavigationListItems'

const initialState = {
  home: false,
  portfolio: false,
  certifications: false,
  personal: false,
  about: false
}

const Navigation = () => {
  const [selectedNavigation, setSelectedNavigation] = useState<ElementSelectedOnTabNav>(initialState)

  const route = useRouter()
  const navigator = useRef<HTMLDivElement>(null)

  const { theme } = useContext(ThemeContext)

  const handleSelectedNavigation = () => {
    let actualRoute: string = route.pathname.split('/')[1]
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
      <nav ref={navigator} className='navBar'>
        <ul>
          <NavigationListItems selectedNavigation={selectedNavigation} action={() => {}}/>
        </ul>
      </nav>

      <style jsx>{`
        .navBar {
          display: flex;
          width: 100vw;
          padding: 10px;
          background-color: ${theme.backgroundColor};
          border-bottom: 3px solid ${theme.modalBackgroundColor};        
        }
        ul {
          display: flex;
          width: 100%;
          gap: 10px;
          justify-content: end;
        }
      `}</style>
    </>
  )
}

export default Navigation
