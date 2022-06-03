import { useEffect, useState } from 'react'
import { TimeLine } from './TimeLine'
import axios from 'axios'

import { LaboralExperienceData } from '@customTypes/backendTypes'

const LaboralExperience = () => {
  const [experience, setExperience] = useState<LaboralExperienceData[]>([])

  useEffect(() => {
    axios.get('/api/laboral')
      .then(res => {
        setExperience(res.data.sort((a:LaboralExperienceData, b:LaboralExperienceData) => b.id - a.id))
      })
  }, [])

  return (
    <>
      <section className='container'>
        <h2>Laboral Experience</h2>
        <TimeLine data={experience} />
      </section>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          padding: 0 25px;
        }
        h2{
          font-size: 2.2rem;
          border-bottom: 1px solid #ccc;
        }
      `}</style>
    </>
  )
}

export { LaboralExperience }
