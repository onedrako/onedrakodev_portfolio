import type { NextApiRequest, NextApiResponse } from 'next'
import type { ProjectsData } from 'types/backendTypes'

const allProjects: ProjectsData[] = [
  {
    id: 1,
    name: 'Personal Portfolio',
    description: 'My personal portfolio, I´m using this to show my projects, my skills and hope this will be the page of my personal brand.',
    githubUrl: 'https://github.com/onedrako/onedrakodev_portfolio',
    projectUrl: '#',
    category: 'frontend',
    images: ['https://i.imgur.com/2RI6JO4.png', 'https://i.imgur.com/renN5it.png', 'https://i.imgur.com/AjhqUtL.png', 'https://i.imgur.com/itxIURU.png', 'https://i.imgur.com/RNakv7X.png', 'https://i.imgur.com/PB26iNX.png', 'https://i.imgur.com/vmZNm3L.png', 'https://i.imgur.com/xkYCYeC.png', 'https://i.imgur.com/wwSX65W.png'],
    stack: ['next', 'react', 'typeScript', 'cssInJs', 'javaScript', 'jsx'],
    libraries: ['nextPwa', 'nextAuth', 'sanitizeHtml', 'formik', 'reactIcons', 'yup', 'i18next', 'axios', 'dotenv'],
    environment: ['vercel', 'git', 'eslint', 'github', 'ubuntuTerminal', 'vsCode', 'wsl', 'yarn']
  },
  {
    id: 2,
    name: 'Form to introduce yourself v2',
    description: 'I´m on a discord channel, people use to introduce themselves with a message, I thought it was a good idea to create an app to generate this introduction. Users can put some information about them and can generate an image that can download and put it on the discord channel.',
    githubUrl: 'https://github.com/onedrako/onedrako-socials-page',
    projectUrl: 'https://onedrako.vercel.app/discord/huellita',
    category: 'frontend',
    images: ['https://i.imgur.com/8CjeTLs.png', 'https://i.imgur.com/a17FY9E.png'],
    stack: ['react', 'styledComponents', 'javaScript', 'jsx'],
    libraries: ['reactRouter', 'i18next', 'formik', 'yup', 'axios', 'dotenv'],
    environment: ['vercel', 'webpack', 'babel', 'git', 'eslint', 'github', 'ubuntuTerminal', 'vsCode', 'wsl', 'npm']
  },
  {
    id: 3,
    name: 'Game week for streams',
    description: 'For a streaming, people usually ask the schedule and the game for the day, so i built a web where they can see it for every week and with the schedule for the place they are from',
    githubUrl: 'https://github.com/onedrako/onedrako-socials-page',
    projectUrl: 'https://onedrako.vercel.app/chill',
    category: 'frontend',
    images: ['https://i.imgur.com/q8m9D0W.png', 'https://i.imgur.com/obx3lFB.png', 'https://i.imgur.com/3cGL3RM.jpg', 'https://i.imgur.com/1LiAPgK.jpg'],
    stack: ['react', 'styledComponents', 'javaScript', 'jsx'],
    libraries: ['reactRouter', 'moment', 'axios', 'dotenv'],
    environment: ['vercel', 'webpack', 'babel', 'git', 'eslint', 'github', 'ubuntuTerminal', 'vsCode', 'wsl', 'npm']
  },
  {
    id: 4,
    name: 'Backend for game schedules for streams',
    description: 'The backend for the game schedules for streams, it has authentication to update the info for the frontend, password recovery and The CRUD functions for every endpoint ',
    githubUrl: 'https://github.com/onedrako/onedrako_web_backend',
    projectUrl: 'https://floating-brushlands-65510.herokuapp.com/api/v1/games',
    category: 'backend',
    images: ['https://i.imgur.com/tP2tAxE.png'],
    stack: ['node', 'express', 'postgres'],
    libraries: ['sequelize', 'jwt', 'passport', 'nodeMailer', 'bcrypt', 'joi', 'dotenv'],
    environment: ['heroku', 'docker', 'git', 'eslint', 'github', 'ubuntuTerminal', 'vsCode', 'wsl', 'npm']
  },
  {
    id: 5,
    name: 'Schedules announces for Study With Me stream',
    description: 'I made this for a person who was doing their schedules for a "Study With Me" streaming  manually, I programmed it to update her schedule for the week, can make it with different options for each day, and finally can download three schedules images for three countries',
    githubUrl: 'https://github.com/onedrako/theWinterGallerySchedules_Frontend',
    projectUrl: 'https://thewintergallery.vercel.app/',
    category: 'frontend',
    images: ['https://i.imgur.com/FoJ3l2M.png', 'https://i.imgur.com/wfUVWap.png', 'https://i.imgur.com/yEKWBHd.png', 'https://i.imgur.com/H8XCkc9.png'],
    stack: ['next', 'react', 'cssInJs', 'javaScript', 'jsx'],
    libraries: ['nextPwa', 'nextAuth', 'sanitizeHtml', 'formik', 'reactIcons', 'yup', 'moment', 'axios', 'dotenv'],
    environment: ['vercel', 'git', 'eslint', 'github', 'ubuntuTerminal', 'vsCode', 'wsl', 'yarn']
  },
  {
    id: 6,
    name: 'Backend for the Schedules announces for Study With Me stream',
    description: 'The backend for the schedules announces for Study With Me stream, it has authentication to update the info for the frontend, password recovery and The CRUD functions for every endpoint',
    githubUrl: 'https://github.com/onedrako/TheWinterGallerySchedules',
    projectUrl: 'https://ancient-bayou-32082.herokuapp.com/api/v1/days',
    category: 'backend',
    images: ['https://i.imgur.com/FoURgbp.png'],
    stack: ['node', 'express', 'postgres'],
    libraries: ['sequelize', 'jwt', 'passport', 'nodeMailer', 'bcrypt', 'joi', 'dotenv'],
    environment: ['heroku', 'docker', 'git', 'eslint', 'github', 'ubuntuTerminal', 'vsCode', 'wsl', 'npm']
  },
  {
    id: 7,
    name: 'Form to introduce yourself v1',
    description: 'It was the version of this project, I programmed it with HTML, Stylus and JS vanilla., without libraries and any framework, It isn´t finished at all and the v2 is now better.',
    githubUrl: 'https://github.com/onedrako/dejando-huellita-form-v1',
    projectUrl: 'https://onedrako.github.io/dejando-huellita-form-v1/discord.html',
    category: 'frontend',
    images: ['https://i.imgur.com/Ax8EWpj.png', 'https://i.imgur.com/mmnM484.png'],
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
