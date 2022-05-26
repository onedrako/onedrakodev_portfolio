// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { TechnologiesData } from 'types/backendTypes'

const allTechnologies: TechnologiesData[] = [{
  id: 1,
  name: 'HTML',
  description: 'For markdown',
  category: 'frontend',
  image: 'https://i.imgur.com/fZrAjoO.png'
},
{
  id: 2,
  name: 'CSS',
  description: 'For Styles',
  category: 'frontend',
  image: 'https://i.imgur.com/zpe0x4L.png'
},
{
  id: 3,
  name: 'JavaScript',
  description: 'Programming language for Web Frontend/Backend Apps, Mobile, Testing ',
  category: 'frontend',
  image: 'https://i.imgur.com/nIYW1or.png'
},
{
  id: 4,
  name: 'TypeScript',
  description: 'JS typed programming language to analice static code before compile phase',
  category: 'frontend',
  image: 'https://i.imgur.com/2oW4wzC.png'
},
{
  id: 5,
  name: 'React JS',
  description: 'Web Frontend Library to build user interfaces faster',
  category: 'frontend',
  image: 'https://i.imgur.com/eyKy8rf.png'
},
{
  id: 6,
  name: 'Next JS',
  description: 'Web Frontend Framework that works with React JS, have SSR and SSG',
  category: 'frontend',
  image: 'https://i.imgur.com/kLvapT0.png'
},
{
  id: 7,
  name: 'Styled Components',
  description: 'To create reusable styles for components',
  category: 'frontend',
  image: 'https://i.imgur.com/Ok4KvYg.png'
},
{
  id: 8,
  name: 'stylus',
  description: 'CSS Preprocessor to build styles for Frontend apps',
  category: 'frontend',
  image: 'https://i.imgur.com/w1X4eHN.png'
},
{
  id: 9,
  name: 'SASS',
  description: 'CSS Preprocessor to build styles for Frontend apps',
  category: 'frontend',
  image: 'https://i.imgur.com/uXFvulH.png'
},
{
  id: 10,
  name: 'i18next',
  description: 'Internationalization library for React and Next',
  category: 'libraries',
  image: 'https://i.imgur.com/BrBMwMa.png'
}, {
  id: 11,
  name: 'React Router',
  description: 'Routing library for React',
  category: 'libraries',
  image: 'https://i.imgur.com/vBpe0Qs.jpg'
},
{
  id: 12,
  name: 'Formik',
  description: 'Form library',
  category: 'libraries',
  image: 'https://i.imgur.com/SKh5u9E.png'
},
{
  id: 13,
  name: 'Moment JS',
  description: 'Date library for React',
  category: 'libraries',
  image: 'https://i.imgur.com/4b7woHZ.png'
},
{
  id: 14,
  name: 'Sequelize',
  description: 'ORM Database library for Node JS',
  category: 'databases',
  image: 'https://i.imgur.com/ZuATtVz.png'
},
{
  id: 15,
  name: 'JWT',
  description: 'JWT Authorization library for Node JS',
  category: 'libraries',
  image: 'https://i.imgur.com/kmCzask.png'
},
{
  id: 16,
  name: 'Passport',
  description: 'Authentication library for Node JS',
  category: 'libraries',
  image: 'https://i.imgur.com/tIxSGx3.png'
},
{
  id: 17,
  name: '@Hapi/Boom',
  description: 'Error library for Node JS',
  category: 'libraries',
  image: 'https://i.imgur.com/ddiOEmX.png'
},
{
  id: 18,
  name: 'Joi',
  description: 'Validation library for Node JS',
  category: 'libraries',
  image: 'https://i.imgur.com/n2YVBzP.png'
},
{
  id: 19,
  name: 'bCrypt',
  description: 'Password encryption library for Node JS',
  category: 'libraries',
  image: 'https://i.imgur.com/qn5l2pH.png'
},
{
  id: 20,
  name: 'Node Js',
  description: 'Node JS is the server side JavaScript runtime environment',
  category: 'backend',
  image: 'https://i.imgur.com/aKTTtu2.png'
},
{
  id: 21,
  name: 'Express',
  description: 'Web library for Node JS',
  category: 'backend',
  image: 'https://i.imgur.com/F0DNje9.png'
},
{
  id: 22,
  name: 'React Native',
  description: 'Mobile Frontend Library that works with React JS, to create mobile apps for SO´s Android and IOS',
  category: 'mobile',
  image: 'https://i.imgur.com/eyKy8rf.png'
},
{
  id: 23,
  name: 'MySQL',
  description: 'Database engine for relational databases',
  category: 'databases',
  image: 'https://i.imgur.com/UX25bwY.png'
},
{
  id: 24,
  name: 'postgreSQL',
  description: 'Database engine for relational databases',
  category: 'databases',
  image: 'https://i.imgur.com/EPwe1Dx.png'
},
{
  id: 25,
  name: 'MongoDB',
  description: 'Database engine for NoSQL databases',
  category: 'databases',
  image: 'https://i.imgur.com/wMidvNv.png'
},
{
  id: 26,
  name: 'Webpack',
  description: 'Webpack is a module bundler that packs multiple modules into a single file',
  category: 'others',
  image: 'https://i.imgur.com/DEqonHQ.png'
},
{
  id: 27,
  name: 'Babel',
  description: 'Babel is a JavaScript transpiler for newer JavaScript versions to make it compatible with older browsers',
  category: 'others',
  image: 'https://i.imgur.com/6igPKZ5.png'
},
{
  id: 28,
  name: 'NPM',
  description: 'Node Package Manager',
  category: 'others',
  image: 'https://i.imgur.com/zUCRyAH.png'
},
{
  id: 29,
  name: 'Yarn',
  description: 'Yarn is a package manager for Node.js',
  category: 'others',
  image: 'https://i.imgur.com/Dgjp145.png'
},
{
  id: 30,
  name: 'Git',
  description: 'Git is a version control system for tracking changes in source code during software development',
  category: 'others',
  image: 'https://i.imgur.com/CIM3Joh.png'
},
{
  id: 31,
  name: 'GitHub',
  description: 'GitHub is a web-based Git repository hosting service',
  category: 'others',
  image: 'https://i.imgur.com/CaYzqol.png'
},
{
  id: 32,
  name: 'WSL 2',
  description: 'WSL 2 is a Linux-based software development environment',
  category: 'others',
  image: 'https://i.imgur.com/qI3VOHe.png'
},
{
  id: 33,
  name: 'Ubuntu Terminal',
  description: 'Ubuntu Terminal is a terminal emulator for Ubuntu',
  category: 'others',
  image: 'https://i.imgur.com/4gPpdBX.png'
},
{
  id: 34,
  name: 'VS Code',
  description: 'VS Code is a code editor',
  category: 'others',
  image: 'https://i.imgur.com/sfmrAro.png'
},
{
  id: 35,
  name: 'Eslint',
  description: 'Eslint is a linter for JavaScript',
  category: 'libraries',
  image: 'https://i.imgur.com/IAWLQBg.png'
},
{
  id: 36,
  name: 'Redux',
  description: 'Redux is a library for managing application state',
  category: 'libraries',
  image: 'https://i.imgur.com/6psaDYh.png'
},
{
  id: 37,
  name: 'yup',
  description: '´Validation data library for JavaScript',
  category: 'libraries',
  image: 'https://i.imgur.com/qn5l2pH.png'
}
]

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<TechnologiesData[]>
) {
  res.status(200).json(allTechnologies)
}
