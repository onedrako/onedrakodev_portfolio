import { ElementSelectedOnTabNav } from '@customTypes/types'
import Link from 'next/link'
import { VscHome } from 'react-icons/vsc'
import { BiBriefcase, BiUser } from 'react-icons/bi'
import { TbCertificate } from 'react-icons/tb'
import { CgNotes } from 'react-icons/cg'

type Props = {
  selectedNavigation: ElementSelectedOnTabNav,
  action?: () => void
}

// This component needs a ul parent element, in that defined row or column for display
const NavigationListItems = ({ selectedNavigation, action }: Props) => {
  let callback
  if (action) {
    callback = action
  }
  return (
    <>
        <li className={'SideNavigation__li vertical'} onClick={selectedNavigation.home ? () => null : callback} >
          <div className='SideNavigation__li--link'>
            <VscHome/>
            <Link href="/"><a>Home</a></Link>
          </div>
          {selectedNavigation.home && <hr className="bottomLineInLinkActive" />}
        </li>
        <li className={'SideNavigation__li vertical inactive'} onClick={selectedNavigation.portfolio ? () => null : callback}>
          <div className='SideNavigation__li--link'>
            <BiBriefcase/>
            <Link href="/#"><a>Portfolio</a></Link>
          </div>
          {selectedNavigation.portfolio && <hr className="bottomLineInLinkActive" />}
        </li>

        <li className={'SideNavigation__li vertical'} onClick={selectedNavigation.certifications ? () => null : callback}>
          <div className='SideNavigation__li--link'>
            <TbCertificate/>
            <Link href="/certifications">Certifications</Link>
          </div>
          {selectedNavigation.certifications && <hr className="bottomLineInLinkActive" />}
        </li>

        <li className={'SideNavigation__li vertical inactive'} onClick={selectedNavigation.personal ? () => null : callback}>
          <div className='SideNavigation__li--link'>
            <CgNotes/>
            <Link href="#">Personal</Link>
            </div>
          {selectedNavigation.personal && <hr className="bottomLineInLinkActive" />}
        </li>

        <li className={'SideNavigation__li vertical inactive'} onClick={selectedNavigation.about ? () => null : callback}>
          <div className='SideNavigation__li--link'>
            <BiUser/>
            <Link href="#">About Me</Link>
            </div>
          {selectedNavigation.about && <hr className="bottomLineInLinkActive" />}
        </li>

      <style jsx>{`
        .SideNavigation__li {
              width: 70%;
              height: 35px;
              font-size: 4rem;
              display: flex;
              flex-direction: column;
            
            }
            
            .SideNavigation__li--link{
              width: 100%;
              display: flex;
              justify-content: start;
              align-items: center;
              gap: 5px;
              font-size: 4rem;
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
            .inactive{
              opacity: 0.3;
            }

            @keyframes stretchBorderLineInactive {
              from {
                width: 100%;
              }
              to {
                width: 0%;
              } 
            }

            @keyframes stretchBorderLineActive {
            from {
              width: 0%;
            }
            to {
              width: 100%;
            } 
          }

          @media (min-width: 768px) {
            .SideNavigation__li {
              width: 100%;
              justify-content: center;
              align-items: center;
              text-align: center;
              margin-right: 10px;
              width: fit-content;
              font-size: 3.5rem;
            }
            .SideNavigation__li--link{
              font-size: 3.5rem;
              justify-content: center;
              align-items: center;
            }
          }
        `}</style>
        </>
  )
}

export { NavigationListItems }
