import { useContext, ReactNode } from 'react'
import { ThemeContext } from '@contexts/ThemeContext'
import Header from '../Header/Header'

const Layout = ({ children }: {children: ReactNode}) => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <Header/>
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
