import { ThemeContext } from '@contexts/ThemeContext'
import { useContext } from 'react'

const TimeLineTimeSkeleton = ({ orientation }: {orientation: string}) => {
  const { theme } = useContext(ThemeContext)
  const defaultOptions = `
  background: ${theme.textColor};
  border-radius: 15px;
  `

  const timeLineOrientationStyleElements = {
    borderOrientation: `${`border-${orientation}: 3px solid ${theme.textColor};`}`,
    paddingOrientation: `${orientation === 'left' ? '45px 0px 45px 50px;' : '45px 50px 45px 0px;'}`,
    datesOrientation: `${orientation === 'left' ? 'left: -12px;' : 'right: -12px'}`
  }
  return (
    <>
      <article className="skeleton">
        <div className="time-line-skeleton">
          <div className="time-line-skeleton__titles">
            <div className="time-line-skeleton__titles--image"></div>
            <div className="time-line-skeleton__titles--title"></div>
            <div className="time-line-skeleton__titles--institution"></div>
          </div>
          <div className="time-line-skeleton__description"></div>
          <span className="time-line-skeleton__circle"></span>
        </div>

        <div className="time-line-skeleton">
          <div className="time-line-skeleton__titles">
            <div className="time-line-skeleton__titles--image"></div>
            <div className="time-line-skeleton__titles--title"></div>
            <div className="time-line-skeleton__titles--institution"></div>
          </div>
          <div className="time-line-skeleton__description"></div>
          <span className="time-line-skeleton__circle"></span>
        </div>

        <div className="time-line-skeleton">
          <div className="time-line-skeleton__titles">
            <div className="time-line-skeleton__titles--image"></div>
            <div className="time-line-skeleton__titles--title"></div>
            <div className="time-line-skeleton__titles--institution"></div>
          </div>
          <div className="time-line-skeleton__description"></div>
          <span className="time-line-skeleton__circle"></span>
        </div>

      </article>
      <style jsx>{`
        .skeleton{
          width: 100%;
          height: 900px;
          padding: 0 25px;
          animation: fadeIn 5s ease-in-out infinite;
        }
        .time-line-skeleton {
          height: fit-content;  
          /* padding: 45px 0px 45px 50px; */
          padding: ${timeLineOrientationStyleElements.paddingOrientation}
          ${timeLineOrientationStyleElements.borderOrientation}
          position: relative;
          height: fit-content;
        }
        .time-line-skeleton__titles {
          display: grid;
          grid-template-columns: 50px 1fr;
          gap: 10px;
          width: 100%;
          grid-template-areas: "icon title " "icon institution";
          align-items: center;
        }
        .time-line-skeleton__titles--title {
          grid-area: title;
          height: 25px;
          ${defaultOptions}
        }
        .time-line-skeleton__titles--image{
          grid-area: icon;
          height: 50px;
          border-radius: 50%;
          background: ${theme.textColor};
        }
        .time-line-skeleton__titles--institution {
          grid-area: institution;
          height: 25px;
          width: 80%;
          justify-self: end;
          ${defaultOptions}
        }
        .time-line-skeleton__description {
          height: 125px;
          margin-top: 20px;
          ${defaultOptions}
        }
        .time-line-skeleton__circle {
          border-radius: 50%;
          width: 20px;
          height: 20px;
          position: relative;
          z-index: 1;
          background: ${theme.backgroundColor};
          border: 2px solid ${theme.textColor};
          position: absolute;
          top : 45%;
          ${timeLineOrientationStyleElements.datesOrientation}
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

export { TimeLineTimeSkeleton }
