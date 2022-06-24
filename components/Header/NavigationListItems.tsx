import { ElementSelectedOnTabNav } from '@customTypes/types'
import Link from 'next/link'

type Props = {
  selectedNavigation: ElementSelectedOnTabNav,
  action: () => void
}

const NavigationListItems = ({ selectedNavigation, action }: Props) => {
  return (
    <>
      <ul>
        <li className={'SideNavigation__li'} onClick={selectedNavigation.home ? () => null : () => action()} >
          <Link href="/"><a>Home</a></Link>
          {selectedNavigation.home && <hr className="bottomLineInLinkActive" />}
        </li>
        <li className={'SideNavigation__li'} onClick={selectedNavigation.portfolio ? () => null : () => action()}>
          <Link href="/portfolio"><a>Portfolio</a></Link>
          {selectedNavigation.portfolio && <hr className="bottomLineInLinkActive" />}
        </li>

        <li className={'SideNavigation__li'} onClick={selectedNavigation.certifications ? () => null : () => action()}>
          <Link href="certifications">Certifications</Link>
          {selectedNavigation.certifications && <hr className="bottomLineInLinkActive" />}
        </li>

        <li className={'SideNavigation__li'} onClick={selectedNavigation.personal ? () => null : () => action()}>
          <Link href="personal">Personal</Link>
          {selectedNavigation.personal && <hr className="bottomLineInLinkActive" />}
        </li>

        <li className={'SideNavigation__li'} onClick={selectedNavigation.about ? () => null : () => action()}>
          <Link href="about">About Me</Link>
          {selectedNavigation.about && <hr className="bottomLineInLinkActive" />}
        </li>
      </ul>
      <style jsx>{`
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
            .closeIcon {
              position: absolute;
            }

            ul {
              padding: 0;
              display: flex;
              flex-direction: column;
              gap: 15px;
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

export { NavigationListItems }
