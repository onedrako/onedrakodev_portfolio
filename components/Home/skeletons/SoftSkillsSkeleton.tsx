import { ThemeContext } from '@contexts/ThemeContext'
import { useContext } from 'react'

const SoftSkillsSkeleton = () => {
  const { theme } = useContext(ThemeContext)
  const defaultOptions = `
  background: ${theme.textColor};
  border-radius: 15px;
  `
  return (
    <>
      <div className="soft-skill-skeleton">
        <div className='soft-skill-skeleton__titles'>
          <div className="soft-skill-skeleton__titles--icon"></div>
          <div className="soft-skill-skeleton__titles--text"></div>
        </div>
        <div className="soft-skill-skeleton__description"></div>
      </div>
      <style jsx>{`
        .soft-skill-skeleton {
          width: 100%;
          height: 180px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          animation: fadeIn 5s ease-in-out infinite;
          margin-top: 15px;
        }
        .soft-skill-skeleton__titles {
          width: 100%;
          height: 50px;
          display: flex;
          gap: 10px;
        }
        .soft-skill-skeleton__titles--text {
          width: 80%;
          height: 100%;
          ${defaultOptions} 
        }
        .soft-skill-skeleton__titles--icon {
          width: 20%;
          height: 100%;
          ${defaultOptions}
        }
        .soft-skill-skeleton__description {
          width: 100%;
          height: 125px;
          ${defaultOptions}
        }
        
        @media (min-width: 1400px) {
          .soft-skill-skeleton {
            padding: 0 40px;
            max-width: 800px;
          }
        }

        @keyframes fadeIn {
        0% {
          opacity: 0.8;
        }
        50%{
          opacity: 0.2;
        }
        to {
          opacity: 0.8;
        }
        
      }

      `}</style>
    </>
  )
}

export { SoftSkillsSkeleton }
