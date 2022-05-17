import { useContext, ReactNode } from 'react'
import { ThemeContext } from '@contexts/ThemeContext'

const SideNavigation = ({ children }: {children: ReactNode}) => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <div className='SideNavigation'>
        <ul>
          {children}
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
