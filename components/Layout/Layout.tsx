import { ReactNode } from 'react'
import Header from '../Header/Header'

const Layout = ({ children }: {children: ReactNode}): ReactNode => {
  return (
    <>
      <Header/>
      {children}
    </>
  )
}

export { Layout }
