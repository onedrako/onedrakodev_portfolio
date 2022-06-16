import { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const SearchCertificate = () => {
  const { theme } = useContext(ThemeContext)
  const [searchElement, setSearchElement] = useState<string>('')

  return (
    <>
      <section className="searcher">
        <h2 className="searcher__title">Search</h2>
        <input type="text" name="certificate-searcher" placeholder="Type a technology or course"/>
        {/* // results */}
      </section>
      <style jsx>{`
        .searcher{
          padding: 15px;
        }
        .searcher__title{
          font-size: 1.8rem;
        }
        .searcher input{
          margin-top: 10px;
          width: 100%;
          height: 35px;
          background-color: ${theme.backgroundColor};
          border: 1px solid ${theme.activeElementColor};
          border-radius: 5px;
          padding: 0px 10px;
          font-size: 1.5rem;
          color: ${theme.textColor};
      `}</style>
    </>
  )
}

export { SearchCertificate }
