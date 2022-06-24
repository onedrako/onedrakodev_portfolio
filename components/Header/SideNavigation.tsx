import { RefObject, useContext, useEffect, useRef, useState } from 'react'
import { ThemeContext } from '@contexts/ThemeContext'
import { ElementSelectedOnTabNav } from '@customTypes/types'

import { useRouter } from 'next/router'

import { AiFillCloseCircle } from 'react-icons/ai'

import styles from '../../styles/reactIconsStyles.module.css'
import { NavigationListItems } from './NavigationListItems'

const initialState = {
  home: false,
  portfolio: false,
  certifications: false,
  personal: false,
  about: false
}

const SideNavigation = ({ closeMenu }: { closeMenu: (action?: string, node?:RefObject<HTMLDivElement>) => void }) => {
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

  const action = () => {
    closeMenu('close', navigator)
  }

  useEffect(() => {
    handleSelectedNavigation()
  }, [route.pathname])

  return (
    <>
      <div ref={navigator} className='SideNavigation showSideNavigation'>
        <AiFillCloseCircle className={styles.closeIcon} color="#ffffff" size={25} onClick={() => action()} />
        <ul>
          <NavigationListItems selectedNavigation={selectedNavigation} action={action} />
        </ul>
      </div>

      <style jsx>{`
        .SideNavigation {
          height: 300px;
          width:  90%;
          position: absolute;
          top: 15px;
          left: -300px;
          background: ${theme.modalBackgroundColor};
          padding: 25px;
          z-index: 3;
          border-bottom-right-radius: 25px;
        }

        .showSideNavigation{
          animation-name: showMenu;
          animation-duration: 1s;
          animation-fill-mode: forwards;
        }

        .hideSideNavigation{
          animation-name: hideMenu;
          animation-duration: 1s;
          animation-fill-mode: forwards;
        }

        ul {
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        @keyframes showMenu {
          from {
            left: -300px;
          }
          to {
            left: 0px;
          } 
        }

        @keyframes hideMenu {
          from {
            left: 0px;
          }
          to {
            left: -300px;
          } 
        }
      `}</style>
    </>
  )
}

export { SideNavigation }
