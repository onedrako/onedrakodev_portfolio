import { useContext, ReactNode } from 'react'
import { useRouter } from 'next/router'

import { ThemeContext } from '@contexts/ThemeContext'
import Header from '../Header/Header'

const Layout = ({ children, conditionForStyle }: {children: ReactNode, conditionForStyle: boolean }) => {
  const { theme } = useContext(ThemeContext)
  const route = useRouter()

  let actualRoute = route.pathname.split('/')[1]

  if (actualRoute === '') {
    actualRoute = 'home'
  }

  return (
    <>
      <Header actualRoute={actualRoute}/>
      {children}

      <style jsx global>{`
        body {
          background-color: ${theme.backgroundColor};
          color: ${theme.textColor};
          font-size: 4rem;
        }
      `}
      </style>
    </>

  )
}

export { Layout }
