import Image from 'next/image'
import { SoftSkillsData } from '@customTypes/backendTypes'

const SoftSkillItem = ({ softSkill }: {softSkill: SoftSkillsData }) => {
  return (
    <>
      <article className='soft-skill-item'>
        <h3 className='soft-skill-item__name'>{softSkill.name}</h3>
        <figure className='soft-skill-item__image'>
          <Image src={softSkill.icon} width={50} height={50}></Image>
        </figure>
        <p className='soft-skill-item__description' >{softSkill.description}</p>
      </article>

      <style jsx>{`

        .soft-skill-item {
          display: grid;
          grid-template-areas: 'icon name'
                                'description description';
          grid-template-columns: 30% 70%;
          grid-template-rows: auto auto;
          /* gap: 10px; */
          width: 100%;
          font-size: 1.8rem;
          margin: 15px auto;
          height: auto;
          text-align: justify;
        }
        .soft-skill-item__name {
          grid-area: name;
          font-size: 1.8rem;
          text-align: center;
        }

        .soft-skill-item__image {
          grid-area: icon;
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .soft-skill-item__description {
          grid-area: description;
          font-size: 1.5rem;
          padding: 10px;
        }
        @media (min-width: 600px) {

          .soft-skill-item__name {
            font-size: 2.5rem;
            text-align: start;
          }
          .soft-skill-item__description {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  )
}

export { SoftSkillItem }
