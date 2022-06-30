import { CategoryColorsForTimeLine } from '@utils/constants'
import { educationCategory, jobCategory } from '@customTypes/backendTypes'
import { ThemeContext } from '@contexts/ThemeContext'
import { useContext } from 'react'

interface Props<T> {
  categories: T[]
  title: string
}

type typeData = educationCategory | jobCategory

const CategoryOptions = <T extends typeData>({ categories, title }: Props<T>) => {
  const defineColorPoint = (category: string) => {
    return CategoryColorsForTimeLine[category as keyof typeof CategoryColorsForTimeLine]
  }
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <div className='categories-container'>
      {categories.map((category, index) =>
        <div key={`${title}-${index}`} className="categories">
          <span className='categories-circle' style={{ border: `2px solid ${defineColorPoint(category)}` }}></span>
          <p className='categories-category'>{category}</p>
        </div>
      )}
      </div>
      <style jsx>{`
        .categories {
          display: flex;
          align-items: center;
          margin: 10px 0;
          gap: 10px;
          padding: 0 0 0 8px;
        }
        .categories-circle {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid #ccc;
        }
        .categories-category {
          font-size: 1.5rem;
        }

        @media (min-width: 500px) {
          .categories-container {
          display: flex;
          gap: 10px;
          border: 1px solid ${theme.modalBackgroundColor};
          margin: 10px 0;
          border-radius: 10px;
          padding: 0 10px;
          width: fit-content;
          }
        }
      `}</style>
    </>
  )
}

export { CategoryOptions }
