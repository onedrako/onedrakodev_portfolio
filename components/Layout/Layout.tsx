import { useContext, ReactNode } from 'react'

import { ThemeContext } from '@contexts/ThemeContext'
import Header from '../Header/Header'

const Layout = ({ children, conditionForStyle }: {children: ReactNode, conditionForStyle: boolean }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <Header />
      <div className="divisor"></div>
      {children}

      <style jsx global>{`
        body {
          background-color: ${theme.backgroundColor};
          color: ${theme.textColor};
          font-size: 4rem;
        }
        .divisor{
          width: 100%;
          padding-top: 75px;
          grid-area: div;
        }
      `}
      </style>
    </>

  )
}

export { Layout }
