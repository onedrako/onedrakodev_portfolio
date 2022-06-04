import { CategoryColorsForTimeLine } from '@utils/constants'
import { educationCategory, jobCategory } from '@customTypes/backendTypes'

const CategoryOptions = ({ categories, title }: {categories : educationCategory[] | jobCategory[], title: string}) => {
  const defineColorPoint = (category: string) => {
    return CategoryColorsForTimeLine[category as keyof typeof CategoryColorsForTimeLine]
  }

  return (
    <>
      <div>
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
      `}</style>
    </>
  )
}

export { CategoryOptions }
