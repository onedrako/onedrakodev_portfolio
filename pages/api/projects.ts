import type { NextApiRequest, NextApiResponse } from 'next'
import type { ProjectsData } from 'types/backendTypes'

const allProjects: ProjectsData[] = [
  {
    id: 1,
    name: 'Form to introduce yourself v2',
    description: 'I´m on a discord channel, people use to introduce themselves with a message, I thought it was a good idea to create an app to generate this introduction. Users can put some information about them and they can generate an image that they can download and put it in the discord channel.',
    githubUrl: 'https://github.com/onedrako/onedrako-socials-page',
    projectUrl: 'https://onedrako.vercel.app/discord/huellita',
    category: 'frontend',
    images: ['https://i.imgur.com/p5NtU7l.jpeg', 'https://i.imgur.com/ydGvwcV.jpeg', 'https://i.imgur.com/VvRJn5A.jpeg'],
    stack: ['react', 'styledComponents', 'javaScript', 'jsx'],
    libraries: ['reactRouter', 'i18next', 'formik', 'yup', 'axios', 'dotenv'],
    environment: ['vercel', 'webpack', 'babel', 'git', 'eslint', 'github', 'ubuntuTerminal', 'vsCode', 'wsl', 'npm']
  },
  {
    id: 2,
    name: 'Game week for streams',
    description: '',
    githubUrl: 'https://github.com/onedrako/onedrako-socials-page',
    projectUrl: 'https://onedrako.vercel.app/chill',
    category: 'frontend',
    images: ['https://i.imgur.com/p5NtU7l.jpeg', 'https://i.imgur.com/ydGvwcV.jpeg', 'https://i.imgur.com/VvRJn5A.jpeg'],
    stack: ['react', 'styledComponents', 'javaScript', 'jsx'],
    libraries: ['reactRouter', 'moment', 'axios', 'dotenv'],
    environment: ['vercel', 'webpack', 'babel', 'git', 'eslint', 'github', 'ubuntuTerminal', 'vsCode', 'wsl', 'npm']
  },
  {
    id: 3,
    name: 'Backend for game schedules for streams',
    description: '.',
    githubUrl: 'https://github.com/onedrako/onedrako_web_backend',
    projectUrl: 'https://floating-brushlands-65510.herokuapp.com/api/v1/games',
    category: 'backend',
    images: ['https://i.imgur.com/p5NtU7l.jpeg', 'https://i.imgur.com/ydGvwcV.jpeg', 'https://i.imgur.com/VvRJn5A.jpeg'],
    stack: ['node', 'express', 'postgres'],
    libraries: ['sequelize', 'jwt', 'passport', 'nodeMailer', 'bcrypt', 'joi', 'dotenv'],
    environment: ['heroku', 'docker', 'git', 'eslint', 'github', 'ubuntuTerminal', 'vsCode', 'wsl', 'npm']
  },
  {
    id: 4,
    name: 'Schedules announces for Study With Me stream',
    description: '.',
    githubUrl: 'https://github.com/onedrako/theWinterGallerySchedules_Frontend',
    projectUrl: 'https://thewintergallery.vercel.app/',
    category: 'frontend',
    images: ['https://i.imgur.com/p5NtU7l.jpeg', 'https://i.imgur.com/ydGvwcV.jpeg', 'https://i.imgur.com/VvRJn5A.jpeg'],
    stack: ['next', 'react', 'cssInJs', 'javaScript', 'jsx'],
    libraries: ['nextPwa', 'nextAuth', 'sanitazeHtml', 'formik', 'reactIcons', 'yup', 'moment', 'axios', 'dotenv'],
    environment: ['vercel', 'git', 'eslint', 'github', 'ubuntuTerminal', 'vsCode', 'wsl', 'yarn']
  },
  {
    id: 5,
    name: 'Backend for the Schedules announces for Study With Me stream',
    description: '.',
    githubUrl: 'https://github.com/onedrako/TheWinterGallerySchedules',
    projectUrl: 'https://ancient-bayou-32082.herokuapp.com/api/v1/days',
    category: 'backend',
    images: ['https://i.imgur.com/p5NtU7l.jpeg', 'https://i.imgur.com/ydGvwcV.jpeg', 'https://i.imgur.com/VvRJn5A.jpeg'],
    stack: ['node', 'express', 'postgres'],
    libraries: ['sequelize', 'jwt', 'passport', 'nodeMailer', 'bcrypt', 'joi', 'dotenv'],
    environment: ['heroku', 'docker', 'git', 'eslint', 'github', 'ubuntuTerminal', 'vsCode', 'wsl', 'npm']
  },
  {
    id: 6,
    name: 'Personal Portfolio',
    description: '.',
    githubUrl: 'https://github.com/onedrako/onedrakodev_portfolio',
    projectUrl: '#',
    category: 'frontend',
    images: ['https://i.imgur.com/p5NtU7l.jpeg', 'https://i.imgur.com/ydGvwcV.jpeg', 'https://i.imgur.com/VvRJn5A.jpeg'],
    stack: ['next', 'react', 'typeScript', 'cssInJs', 'javaScript', 'jsx'],
    libraries: ['nextPwa', 'nextAuth', 'sanitazeHtml', 'formik', 'reactIcons', 'yup', 'i18next', 'axios', 'dotenv'],
    environment: ['vercel', 'git', 'eslint', 'github', 'ubuntuTerminal', 'vsCode', 'wsl', 'yarn']
  },
  {
    id: 7,
    name: 'Form to introduce yourself v1',
    description: '.',
    githubUrl: 'https://github.com/onedrako/dejando-huellita-form-v1',
    projectUrl: 'https://onedrako.github.io/dejando-huellita-form-v1/discord.html',
    category: 'frontend',
    images: ['https://i.imgur.com/p5NtU7l.jpeg', 'https://i.imgur.com/ydGvwcV.jpeg', 'https://i.imgur.com/VvRJn5A.jpeg'],
    stack: ['javaScript', 'stylus', 'html'],
    libraries: [],
    environment: ['git', 'eslint', 'github', 'ubuntuTerminal', 'vsCode', 'wsl', 'npm']
  }

]

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<ProjectsData[]>
) {
  res.status(200).json(allProjects)
}
