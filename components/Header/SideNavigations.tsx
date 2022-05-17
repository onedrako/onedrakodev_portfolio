import { useContext, useEffect, useRef, useState } from 'react'
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
          <li className={'SideNavigation__li'} >
            <Link href="/"><a>Home</a></Link>
            {selectedNavigation.home && <hr className="bottomLineInLinkActive" />}
          </li>
          <li className={'SideNavigation__li'}>
            <Link href="/portfolio"><a>Portfolio</a></Link>
            {selectedNavigation.portfolio && <hr className="bottomLineInLinkActive" />}
          </li>

          <li className={'SideNavigation__li'}>
            <Link href="certifications">Certifications</Link>
            {selectedNavigation.certifications && <hr className="bottomLineInLinkActive" />}
          </li>

          <li className={'SideNavigation__li'}>
            <Link href="personal">Personal</Link>
            {selectedNavigation.personal && <hr className="bottomLineInLinkActive" />}
          </li>

          <li className={'SideNavigation__li'}>
            <Link href="about">About Me</Link>
            {selectedNavigation.about && <hr className="bottomLineInLinkActive" />}
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
          height: 35px;
          font-size: 4rem;
          display: flex;
          flex-direction: column;

        }
        .bottomLineInLinkActive {
          height: 5px;
          width: 0%;
          background: #fff;
          margin: 0px;
          animation-name: stretchBorderLineActive;
          animation-duration: 1.5s;
          animation-fill-mode: forwards;
        }
        .bottomLineInLinkInactive {
          height: 5px;
          width: 100%;
          background: #fff;
          margin: 0px;
          animation-name: stretchBorderLineInactive;
          animation-duration: 1.5s;
          animation-fill-mode: forwards;
        }
        

        
        ul {
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        @keyframes stretchBorderLineActive {
            from {
              width: 0%;
            }
            to {
              width: 100%;
            } 
          }
        
        @keyframes stretchBorderLineInactive {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          } 
        }
      `}</style>
    </>
  )
}

export { SideNavigation }
