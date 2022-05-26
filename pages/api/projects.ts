import type { NextApiRequest, NextApiResponse } from 'next'
import type { ProjectsData } from 'types/backendTypes'

const allProjects: ProjectsData[] = [
  {
    id: 1,
    name: 'Form to introduce yourself',
    description: 'I´m on a discord channel, people use to introduce themselves with a message, I thought it was a good idea to create an app to generate this introduction. Users can put some information about them and they can generate an image that they can download and put it in the discord channel.',
    githubUrl: 'https://github.com/onedrako/onedrako-socials-page',
    projectUrl: 'https://onedrako.vercel.app/discord/huellita',
    category: 'frontend',
    images: ['https://i.imgur.com/p5NtU7l.jpeg', 'https://i.imgur.com/ydGvwcV.jpeg', 'https://i.imgur.com/VvRJn5A.jpeg'],
    stack: ['react', 'styledComponents', 'javaScript', 'jsx'],
    libraries: ['reactRouter', 'i18next', 'formik', 'yup', 'axios', 'dotenv'],
    environment: ['vercel', 'webpack', 'babel', 'git', 'eslint', 'github', 'ubuntuTerminal', 'vsCode', 'wsl', 'npm']
  }
]

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<ProjectsData[]>
) {
  res.status(200).json(allProjects)
}
