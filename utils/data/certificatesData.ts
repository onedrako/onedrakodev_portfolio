import { CertificationsData } from '@customTypes/backendTypes'

export const certifications: CertificationsData[] = [
  {
    id: 1,
    name: 'Curso Básico de Algoritmos y Pensamiento Lógico',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Basic', order: 2 }],
    courseCategory: 'Technology',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2218-course/diploma/detalle/',
    platformUrl: 'https://platzi.com/cursos/pensamiento-logico-2021/',
    image: 'https://i.imgur.com/Qcnthp8.png',
    date: '2021-05-23'
  },
  {
    id: 2,
    name: 'Curso de Programación Básica',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Basic', order: 1 }],
    courseCategory: 'Technology',
    date: '2019-05-30',
    image: 'https://i.imgur.com/UVVJZ9q.png',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1050-course/diploma/detalle/',
    platformUrl: 'https://platzi.com/cursos/programacion-basica/',
    technologies: ['html', 'css', 'javaScript']
  },
  {
    id: 3,
    name: 'Curso de Introducción a la Web: Historia y Funcionamiento de Internet',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Basic', order: 3 }],
    courseCategory: 'Technology',
    date: '2021-02-03',
    image: 'https://i.imgur.com/aM6oJ5I.png',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2053-course/diploma/detalle/',
    platformUrl: 'https://platzi.com/cursos/introweb/'
  },
  {
    id: 4,
    name: 'Fundamentos de Ingeniería de Software',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Basic', order: 4 }],
    courseCategory: 'Technology',
    date: '2019-05-24',
    image: 'https://i.imgur.com/I9brrXJ.png',
    platformUrl: 'https://platzi.com/cursos/ingenieria/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1098-course/diploma/detalle/'
  },
  {
    id: 5,
    name: 'Curso de Prework: Configuración de Entorno de Desarrollo en Windows',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Basic', order: 5 },
      { learningPath: 'JavaScript School', level: 'Basic', order: 1 },
      { learningPath: 'Backend Development with Node.js', order: 1 }
    ],
    courseCategory: 'Technology',
    technologies: ['wsl'],
    date: '2021-01-27',
    image: 'https://i.imgur.com/ndsMHUb.png',
    platformUrl: 'https://platzi.com/cursos/prework-windows/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2042-course/diploma/detalle/'
  },
  {
    id: 6,
    name: 'Curso de Prework: Configuración de Entorno de Desarrollo en Linux',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Basic', order: 6 },
      { learningPath: 'JavaScript School', level: 'Basic', order: 2 },
      { learningPath: 'Backend Development with Node.js', order: 2 }

    ],
    courseCategory: 'Technology',
    date: '2021-12-12',
    image: 'https://i.imgur.com/Qg9DDbw.png',
    platformUrl: 'https://platzi.com/cursos/prework-linux/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2383-course/diploma/detalle/'
  },
  {
    id: 7,
    name: 'Curso de Prework: Configuración de Entorno de Desarrollo en MacOS',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Basic', order: 7 },
      { learningPath: 'JavaScript School', level: 'Basic', order: 3 },
      { learningPath: 'Backend Development with Node.js', order: 3 }
    ],
    courseCategory: 'Technology',
    date: '2021-04-28',
    image: 'https://i.imgur.com/HnJUHj5.png',
    platformUrl: 'https://platzi.com/cursos/prework-macos/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2214-course/diploma/detalle/'
  },
  {
    id: 8,
    name: 'Curso de Introducción a la Terminal y Línea de Comandos',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Basic', order: 8 },
      { learningPath: 'Backend Development with Node.js', order: 4 }
    ],
    courseCategory: 'Technology',
    technologies: ['ubuntuTerminal', 'bash'],
    date: '2021-05-22',
    image: 'https://i.imgur.com/U3C1v53.png',
    platformUrl: 'https://platzi.com/cursos/terminal/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2292-course/diploma/detalle/'
  },
  {
    id: 9,
    name: 'Curso Profesional de Git y GitHub',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Basic', order: 9 },
      { learningPath: 'Backend Development with Node.js', order: 5 }
    ],
    courseCategory: 'Technology',
    technologies: ['git', 'github', 'ubuntuTerminal', 'bash'],
    date: '2021-01-22',
    image: 'https://i.imgur.com/twOupII.png',
    platformUrl: 'https://platzi.com/cursos/git-github/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1557-course/diploma/detalle/'
  },
  {
    id: 10,
    name: 'Curso de Flujo de Desarrollo Moderno CodeStream',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Basic', order: 10 },
      { learningPath: 'Backend Development with Node.js', order: 6 }
    ],
    courseCategory: 'Technology',
    technologies: ['vsCode'],
    date: '2021-04-12',
    image: 'https://i.imgur.com/Y9Mtydt.png',
    platformUrl: 'https://platzi.com/cursos/desarrollo-moderno-codestream/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2157-course/diploma/detalle/'
  },
  {
    id: 11,
    name: 'Curso de Frontend Developer',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Basic', order: 11 },
      { learningPath: 'JavaScript School', level: 'Basic', order: 4 },
      { learningPath: 'Frontend with React', order: 1 }
    ],
    courseCategory: 'Technology',
    technologies: ['html', 'css'],
    date: '2021-09-30',
    image: 'https://i.imgur.com/yMZMyZr.png',
    platformUrl: 'https://platzi.com/cursos/frontend-developer/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2467-course/diploma/detalle/'
  },
  {
    id: 12,
    name: 'Curso Práctico de Frontend Developer',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Basic', order: 12 },
      { learningPath: 'JavaScript School', level: 'Basic', order: 5 },
      { learningPath: 'Frontend with React', order: 2 }
    ],
    courseCategory: 'Technology',
    technologies: ['html', 'css'],
    date: '2021-10-02',
    image: 'https://i.imgur.com/qi8rzaq.png',
    platformUrl: 'https://platzi.com/cursos/frontend-developer-practico/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2477-course/diploma/detalle/'
  },
  {
    id: 13,
    name: 'Curso Definitivo de HTML y CSS',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Basic', order: 13 }],
    courseCategory: 'Technology',
    technologies: ['html', 'css'],
    date: '2021-04-09',
    image: 'https://i.imgur.com/AK0wR43.png',
    platformUrl: 'https://platzi.com/cursos/html-css/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2008-course/diploma/detalle/'
  },
  {
    id: 14,
    name: 'Curso Práctico de HTML y CSS',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Basic', order: 14 }],
    courseCategory: 'Technology',
    technologies: ['html', 'css'],
    date: '2021-04-14',
    image: 'https://i.imgur.com/IxemalD.png',
    platformUrl: 'https://platzi.com/cursos/html-practico/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1758-course/diploma/detalle/'
  },
  {
    id: 15,
    name: 'Curso de Responsive Design: Maquetación Mobile First',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Basic', order: 15 }],
    courseCategory: 'Technology',
    technologies: ['html', 'css'],
    date: '2021-04-19',
    image: 'https://i.imgur.com/6HF1omn.png',
    platformUrl: 'https://platzi.com/cursos/mobile-first/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2030-course/diploma/detalle/'
  },
  {
    id: 16,
    name: 'Curso de Diseño para Developers',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Basic', order: 16 }],
    courseCategory: 'Technology',
    date: '2021-05-24',
    image: 'https://i.imgur.com/ue8F2ZF.png',
    platformUrl: 'https://platzi.com/cursos/diseno-programadores/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1906-course/diploma/detalle/'
  },
  {
    id: 17,
    name: 'Curso de Sistemas de Diseño',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Basic', order: 17 }],
    courseCategory: 'Technology',
    date: '2021-04-20',
    image: 'https://i.imgur.com/ukduNaG.png',
    platformUrl: 'https://platzi.com/cursos/sistemas-diseno/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1420-course/diploma/detalle/'
  },
  {
    id: 18,
    name: 'Curso de CSS Grid Básico',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Basic', order: 18 }],
    courseCategory: 'Technology',
    technologies: ['html', 'css'],
    date: '2021-10-31',
    image: 'https://i.imgur.com/3ZQkq34.png',
    platformUrl: 'https://platzi.com/cursos/css-grid/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2474-course/diploma/detalle/'
  },
  {
    id: 19,
    name: 'Curso Práctico de Maquetación en CSS',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Basic', order: 19 }],
    courseCategory: 'Technology',
    technologies: ['html', 'css'],
    date: '2021-05-02',
    image: 'https://i.imgur.com/7rzfvme.png',
    platformUrl: 'https://platzi.com/cursos/practico-css/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1744-course/diploma/detalle/'
  },
  {
    id: 20,
    name: 'Curso Profesional de CSS Grid Layout',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Basic', order: 20 }],
    courseCategory: 'Technology',
    technologies: ['html', 'css'],
    date: '2021-04-22',
    image: 'https://i.imgur.com/AEQ7Gda.png',
    platformUrl: 'https://platzi.com/cursos/css-grid-layout/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2222-course/diploma/detalle/'
  },
  {
    id: 21,
    name: 'Curso de Diseño Web con CSS Grid y Flexbox',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Basic', order: 21 }],
    courseCategory: 'Technology',
    technologies: ['html', 'css'],
    date: '2021-04-28',
    image: 'https://i.imgur.com/ciTZejY.png',
    platformUrl: 'https://platzi.com/cursos/flexbox-css-grid/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2229-course/diploma/detalle/'
  },
  {
    id: 22,
    name: 'Curso de Transformaciones y Transiciones en CSS',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Basic', order: 22 }],
    courseCategory: 'Technology',
    technologies: ['html', 'css'],
    date: '2021-05-29',
    image: 'https://i.imgur.com/bkItCTW.png',
    platformUrl: 'https://platzi.com/cursos/transformaciones-transiciones-css/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2336-course/diploma/detalle/'
  },
  {
    id: 23,
    name: 'Curso de Animaciones con CSS',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Basic', order: 23 }],
    courseCategory: 'Technology',
    technologies: ['html', 'css'],
    date: '2021-05-30',
    image: 'https://i.imgur.com/vcD4pey.png',
    platformUrl: 'https://platzi.com/cursos/animaciones-css/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2337-course/diploma/detalle/'
  },
  {
    id: 24,
    name: 'Curso Básico de JavaScript',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Intermediate', order: 24 },
      { learningPath: 'JavaScript School', level: 'Intermediate', order: 6 },
      { learningPath: 'Frontend with React', order: 3 },
      { learningPath: 'App Development with React Native', order: 1 },
      { learningPath: 'Backend Development with Node.js', order: 7 }
    ],
    courseCategory: 'Technology',
    technologies: ['javaScript'],
    date: '2021-05-08',
    image: 'https://i.imgur.com/KbtyF4f.png',
    platformUrl: 'https://platzi.com/cursos/basico-javascript/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1814-course/diploma/detalle/'
  },
  {
    id: 25,
    name: 'Curso Práctico de JavaScript',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Intermediate', order: 25 },
      { learningPath: 'JavaScript School', level: 'Intermediate', order: 7 },
      { learningPath: 'Frontend with React', order: 4 }
    ],
    courseCategory: 'Technology',
    technologies: ['javaScript', 'html', 'css'],
    date: '2021-06-27',
    image: 'https://i.imgur.com/9VbTweJ.png',
    platformUrl: 'https://platzi.com/cursos/javascript-practico/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2327-course/diploma/detalle/'
  },
  {
    id: 26,
    name: 'Curso de Closures y Scope en JavaScript 2021',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Intermediate', order: 26 },
      { learningPath: 'Frontend with React', order: 5 },
      { learningPath: 'Backend Development with Node.js', order: 10 }
    ],
    courseCategory: 'Technology',
    technologies: ['javaScript'],
    date: '2021-06-04',
    image: 'https://i.imgur.com/MygLUNJ.png',
    platformUrl: 'https://platzi.com/cursos/scope/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1807-course/diploma/detalle/'
  },
  {
    id: 27,
    name: 'Curso de Programación Orientada a Objetos: POO',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Intermediate', order: 27 }],
    courseCategory: 'Technology',
    technologies: ['javaScript'],
    date: '2021-06-05',
    image: 'https://i.imgur.com/IrpG9pi.png',
    platformUrl: 'https://platzi.com/cursos/oop/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1474-course/diploma/detalle/'
  },
  {
    id: 28,
    name: 'Curso Básico de Programación Orientada a Objetos con JavaScript',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Intermediate', order: 28 }],
    courseCategory: 'Technology',
    technologies: ['javaScript'],
    date: '2021-06-29',
    image: 'https://i.imgur.com/bXE4jkU.png',
    platformUrl: 'https://platzi.com/cursos/javascript-poo/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2332-course/diploma/detalle/'
  },
  {
    id: 29,
    name: 'Curso Intermedio de Programación Orientada a Objetos en JavaScript',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Intermediate', order: 29 }],
    courseCategory: 'Technology',
    technologies: ['javaScript'],
    date: '2021-08-29',
    image: 'https://i.imgur.com/3oCmxnk.png',
    platformUrl: 'https://platzi.com/cursos/javascript-poo-intermedio/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2419-course/diploma/detalle/'
  },
  {
    id: 30,
    name: 'Curso de ECMAScript 6+',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Intermediate', order: 30 },
      { learningPath: 'JavaScript School', level: 'Intermediate', order: 8 },
      { learningPath: 'Frontend with React', order: 6 },
      { learningPath: 'App Development with React Native', order: 2 },
      { learningPath: 'Backend Development with Node.js', order: 9 }
    ],
    courseCategory: 'Technology',
    technologies: ['javaScript'],
    date: '2021-06-06',
    image: 'https://i.imgur.com/so6tnAI.png',
    platformUrl: 'https://platzi.com/cursos/ecmascript-6/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1815-course/diploma/detalle/'
  },
  {
    id: 31,
    name: 'Curso de Manipulación de Arrays en JavaScript',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Intermediate', order: 31 }],
    courseCategory: 'Technology',
    technologies: ['javaScript'],
    date: '2021-09-24',
    image: 'https://i.imgur.com/DlleS0A.png',
    platformUrl: 'https://platzi.com/cursos/arrays/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2461-course/diploma/detalle/'
  },
  {
    id: 32,
    name: 'Curso de JavaScript Engine (V8) y el Navegador',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Intermediate', order: 32 },
      { learningPath: 'Backend Development with Node.js', order: 8 }

    ],
    courseCategory: 'Technology',
    technologies: ['javaScript'],
    date: '2021-06-06',
    image: 'https://i.imgur.com/hkE64c9.png',
    platformUrl: 'https://platzi.com/cursos/javascript-navegador/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1798-course/diploma/detalle/'
  },
  {
    id: 33,
    name: 'Curso de Asincronismo con JavaScript 2019',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Intermediate', order: 33 },
      { learningPath: 'JavaScript School', level: 'Intermediate', order: 9 },
      { learningPath: 'Frontend with React', order: 7 },
      { learningPath: 'App Development with React Native', order: 3 },
      { learningPath: 'Backend Development with Node.js', order: 11 }
    ],
    courseCategory: 'Technology',
    technologies: ['javaScript'],
    date: '2021-06-09',
    image: 'https://i.imgur.com/hGd5SpH.png',
    platformUrl: 'https://platzi.com/cursos/asincronismo-js-2019/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1789-course/diploma/detalle/'
  },
  {
    id: 34,
    name: 'Curso de Consumo de API REST con JavaScript',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Intermediate', order: 34 }],
    courseCategory: 'Technology',
    technologies: ['javaScript'],
    date: '2022-05-30',
    image: 'https://i.imgur.com/w0l5vXy.png',
    platformUrl: 'https://platzi.com/cursos/api/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2985-course/diploma/detalle/'
  },
  {
    id: 35,
    name: 'Curso Práctico de Consumo de API REST con JavaScript',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Intermediate', order: 35 }],
    courseCategory: 'Technology',
    technologies: ['javaScript', 'axios'],
    date: '2022-06-15',
    image: 'https://i.imgur.com/7nAJ7zA.png',
    platformUrl: 'https://platzi.com/cursos/api-practico/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2986-api-practico/diploma/detalle/'
  },
  {
    id: 37,
    name: 'Curso de Gestión de Dependencias y Paquetes con NPM',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Intermediate', order: 37 },
      { learningPath: 'JavaScript School', level: 'Intermediate', order: 10 },
      { learningPath: 'Frontend with React', order: 8 },
      { learningPath: 'App Development with React Native', order: 4 },
      { learningPath: 'Backend Development with Node.js', order: 12 }
    ],
    courseCategory: 'Technology',
    technologies: ['npm', 'ubuntuTerminal'],
    date: '2021-06-14',
    image: 'https://i.imgur.com/mFZUNmf.png',
    platformUrl: 'https://platzi.com/cursos/npm/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1763-course/diploma/detalle/'
  },
  {
    id: 38,
    name: 'Curso Profesional de JavaScript',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Advanced', order: 38 },
      { learningPath: 'Frontend with React', order: 9 },
      { learningPath: 'App Development with React Native', order: 5 },
      { learningPath: 'Backend Development with Node.js', order: 13 }
    ],
    courseCategory: 'Technology',
    technologies: ['javaScript'],
    date: '2021-07-25',
    image: 'https://i.imgur.com/vK0hkya.png',
    platformUrl: 'https://platzi.com/cursos/javascript-profesional/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1642-course/diploma/detalle/'
  },
  {
    id: 39,
    name: 'Curso de Fundamentos de TypeScript 2021',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Advanced', order: 39 }],
    courseCategory: 'Technology',
    technologies: ['typeScript'],
    date: '2021-07-28',
    image: 'https://i.imgur.com/nw3ZFwK.png',
    platformUrl: 'https://platzi.com/cursos/typescript-2020/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1869-course/diploma/detalle/'
  },
  {
    id: 40,
    name: 'Curso de Fundamentos de TypeScript',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Advanced', order: 41 }],
    courseCategory: 'Technology',
    technologies: ['typeScript'],
    date: '2022-04-15',
    image: 'https://i.imgur.com/287Unsl.png',
    platformUrl: 'https://platzi.com/cursos/typescript/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2878-course/diploma/detalle/'
  },
  {
    id: 41,
    name: 'Curso de TypeScript: Tipos Avanzados y Funciones',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Intermediate', order: 41 }],
    courseCategory: 'Technology',
    technologies: ['typeScript'],
    date: '2022-04-29',
    image: 'https://i.imgur.com/Gv5EoVo.png',
    platformUrl: 'https://platzi.com/cursos/typescript-tipos-avanzados/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2879-course/diploma/detalle/'
  },
  {
    id: 42,
    name: 'Curso de TypeScript: Programación Orientada a Objetos y Asincronismo',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Intermediate', order: 42 }],
    courseCategory: 'Technology',
    technologies: ['typeScript'],
    date: '2022-05-02',
    image: 'https://i.imgur.com/AihS8DC.png',
    platformUrl: 'https://platzi.com/cursos/typescript-poo/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2880-course/diploma/detalle/'
  },
  {
    id: 43,
    name: 'Curso de Webpack',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Intermediate', order: 43 },
      { learningPath: 'JavaScript School', level: 'Intermediate', order: 11 },
      { learningPath: 'App Development with React Native', order: 9 }
    ],
    courseCategory: 'Technology',
    technologies: ['webpack', 'babel'],
    date: '2021-08-03',
    image: 'https://i.imgur.com/j5szRB2.png',
    platformUrl: 'https://platzi.com/cursos/webpack/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2242-course/diploma/detalle/'
  },
  {
    id: 44,
    name: 'Curso de Single Page Application con JavaScript Vanilla',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Intermediate', order: 44 }],
    courseCategory: 'Technology',
    technologies: ['javaScript', 'html', 'css'],
    date: '2021-08-05',
    image: 'https://i.imgur.com/ZwcSGZw.png',
    platformUrl: 'https://platzi.com/cursos/spa-javascript/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1787-course/diploma/detalle/'
  },
  {
    id: 45,
    name: 'Curso Práctico de Maquetación y Animaciones con CSS',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Intermediate', order: 45 }],
    courseCategory: 'Technology',
    technologies: ['css', 'html'],
    date: '2021-08-09',
    image: 'https://i.imgur.com/VH9NIZi.png',
    platformUrl: 'https://platzi.com/cursos/animaciones-css-practico/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2338-course/diploma/detalle/'
  },
  {
    id: 46,
    name: 'Curso de Debugging con Chrome DevTools',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Intermediate', order: 46 }],
    courseCategory: 'Technology',
    technologies: ['javaScript', 'html', 'css'],
    date: '2021-08-10',
    image: 'https://i.imgur.com/EttBFqG.png',
    platformUrl: 'https://platzi.com/cursos/devtools/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1867-course/diploma/detalle/'
  },
  {
    id: 47,
    name: 'Curso de Manipulación del DOM',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Intermediate', order: 47 },
      { learningPath: 'Frontend with React', order: 10 }
    ],
    courseCategory: 'Technology',
    technologies: ['javaScript', 'html', 'css'],
    date: '2021-08-31',
    image: 'https://i.imgur.com/JHY8PZ3.png',
    platformUrl: 'https://platzi.com/cursos/dom/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2193-course/diploma/detalle/'
  },
  {
    id: 48,
    name: 'Curso de Optimización Web',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Intermediate', order: 48 }],
    courseCategory: 'Technology',
    technologies: ['javaScript', 'html', 'css'],
    date: '2021-08-25',
    image: 'https://i.imgur.com/Ak9KGBA.png',
    platformUrl: 'https://platzi.com/cursos/web-performance/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1973-course/diploma/detalle/'
  },
  {
    id: 49,
    name: 'Curso de Accesibilidad Web',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Intermediate', order: 49 }],
    courseCategory: 'Technology',
    technologies: ['javaScript', 'html', 'css'],
    date: '2021-08-15',
    image: 'https://i.imgur.com/ufz8hWo.png',
    platformUrl: 'https://platzi.com/cursos/accesibilidad-web/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1802-course/diploma/detalle/'
  },
  {
    id: 50,
    name: 'Curso Básico de Web Components con JavaScrip',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Intermediate', order: 50 }],
    courseCategory: 'Technology',
    technologies: ['webComponents', 'javaScript', 'html', 'css'],
    date: '2021-09-04',
    image: 'https://i.imgur.com/5s5FuX4.png',
    platformUrl: 'https://platzi.com/cursos/web-components-javascript/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2199-course/diploma/detalle/'
  },
  {
    id: 51,
    name: 'Curso de Estructuras de Datos con JavaScript',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Intermediate', order: 51 },
      { learningPath: 'Backend Development with Node.js', order: 14 }

    ],
    courseCategory: 'Technology',
    technologies: ['javaScript'],
    date: '2021-12-09',
    image: 'https://i.imgur.com/VaL7iPN.png',
    platformUrl: 'https://platzi.com/cursos/estructuras-datos/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2156-course/diploma/detalle/'
  },
  {
    id: 52,
    name: 'Curso de Complejidad Algorítmica con JavaScript',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Intermediate', order: 52 }],
    courseCategory: 'Technology',
    technologies: ['javaScript'],
    date: '2021-11-02',
    image: 'https://i.imgur.com/1cwuB4d.png',
    platformUrl: 'https://platzi.com/cursos/complejidad-js/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2517-course/diploma/detalle/'
  },
  {
    id: 59,
    name: 'Curso de Frameworks y Librerías de JavaScript',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Advanced', order: 59 },
      { learningPath: 'Frontend with React', order: 12 }
    ],
    courseCategory: 'Technology',
    technologies: ['react', 'vue', 'angular', 'svelte'],
    date: '2021-09-26',
    image: 'https://i.imgur.com/gCsAI7e.png',
    platformUrl: 'https://platzi.com/cursos/frameworks-javascript/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2239-course/diploma/detalle/'
  },
  {
    id: 60,
    name: 'Curso de Introducción a React.js',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Advanced', order: 60 },
      { learningPath: 'Frontend with React', order: 13 },
      { learningPath: 'App Development with React Native', order: 6 }
    ],
    courseCategory: 'Technology',
    technologies: ['react', 'reactRouter'],
    date: '2021-10-07',
    image: 'https://i.imgur.com/Zbfa2kt.png',
    platformUrl: 'https://platzi.com/cursos/react/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2444-course/diploma/detalle/'
  },
  {
    id: 61,
    name: 'Curso de React.js: Patrones de Render y Composición',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Advanced', order: 61 },
      { learningPath: 'Frontend with React', order: 14 },
      { learningPath: 'App Development with React Native', order: 7 }
    ],
    courseCategory: 'Technology',
    technologies: ['react', 'reactRouter'],
    date: '2021-10-10',
    image: 'https://i.imgur.com/7LLx0s8.png',
    platformUrl: 'https://platzi.com/cursos/react-patrones-render/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2457-course/diploma/detalle/'
  },
  {
    id: 62,
    name: 'Curso de React.js: Manejo Profesional del Estado',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Advanced', order: 62 },
      { learningPath: 'Frontend with React', order: 15 },
      { learningPath: 'App Development with React Native', order: 8 }
    ],
    courseCategory: 'Technology',
    technologies: ['react', 'reactRouter'],
    date: '2021-12-01',
    image: 'https://i.imgur.com/eJP3jq8.png',
    platformUrl: 'https://platzi.com/cursos/react-estado/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2597-course/diploma/detalle/'
  },
  {
    id: 63,
    name: 'Curso Práctico de React.js',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Advanced', order: 63 },
      { learningPath: 'JavaScript School', level: 'Advanced', order: 12 },
      { learningPath: 'Frontend with React', order: 16 },
      { learningPath: 'App Development with React Native', order: 10 }

    ],
    courseCategory: 'Technology',
    technologies: ['react', 'reactRouter', 'webpack', 'babel', 'axios'],
    date: '2021-10-15',
    image: 'https://i.imgur.com/9fcy45V.png',
    platformUrl: 'https://platzi.com/cursos/react-practico/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2484-course/diploma/detalle/'
  },
  {
    id: 64,
    name: 'Curso Profesional de React Hooks',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Advanced', order: 64 },
      { learningPath: 'Frontend with React', order: 17 },
      { learningPath: 'App Development with React Native', order: 12 }
    ],
    courseCategory: 'Technology',
    technologies: ['react', 'reactRouter', 'webpack', 'babel', 'axios'],
    date: '2021-10-30',
    image: 'https://i.imgur.com/HGhzN0p.png',
    platformUrl: 'https://platzi.com/cursos/react-hooks/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2118-course/diploma/detalle/'
  },
  {
    id: 66,
    name: 'Curso de Unit Testing con Jest en React',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Advanced', order: 66 },
      { learningPath: 'Frontend with React', order: 20 },
      { learningPath: 'App Development with React Native', order: 14 }
    ],
    courseCategory: 'Technology',
    technologies: ['react', 'jest'],
    date: '2021-11-13',
    image: 'https://i.imgur.com/aS6bozQ.png',
    platformUrl: 'https://platzi.com/cursos/jest/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1788-course/diploma/detalle/'
  },
  {
    id: 67,
    name: 'Curso de React Avanzado',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Advanced', order: 67 },
      { learningPath: 'Frontend with React', order: 18 },
      { learningPath: 'App Development with React Native', order: 13 }
    ],
    courseCategory: 'Technology',
    technologies: ['react', 'graphql', 'apollo', 'styledComponents', 'reactRouter', 'eslint', 'cypress', 'reactIcons', 'babel'],
    date: '2021-11-10',
    image: 'https://i.imgur.com/2Yw9acU.png',
    platformUrl: 'https://platzi.com/cursos/react-avanzado/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1601-course/diploma/detalle/'
  },
  {
    id: 91,
    name: 'Curso para Conseguir Trabajo como Frontend Developer',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Advanced', order: 91 }],
    courseCategory: 'Technology',
    date: '2022-01-10',
    image: 'https://i.imgur.com/PxeECRh.png',
    platformUrl: 'https://platzi.com/cursos/conseguir-trabajo-frontend/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2641-course/diploma/detalle/'
  },
  {
    id: 92,
    name: 'Curso para Conseguir Trabajo en Tecnología',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Advanced', order: 92 }],
    courseCategory: 'Technology',
    date: '2022-03-06',
    image: 'https://i.imgur.com/ut72nJm.png',
    platformUrl: 'https://platzi.com/cursos/conseguir-trabajo-tech/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2656-course/diploma/detalle/'
  },
  {
    id: 93,
    name: 'Curso de Fundamentos de Bases de Datos',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Complementary', order: 93 },
      { learningPath: 'JavaScript School', level: 'Complementary', order: 15 }
    ],
    courseCategory: 'Technology',
    technologies: ['mysql'],
    date: '2021-10-18',
    image: 'https://i.imgur.com/fotaguR.png',
    platformUrl: 'https://platzi.com/cursos/bd/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1566-course/diploma/detalle/'
  },
  {
    id: 94,
    name: 'Curso de SQL y MySQL',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Complementary', order: 94 }],
    courseCategory: 'Technology',
    technologies: ['mysql'],
    date: '2021-12-16',
    image: 'https://i.imgur.com/rS3HJe5.png',
    platformUrl: 'https://platzi.com/cursos/sql-mysql/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1272-course/diploma/detalle/'
  },
  {
    id: 95,
    name: 'Curso de PostgreSQL',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Complementary', order: 95 }],
    courseCategory: 'Technology',
    technologies: ['postgres'],
    date: '2021-12-26',
    image: 'https://i.imgur.com/Rtzhxja.png',
    platformUrl: 'https://platzi.com/cursos/postgresql/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1480-course/diploma/detalle/'
  },
  {
    id: 96,
    name: 'Curso Práctico de SQL',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Complementary', order: 96 }],
    courseCategory: 'Technology',
    technologies: ['postgres'],
    date: '2021-12-30',
    image: 'https://i.imgur.com/6y96T9p.png',
    platformUrl: 'https://platzi.com/cursos/practico-sql/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2059-course/diploma/detalle/'
  },
  {
    id: 97,
    name: 'Curso Básico de MongoDB',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Web Development School', level: 'Complementary', order: 97 }],
    courseCategory: 'Technology',
    technologies: ['mongo'],
    date: '2022-01-03',
    image: 'https://i.imgur.com/K0qq228.png',
    platformUrl: 'https://platzi.com/cursos/mongodb/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1533-course/diploma/detalle/'
  },
  {
    id: 98,
    name: 'Curso de Introducción al Desarrollo Backend',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Complementary', order: 98 },
      { learningPath: 'Backend Development with Node.js', order: 15 }
    ],
    courseCategory: 'Technology',
    date: '2021-10-18',
    image: 'https://i.imgur.com/qzoJysb.png',
    platformUrl: 'https://platzi.com/cursos/introduccion-backend/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2508-course/diploma/detalle/'
  },
  {
    id: 99,
    name: 'Curso de Fundamentos de Node.js',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Complementary', order: 99 },
      { learningPath: 'JavaScript School', level: 'Complementary', order: 16 },
      { learningPath: 'Backend Development with Node.js', order: 16 }
    ],
    courseCategory: 'Technology',
    technologies: ['node'],
    date: '2021-10-23',
    image: 'https://i.imgur.com/NkLrCbZ.png',
    platformUrl: 'https://platzi.com/cursos/fundamentos-node/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1759-course/diploma/detalle/'
  },
  {
    id: 100,
    name: 'Curso de Backend con Node.js: API REST con Express.js',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Complementary', order: 100 },
      { learningPath: 'JavaScript School', level: 'Complementary', order: 17 },
      { learningPath: 'Backend Development with Node.js', order: 17 }
    ],
    courseCategory: 'Technology',
    technologies: ['node', 'express', 'postgres', 'sequelize'],
    date: '2021-10-24',
    image: 'https://i.imgur.com/EfGuZhG.png',
    platformUrl: 'https://platzi.com/cursos/backend-nodejs/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2485-course/diploma/detalle/'
  },
  {
    id: 101,
    name: 'Curso de Backend con Node.js: Base de Datos con PostgreSQL',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Complementary', order: 101 },
      { learningPath: 'JavaScript School', level: 'Complementary', order: 18 },
      { learningPath: 'Backend Development with Node.js', order: 18 }
    ],
    courseCategory: 'Technology',
    technologies: ['node', 'postgres', 'express', 'sequelize'],
    date: '2022-01-22',
    image: 'https://i.imgur.com/1y5DXoD.png',
    platformUrl: 'https://platzi.com/cursos/backend-nodejs-postgres/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2507-course/diploma/detalle/'
  },
  {
    id: 102,
    name: 'Curso de Autenticación con Passport.js y JWT',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Complementary', order: 102 },
      { learningPath: 'JavaScript School', level: 'Complementary', order: 19 },
      { learningPath: 'Backend Development with Node.js', order: 19 }
    ],
    courseCategory: 'Technology',
    technologies: ['node', 'express', 'jwt', 'sequelize', 'postgres'],
    date: '2022-01-27',
    image: 'https://i.imgur.com/W0Vl7zs.png',
    platformUrl: 'https://platzi.com/cursos/passport/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2489-course/diploma/detalle/'
  },
  {
    id: 103,
    name: 'Curso de Node.js: Base de Datos con MongoDB y WebSockets',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Complementary', order: 103 },
      { learningPath: 'Backend Development with Node.js', order: 16 }

    ],
    courseCategory: 'Technology',
    technologies: ['node', 'express', 'mongoose', 'mongo'],
    date: '2022-01-09',
    image: 'https://i.imgur.com/sKdeV8R.png',
    platformUrl: 'https://platzi.com/cursos/nodejs-mongo-websockets/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1689-course/diploma/detalle/'
  },
  {
    id: 117,
    name: 'Curso de Next.js',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Complementary', order: 117 },
      { learningPath: 'Frontend with React', order: 20 }
    ],
    courseCategory: 'Technology',
    technologies: ['next'],
    date: '2022-02-24',
    image: 'https://i.imgur.com/cJARyG0.png',
    platformUrl: 'https://platzi.com/cursos/next/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1991-course/diploma/detalle/'
  },
  {
    id: 118,
    name: 'Curso Práctico de Next.js',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Complementary', order: 118 },
      { learningPath: 'JavaScript School', level: 'Advanced', order: 13 },
      { learningPath: 'Frontend with React', order: 22 }
    ],
    courseCategory: 'Technology',
    technologies: ['next', 'axios', 'nextPwa', 'eslint'],
    date: '2022-03-01',
    image: 'https://i.imgur.com/DcwDKGw.png',
    platformUrl: 'https://platzi.com/cursos/nextjs-practico/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2690-course/diploma/detalle/'
  },
  {
    id: 119,
    name: 'Curso Profesional de Next.js',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Complementary', order: 119 },
      { learningPath: 'JavaScript School', level: 'Advanced', order: 14 }
    ],
    courseCategory: 'Technology',
    technologies: ['next', 'axios', 'eslint'],
    date: '2022-03-06',
    image: 'https://i.imgur.com/vVpWDvQ.png',
    platformUrl: 'https://platzi.com/cursos/profesional-nextjs/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2707-course/diploma/detalle/'
  },
  {
    id: 121,
    name: 'Curso de Next.js: Sitios Estáticos y Jamstack',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Complementary', order: 121 },
      { learningPath: 'Frontend with React', order: 23 }
    ],
    courseCategory: 'Technology',
    technologies: ['next', 'typeScript'],
    date: '2022-03-11',
    image: 'https://i.imgur.com/IoAJpzw.png',
    platformUrl: 'https://platzi.com/cursos/nextjs-jamstack/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2362-course/diploma/detalle/'
  },
  {
    id: 122,
    name: 'Curso de Next.js: Optimización y Deploy a Producción',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Complementary', order: 122 },
      { learningPath: 'Frontend with React', order: 24 }
    ],
    courseCategory: 'Technology',
    technologies: ['next', 'typeScript'],
    date: '2022-03-12',
    image: 'https://i.imgur.com/A0xiUX3.png',
    platformUrl: 'https://platzi.com/cursos/nextjs-deploy/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2363-course/diploma/detalle/'
  },
  {
    id: 123,
    name: 'Curso de Next.js: Internacionalización de Aplicaciones Web con i18n',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Complementary', order: 123 },
      { learningPath: 'Frontend with React', order: 25 }
    ],
    courseCategory: 'Technology',
    technologies: ['next', 'typeScript'],
    date: '2022-03-20',
    image: 'https://i.imgur.com/eKHxRbA.png',
    platformUrl: 'https://platzi.com/cursos/nextjs-internacionalizacion/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2364-course/diploma/detalle/'
  },
  {
    id: 124,
    name: 'Curso de Next.js: Optimización y Manejo de Grandes Datasets',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Complementary', order: 124 },
      { learningPath: 'Frontend with React', order: 26 }
    ],
    courseCategory: 'Technology',
    technologies: ['next', 'typeScript'],
    date: '2022-03-20',
    image: 'https://i.imgur.com/L5k0ZYG.png',
    platformUrl: 'https://platzi.com/cursos/nextjs-grandes-datasets/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2427-course/diploma/detalle/'
  },
  {
    id: 125,
    name: 'Curso de Next.js: Autenticación',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Complementary', order: 125 },
      { learningPath: 'Frontend with React', order: 27 }
    ],
    courseCategory: 'Technology',
    technologies: ['next', 'typeScript', 'nextAuth'],
    date: '2022-03-22',
    image: 'https://i.imgur.com/M2fzIFe.png',
    platformUrl: 'https://platzi.com/cursos/nextjs-auth/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2428-course/diploma/detalle/'
  },
  {
    id: 126,
    name: 'Curso de Next.js: Seguridad Web con OWASP',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Web Development School', level: 'Complementary', order: 126 },
      { learningPath: 'Frontend with React', order: 28 }
    ],
    courseCategory: 'Technology',
    technologies: ['next', 'typeScript', 'nextAuth'],
    date: '2022-03-22',
    image: 'https://i.imgur.com/xU6OlvA.png',
    platformUrl: 'https://platzi.com/cursos/nextjs-owasp/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2429-course/diploma/detalle/'
  },
  {
    id: 200,
    name: 'Curso de Progressive Web Apps con React.js',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Frontend with React', order: 19 }],
    courseCategory: 'Technology',
    technologies: ['react', 'nextPwa'],
    date: '2021-10-31',
    image: 'https://i.imgur.com/POhzU9Q.png',
    platformUrl: 'https://platzi.com/cursos/pwa-react-js/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1313-course/diploma/detalle/'
  },
  {
    id: 201,
    name: 'Curso de Introducción a React Native',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Frontend with React', order: 29 },
      { learningPath: 'App Development with React Native', order: 15 }

    ],
    courseCategory: 'Technology',
    technologies: ['react', 'reactNative'],
    date: '2022-03-25',
    image: 'https://i.imgur.com/nkzIr0i.png',
    platformUrl: 'https://platzi.com/cursos/react-native/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2556-course/diploma/detalle/'
  },
  {
    id: 202,
    name: 'Curso Práctico de React Native: Manejo de Listas y Consumo de APIs',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Frontend with React', order: 30 },
      { learningPath: 'App Development with React Native', order: 16 }

    ],
    courseCategory: 'Technology',
    technologies: ['react', 'reactNative'],
    date: '2022-03-28',
    image: 'https://i.imgur.com/wpyP9fu.png',
    platformUrl: 'https://platzi.com/cursos/react-native-listas-apis/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2557-course/diploma/detalle/'
  },
  {
    id: 203,
    name: 'Curso Práctico de React Native: Formularios, Almacenamiento y Deploy',
    institution: 'Platzi',
    learningPath: [
      { learningPath: 'Frontend with React', order: 31 },
      { learningPath: 'App Development with React Native', order: 17 }
    ],
    courseCategory: 'Technology',
    technologies: ['react', 'reactNative'],
    date: '2022-03-29',
    image: 'https://i.imgur.com/5XUKwiP.png',
    platformUrl: 'https://platzi.com/cursos/react-native-formularios-almacenamiento/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2558-course/diploma/detalle/'
  },
  {
    id: 301,
    name: 'Curso Básico de Python',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Backend with Python and Django', order: 3 }],
    courseCategory: 'Technology',
    technologies: ['python'],
    date: '2021-06-02',
    image: 'https://i.imgur.com/uKQMvKN.png',
    platformUrl: 'https://platzi.com/cursos/python/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1937-course/diploma/detalle/'
  },
  {
    id: 801,
    name: 'Curso de Frontend Developer 2019',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Others', order: 1 }],
    courseCategory: 'Technology',
    technologies: ['html', 'css'],
    date: '2021-05-05',
    image: 'https://i.imgur.com/lIIF60t.png',
    platformUrl: '#',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1640-frontend-developer-2019/diploma/detalle/'
  },
  {
    id: 802,
    name: 'Curso de Inglés Básico: Conversación',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Others', order: 2 }],
    courseCategory: 'English',
    date: '2019-05-31',
    image: 'https://i.imgur.com/9XgOQv1.png',
    platformUrl: '#',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1371-ingles-conversacion/diploma/detalle/'
  },
  {
    id: 803,
    name: 'Curso de Inglés Básico: Fundamentos',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Others', order: 3 }],
    courseCategory: 'English',
    date: '2019-05-27',
    image: 'https://i.imgur.com/jZg1i4C.png',
    platformUrl: '',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1358-ingles-basico/diploma/detalle/'
  },
  {
    id: 804,
    name: 'Curso de Inglés Básico: Gramática',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Others', order: 4 }],
    courseCategory: 'English',
    date: '2019-05-30',
    image: 'https://i.imgur.com/VlWoO7Z.png',
    platformUrl: '',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1370-ingles-gramatica/diploma/detalle/'
  },
  {
    id: 805,
    name: 'Curso de Inglés Práctico: Fundamentos',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Others', order: 5 }],
    courseCategory: 'English',
    date: '2021-08-30',
    image: 'https://i.imgur.com/gWZXhLx.png',
    platformUrl: '',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1499-ingles-1/diploma/detalle/'
  },
  {
    id: 806,
    name: 'Curso de Introducción a la Terminal y Línea de Comandos 2019',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Others', order: 6 }],
    courseCategory: 'Technology',
    technologies: ['ubuntuTerminal', 'bash'],
    date: '2021-02-01',
    image: 'https://i.imgur.com/ldNu33P.png',
    platformUrl: '',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1748-terminal-2019/diploma/detalle/'
  },
  {
    id: 807,
    name: 'Curso Profesional de React.js y Redux',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Others', order: 7 }],
    courseCategory: 'Technology',
    technologies: ['react', 'redux'],
    date: '2022-04-02',
    image: 'https://i.imgur.com/Gx2Awo3.png',
    platformUrl: '',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2740-redux-profesional/diploma/detalle/'
  },
  {
    id: 808,
    name: 'Fundamentos de JavaScript 2018',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Others', order: 8 }],
    courseCategory: 'Technology',
    technologies: ['javaScript'],
    date: '2021-05-21',
    image: 'https://i.imgur.com/vyMCgrM.png',
    platformUrl: '',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1339-fundamentos-javascript-2018/diploma/detalle/'
  },
  {
    id: 809,
    name: 'Curso de Travis CI 2020',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Others', order: 9 }],
    courseCategory: 'Technology',
    technologies: ['travis'],
    date: '2021-08-05',
    image: 'https://i.imgur.com/gruyc1o.png',
    platformUrl: 'https://platzi.com/cursos/travis/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1843-travis/diploma/detalle/'
  },
  {
    id: 810,
    name: 'Curso de Tecnología para Gerentes y Directores',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Others', order: 10 }],
    courseCategory: 'Technology',
    date: '2020-07-25',
    image: 'https://i.imgur.com/uNxVccd.png',
    platformUrl: 'https://platzi.com/cursos/tecnologia-gerentes/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1882-tecnologia-gerentes/diploma/detalle/'
  }, {
    id: 811,
    name: 'Curso de Preprocesadores CSS',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'Others', order: 11 }],
    courseCategory: 'Technology',
    technologies: ['css', 'stylus', 'sass'],
    date: '2021-05-27',
    image: 'https://i.imgur.com/EScSjsb.png',
    platformUrl: 'https://platzi.com/cursos/preprocesadores/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1665-course/diploma/detalle/'
  },
  {
    id: 812,
    name: 'React - Guía definitiva: hooks router redux next +Proyectos',
    institution: 'Udemy',
    learningPath: [{ learningPath: 'Others', order: 12 }],
    courseCategory: 'Technology',
    technologies: ['react', 'next', 'formik', 'yup', 'redux', 'reactRouter', 'jest'],
    certificateUrl: 'https://www.udemy.com/certificate/UC-7274fe90-b70f-4a7d-b665-e06ec5047554/',
    platformUrl: 'https://www.udemy.com/course/react-guia-definitiva-hooks-router-redux-next-proyectos/',
    date: '2021-11-28',
    image: 'https://i.imgur.com/sxYXLui.png'
  },
  {
    id: 1002,
    name: 'Curso de Inglés Básico A1 para Principiantes',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Basic', order: 2 }],
    courseCategory: 'English',
    date: '2021-04-19',
    image: 'https://i.imgur.com/duzlswM.png',
    platformUrl: 'Curso de Inglés Básico A1 para Principiantes',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1945-course/diploma/detalle/'
  },
  {
    id: 1003,
    name: 'Taller de Inglés Básico A1 para Principiantes',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Basic', order: 3 }],
    courseCategory: 'English',
    date: '2021-06-08',
    image: 'https://i.imgur.com/1WJGMkg.png',
    platformUrl: 'https://platzi.com/cursos/taller-principiantes/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2005-course/diploma/detalle/'
  },
  {
    id: 1005,
    name: 'Curso de Inglés Básico A1: Presente Simple y Vocabulario Común',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Basic', order: 5 }],
    courseCategory: 'English',
    date: '2021-09-25',
    image: 'https://i.imgur.com/4uuesjo.png',
    platformUrl: 'https://platzi.com/cursos/presente-simple-vocabulario-comun/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2393-course/diploma/detalle/'
  },
  {
    id: 1006,
    name: 'Curso de Inglés Básico A1: Fechas, Horas y Expresiones Simples',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Basic', order: 6 }],
    courseCategory: 'English',
    date: '2021-09-26',
    image: 'https://i.imgur.com/hmlwWOg.png',
    platformUrl: 'https://platzi.com/cursos/fechas-horas-expresiones-simples/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2395-course/diploma/detalle/'
  },
  {
    id: 1007,
    name: 'Curso de Inglés Básico A2: Preguntas y Respuestas',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Basic', order: 7 }],
    courseCategory: 'English',
    date: '2021-10-01',
    image: 'https://i.imgur.com/fdqynn8.png',
    platformUrl: 'https://platzi.com/cursos/preguntas-respuestas/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2394-course/diploma/detalle/'
  },
  {
    id: 1009,
    name: 'Curso de Inglés Básico A2: Artículos y verbos modales',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Basic', order: 9 }],
    courseCategory: 'English',
    date: '2021-09-26',
    image: 'https://i.imgur.com/XvZarHq.png',
    platformUrl: 'https://platzi.com/cursos/articulos-verbosmodales/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2396-course/diploma/detalle/'
  },
  {
    id: 1010,
    name: 'Curso de Inglés Básico A2: Adverbios y Sustantivos',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Basic', order: 10 }],
    courseCategory: 'English',
    date: '2021-10-01',
    image: 'https://i.imgur.com/p4HdJrM.png',
    platformUrl: 'https://platzi.com/cursos/adverbios-sustantivos/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2422-course/diploma/detalle/'
  },
  {
    id: 1012,
    name: 'Curso de Inglés Básico A2: Cantidades y gerundios',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Basic', order: 12 }],
    courseCategory: 'English',
    date: '2021-10-03',
    image: 'https://i.imgur.com/0kcTJ8D.png',
    platformUrl: 'https://platzi.com/cursos/cantidad-gerundios/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2413-course/diploma/detalle/'
  },
  {
    id: 1013,
    name: 'Curso de Inglés Básico A2: Preposiciones y Presente Continuo',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Basic', order: 13 }],
    courseCategory: 'English',
    date: '2021-11-02',
    image: 'https://i.imgur.com/KkeJVie.png',
    platformUrl: 'https://platzi.com/cursos/a2-preposiciones-y-presente-continuo/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2522-course/diploma/detalle/'
  },
  {
    id: 1014,
    name: 'Curso de Inglés Básico A2: Conjunciones y Superlativos',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Basic', order: 14 }],
    courseCategory: 'English',
    date: '2021-10-31',
    image: 'https://i.imgur.com/t8Rfj52.png',
    platformUrl: 'https://platzi.com/cursos/conjunciones-superlativos/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2504-course/diploma/detalle/'
  },
  {
    id: 1015,
    name: 'Curso de Inglés Básico A2: Experiencias Pasadas e Intenciones Futuras',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Basic', order: 15 }],
    courseCategory: 'English',
    date: '2021-01-28',
    image: 'https://i.imgur.com/mf2MwUf.png',
    platformUrl: 'https://platzi.com/cursos/experiencias-pasadas/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2655-course/diploma/detalle/'
  },
  {
    id: 1016,
    name: 'Curso de Inglés Básico para Networking',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Basic', order: 16 }],
    courseCategory: 'English',
    date: '2021-11-04',
    image: 'https://i.imgur.com/E7fiOQ3.png',
    platformUrl: 'https://platzi.com/cursos/ingles-basico-networking/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2526-course/diploma/detalle/'
  },
  {
    id: 1017,
    name: 'Audiocurso de Inglés con Historias: Misterios sin Resolver',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Basic', order: 17 }],
    courseCategory: 'English',
    date: '2021-11-06',
    image: 'https://i.imgur.com/nxPFTNQ.png',
    platformUrl: 'https://platzi.com/cursos/misterio/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2535-course/diploma/detalle/'
  },
  {
    id: 1019,
    name: 'Audiocurso de Inglés para Uso Cotidiano',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Basic', order: 19 }],
    courseCategory: 'English',
    date: '2021-11-06',
    image: 'https://i.imgur.com/OQaIG0T.png',
    platformUrl: 'https://platzi.com/cursos/ingles-uso-cotidiano/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2361-course/diploma/detalle/'
  },
  {
    id: 1020,
    name: 'Curso de Inglés Básico: Descripciones y Comparativos',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Basic', order: 20 }],
    courseCategory: 'English',
    date: '2021-06-16',
    image: 'https://i.imgur.com/f5SUBSl.png',
    platformUrl: 'https://platzi.com/cursos/ingles-basico-descripciones-comparativos/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2196-course/diploma/detalle/'
  },
  {
    id: 1022,
    name: 'Curso de Inglés Básico: Pronunciación',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Basic', order: 22 }],
    courseCategory: 'English',
    date: '2021-06-28',
    image: 'https://i.imgur.com/KFNCtuC.png',
    platformUrl: 'https://platzi.com/cursos/pronunciacion-ingles/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1979-course/diploma/detalle/'
  },
  {
    id: 1023,
    name: 'Curso de Inglés Básico: Escritura',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Basic', order: 23 }],
    courseCategory: 'English',
    date: '2021-08-11',
    image: 'https://i.imgur.com/nrZE0Jh.png',
    platformUrl: 'https://platzi.com/cursos/ingles-basico-escritura/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2256-course/diploma/detalle/'
  },
  {
    id: 1024,
    name: 'Curso de Inglés Básico para Compras',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Basic', order: 24 }],
    courseCategory: 'English',
    date: '2021-04-19',
    image: 'https://i.imgur.com/bkGaVrS.png',
    platformUrl: 'https://platzi.com/cursos/ingles-compras/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2216-course/diploma/detalle/'
  },
  {
    id: 1025,
    name: 'Curso de Inglés Intermedio B1: Expresiones de Tiempo y Cantidad',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Intermediate', order: 25 }],
    courseCategory: 'English',
    date: '2021-11-15',
    image: 'https://i.imgur.com/aNKzQY8.png',
    platformUrl: 'https://platzi.com/cursos/ingles-intermedio-tiempo-cantidad/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2290-course/diploma/detalle/'
  },
  {
    id: 1026,
    name: 'Curso de Inglés Intermedio B1: Conectores y Preferencias',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Intermediate', order: 26 }],
    courseCategory: 'English',
    date: '2021-11-17',
    image: 'https://i.imgur.com/vk9zhId.png',
    platformUrl: 'https://platzi.com/cursos/conectores-preferencias/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2391-course/diploma/detalle/'
  },
  {
    id: 1027,
    name: 'Curso de Inglés Intermedio B1: Verbos Infinitivos y Transitivos',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Intermediate', order: 27 }],
    courseCategory: 'English',
    date: '2021-11-19',
    image: 'https://i.imgur.com/XGCT2uG.png',
    platformUrl: 'https://platzi.com/cursos/infinitivos-transitivos/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2424-course/diploma/detalle/'
  },
  {
    id: 1028,
    name: 'Curso de Inglés Intermedio B1: Presente Perfecto y Preposiciones',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Intermediate', order: 28 }],
    courseCategory: 'English',
    date: '2021-11-21',
    image: 'https://i.imgur.com/cLzPcwf.png',
    platformUrl: 'https://platzi.com/cursos/presente-perfecto/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2417-course/diploma/detalle/'
  },
  {
    id: 1029,
    name: 'Curso de Inglés Intermedio B1: Pronombres y Cláusulas Relativas',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Intermediate', order: 29 }],
    courseCategory: 'English',
    date: '2021-11-24',
    image: 'https://i.imgur.com/evBPDAj.png',
    platformUrl: 'https://platzi.com/cursos/pronombres-clausulas/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2418-course/diploma/detalle/'
  },
  {
    id: 1030,
    name: 'Curso de Inglés Intermedio B1: Adjetivos y Voz Pasiva',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Intermediate', order: 30 }],
    courseCategory: 'English',
    date: '2021-11-25',
    image: 'https://i.imgur.com/TtxAe9S.png',
    platformUrl: 'https://platzi.com/cursos/adjetivos-voz-pasiva/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2464-course/diploma/detalle/'
  },
  {
    id: 1031,
    name: 'Curso de Inglés Intermedio B1: Prefijos y Adjetivos Compuestos',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Intermediate', order: 31 }],
    courseCategory: 'English',
    date: '2021-11-27',
    image: 'https://i.imgur.com/Cyfg3OQ.png',
    platformUrl: 'https://platzi.com/cursos/prefijos-adjetivos/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2414-course/diploma/detalle/'
  },
  {
    id: 1032,
    name: 'Curso de Inglés Intermedio B1: Solicitudes y Pronombres Reflexivos',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Intermediate', order: 32 }],
    courseCategory: 'English',
    date: '2021-11-29',
    image: 'https://i.imgur.com/YsyMviA.png',
    platformUrl: 'https://platzi.com/cursos/solicitudes/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2519-course/diploma/detalle/'
  },
  {
    id: 1033,
    name: 'Curso de Inglés Intermedio B1: Palabras Interrogativas y Verdades Generales',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Intermediate', order: 33 }],
    courseCategory: 'English',
    date: '2021-12-01',
    image: 'https://i.imgur.com/QGQvlpi.png',
    platformUrl: 'https://platzi.com/cursos/palabras-interrogativas/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2505-course/diploma/detalle/'
  },
  {
    id: 1034,
    name: 'Curso de Inglés Intermedio B1: Comparativos Paralelos y Expresiones en el Pasado y Futuro',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Intermediate', order: 34 }],
    courseCategory: 'English',
    date: '2022-02-06',
    image: 'https://i.imgur.com/R5vS46v.png',
    platformUrl: 'https://platzi.com/cursos/comparativos-paralelos/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2567-course/diploma/detalle/'
  },
  {
    id: 1035,
    name: 'Curso de Inglés Intermedio B1: Verbos Causativos y Voz Pasiva',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Intermediate', order: 35 }],
    courseCategory: 'English',
    date: '2021-12-05',
    image: 'https://i.imgur.com/m83N85E.png',
    platformUrl: 'https://platzi.com/cursos/verbos-causativos/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2520-course/diploma/detalle/'
  },
  {
    id: 1036,
    name: 'Taller de Inglés Intermedio B1: Verbos Causativos y Voz Pasiva',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Intermediate', order: 36 }],
    courseCategory: 'English',
    date: '2022-04-06',
    image: 'https://i.imgur.com/39lqph9.png',
    platformUrl: 'https://platzi.com/cursos/taller-verbos-causativos/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2698-course/diploma/detalle/'
  },
  {
    id: 1037,
    name: 'Curso de Inglés Intermedio B1: Estructuras Paralelas y Preguntas Negativas',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Intermediate', order: 37 }],
    courseCategory: 'English',
    date: '2021-12-12',
    image: 'https://i.imgur.com/HGHHBgB.png',
    platformUrl: 'https://platzi.com/cursos/estructuras-paralelas/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2580-course/diploma/detalle/'
  },
  {
    id: 1038,
    name: 'Curso de Inglés Intermedio: Vocabulario y Expresiones',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Intermediate', order: 38 }],
    courseCategory: 'English',
    date: '2022-04-07',
    image: 'https://i.imgur.com/aytC4iA.png',
    platformUrl: 'https://platzi.com/cursos/intermedio-vocabulario-expresiones/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2898-course/diploma/detalle/'
  },
  {
    id: 1039,
    name: 'Curso de Inglés Práctico: Pronunciación',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Intermediate', order: 39 }],
    courseCategory: 'English',
    date: '2021-10-07',
    image: 'https://i.imgur.com/K1lWqqc.png',
    platformUrl: 'https://platzi.com/cursos/ingles-practico-pronuncia/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2002-course/diploma/detalle/'
  },
  {
    id: 1040,
    name: 'Curso de Inglés Intermedio para el Trabajo',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Intermediate', order: 40 }],
    courseCategory: 'English',
    date: '2021-12-15',
    image: 'https://i.imgur.com/xwUr2Ce.png',
    platformUrl: 'https://platzi.com/cursos/ingles-trabajo/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2012-course/diploma/detalle/'
  },
  {
    id: 1041,
    name: 'Curso de Inglés Intermedio: Gramática',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Intermediate', order: 41 }],
    courseCategory: 'English',
    date: '2021-10-16',
    image: 'https://i.imgur.com/KW7Mu4v.png',
    platformUrl: 'https://platzi.com/cursos/intermedio-gramatica/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1989-course/diploma/detalle/'
  },
  {
    id: 1043,
    name: 'Curso de Inglés Intermedio: Conversación',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Intermediate', order: 43 }],
    courseCategory: 'English',
    date: '2021-10-21',
    image: 'https://i.imgur.com/ERt3Wy5.png',
    platformUrl: 'https://platzi.com/cursos/ingles-intermedio-conversacion/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2029-course/diploma/detalle/'
  },
  {
    id: 1044,
    name: 'Curso de Inglés Intermedio: Pronunciación',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Intermediate', order: 44 }],
    courseCategory: 'English',
    date: '2021-12-22',
    image: 'https://i.imgur.com/Hj6eW9L.png',
    platformUrl: 'https://platzi.com/cursos/pronunciacion-intermedio/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2010-course/diploma/detalle/'
  },
  {
    id: 1045,
    name: 'Curso de Inglés Intermedio Alto B2: Oraciones de Relativo',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Advanced', order: 45 }],
    courseCategory: 'English',
    date: '2021-12-26',
    image: 'https://i.imgur.com/pkzKuRa.png',
    platformUrl: 'https://platzi.com/cursos/clausulas-relativas/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2423-course/diploma/detalle/'
  },
  {
    id: 1046,
    name: 'Curso de Inglés Intermedio Alto B2: Intenciones y Comparaciones Complejas',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Advanced', order: 46 }],
    courseCategory: 'English',
    date: '2021-12-29',
    image: 'https://i.imgur.com/Xje0GXf.png',
    platformUrl: 'https://platzi.com/cursos/intenciones-comparaciones/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2415-course/diploma/detalle/'
  },
  {
    id: 1047,
    name: 'Curso de Inglés Intermedio Alto B2: Pasado Perfecto Pasivo y Frases Adverbiales',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Advanced', order: 47 }],
    courseCategory: 'English',
    date: '2022-01-03',
    image: 'https://i.imgur.com/rnDRGNN.png',
    platformUrl: 'https://platzi.com/cursos/pasado-perfecto-pasivo-adverbiales/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2521-course/diploma/detalle/'
  },
  {
    id: 1048,
    name: 'Curso de Inglés Intermedio Alto B2: Condicionales y Situaciones Hipotéticas',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Advanced', order: 48 }],
    courseCategory: 'English',
    date: '2022-01-10',
    image: 'https://i.imgur.com/qypGCe2.png',
    platformUrl: 'https://platzi.com/cursos/condicionales-situaciones-hipoteticas/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2512-course/diploma/detalle/'
  },
  {
    id: 1050,
    name: 'Curso de Inglés Avanzado C1: Escritura y Recursos Linguísticos',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Advanced', order: 50 }],
    courseCategory: 'English',
    date: '2022-01-27',
    image: 'https://i.imgur.com/XVTJmi9.png',
    platformUrl: 'https://platzi.com/cursos/recursos-linguisticos/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2599-course/diploma/detalle/'
  },
  {
    id: 1051,
    name: 'Curso de Inglés Avanzado C1: Habilidades de Comunicación y Discurso Persuasivo',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Advanced', order: 51 }],
    courseCategory: 'English',
    date: '2022-02-02',
    image: 'https://i.imgur.com/Lq9ebt0.png',
    platformUrl: 'https://platzi.com/cursos/habilidades-comunicacion/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2574-course/diploma/detalle/'
  },
  {
    id: 1053,
    name: 'Curso de Inglés Intermedio Alto: Gramática',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Advanced', order: 53 }],
    courseCategory: 'English',
    date: '2022-01-20',
    image: 'https://i.imgur.com/6r3UlRG.png',
    platformUrl: 'https://platzi.com/cursos/gramatica-b2/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2036-course/diploma/detalle/'
  },
  {
    id: 1054,
    name: 'Curso de Inglés Intermedio Alto: Conversación',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Advanced', order: 54 }],
    courseCategory: 'English',
    date: '2022-02-05',
    image: 'https://i.imgur.com/j6uEGfX.png',
    platformUrl: 'https://platzi.com/cursos/inglesb2-conversacion/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2065-course/diploma/detalle/'
  },
  {
    id: 1055,
    name: 'Curso de Inglés Avanzado: Frases Verbales y Expresiones Idiomáticas Comunes',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Advanced', order: 55 }],
    courseCategory: 'English',
    date: '2022-02-09',
    image: 'https://i.imgur.com/2Gvf4Eb.png',
    platformUrl: 'https://platzi.com/cursos/frases-expresiones-comunes/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2627-course/diploma/detalle/'
  },
  {
    id: 1056,
    name: 'Curso de Inglés Avanzado: Frases Verbales y Expresiones Idiomáticas de Negocio',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Advanced', order: 56 }],
    courseCategory: 'English',
    date: '2022-02-11',
    image: 'https://i.imgur.com/HQ6xS4x.png',
    platformUrl: 'https://platzi.com/cursos/frases-expresiones-negocios/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2628-course/diploma/detalle/'
  },
  {
    id: 1057,
    name: 'Curso de Inglés Avanzado: Reducciones y Conectores',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Advanced', order: 57 }],
    courseCategory: 'English',
    date: '2022-03-05',
    image: 'https://i.imgur.com/rInAsIl.png',
    platformUrl: 'https://platzi.com/cursos/reducciones-conectores/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2699-course/diploma/detalle/'
  },
  {
    id: 1058,
    name: 'Curso de Inglés Avanzado: Conversación',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Advanced', order: 58 }],
    courseCategory: 'English',
    date: '2022-02-13',
    image: 'https://i.imgur.com/mgcGdw9.png',
    platformUrl: 'https://platzi.com/cursos/conversacion-avanzado/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2020-course/diploma/detalle/'
  },
  {
    id: 1059,
    name: 'Curso de Inglés Avanzado: Pronunciación',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Advanced', order: 59 }],
    courseCategory: 'English',
    date: '2022-02-23',
    image: 'https://i.imgur.com/lAyoW3b.png',
    platformUrl: 'https://platzi.com/cursos/pronunciacion-avanzado/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2056-course/diploma/detalle/'
  },
  {
    id: 1060,
    name: 'Curso de Inglés Avanzado: Gramática',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Advanced', order: 60 }],
    courseCategory: 'English',
    date: '2022-02-26',
    image: 'https://i.imgur.com/4e4e8IY.png',
    platformUrl: 'https://platzi.com/cursos/avanzado-gramatica/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2068-course/diploma/detalle/'
  },
  {
    id: 1061,
    name: 'Curso de Inglés Avanzado: Trabajo',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Advanced', order: 61 }],
    courseCategory: 'English',
    date: '2022-03-03',
    image: 'https://i.imgur.com/m8FIRNX.png',
    platformUrl: 'https://platzi.com/cursos/ingles-avanzado-trabajo/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2153-course/diploma/detalle/'
  },
  {
    id: 1062,
    name: 'Curso de Inglés para Customer Service',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Complementary', order: 62 }],
    courseCategory: 'English',
    date: '2022-03-10',
    image: 'https://i.imgur.com/Rvycl5E.png',
    platformUrl: 'https://platzi.com/cursos/ingles-customer-service/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2213-course/diploma/detalle/'
  },
  {
    id: 1063,
    name: 'Audiocurso de Inglés para Viajes',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Complementary', order: 63 }],
    courseCategory: 'English',
    date: '2022-02-28',
    image: 'https://i.imgur.com/x4GyWhe.png',
    platformUrl: 'https://platzi.com/cursos/ingles-viajes/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2175-course/diploma/detalle/'
  },
  {
    id: 1064,
    name: 'Curso de Inglés para Entrevistas de Trabajo',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Complementary', order: 64 }],
    courseCategory: 'English',
    date: '2022-03-11',
    image: 'https://i.imgur.com/Jp9mTx6.png',
    platformUrl: 'https://platzi.com/cursos/entrevistas-ingles/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1965-course/diploma/detalle/'
  },
  {
    id: 1065,
    name: 'Curso de Preparación para TOEFL',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Complementary', order: 65 }],
    courseCategory: 'English',
    date: '2022-03-23',
    image: 'https://i.imgur.com/lq1xnv1.png',
    platformUrl: 'https://platzi.com/cursos/preparacion-toefl/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2180-course/diploma/detalle/'
  },
  {
    id: 1066,
    name: 'Curso de Preparación para IELTS',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Complementary', order: 66 }],
    courseCategory: 'English',
    date: '2022-03-25',
    image: 'https://i.imgur.com/xGNYECv.png',
    platformUrl: 'https://platzi.com/cursos/preparacion-ielts/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2162-course/diploma/detalle/'
  },
  {
    id: 1067,
    name: 'Curso de Inglés para Developers [2020]',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Complementary', order: 67 }],
    courseCategory: 'English',
    date: '2022-04-03',
    image: 'https://i.imgur.com/rm2FdMy.png',
    platformUrl: 'https://platzi.com/cursos/ingles-developers-2020/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/1999-course/diploma/detalle/'
  },
  {
    id: 1069,
    name: 'Curso de Inglés para Marketing',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Complementary', order: 69 }],
    courseCategory: 'English',
    date: '2022-04-03',
    image: 'https://i.imgur.com/H92vO6w.png',
    platformUrl: 'https://platzi.com/cursos/ingles-marketing/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2044-course/diploma/detalle/'
  },
  {
    id: 1070,
    name: 'Curso de Inglés para Ventas y Negocios',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Complementary', order: 70 }],
    courseCategory: 'English',
    date: '2022-04-05',
    image: 'https://i.imgur.com/xVMbtfq.png',
    platformUrl: 'https://platzi.com/cursos/ingles-negocios/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2073-course/diploma/detalle/'
  },
  {
    id: 1071,
    name: 'Curso de Inglés para Finanzas',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Complementary', order: 71 }],
    courseCategory: 'English',
    date: '2022-04-05',
    image: 'https://i.imgur.com/sllG32W.png',
    platformUrl: 'https://platzi.com/cursos/ingles-finanzas/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2080-course/diploma/detalle/'
  },
  {
    id: 1072,
    name: 'Curso de Inglés para Startups',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Complementary', order: 72 }],
    courseCategory: 'English',
    date: '2022-04-05',
    image: 'https://i.imgur.com/19OCoPO.png',
    platformUrl: 'https://platzi.com/cursos/ingles-startups/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2190-course/diploma/detalle/'
  },
  {
    id: 1073,
    name: 'Curso de Inglés para Productores',
    institution: 'Platzi',
    learningPath: [{ learningPath: 'English Academy', level: 'Complementary', order: 73 }],
    courseCategory: 'English',
    date: '2022-04-06',
    image: 'https://i.imgur.com/VRIfZGl.png',
    platformUrl: 'https://platzi.com/cursos/ingles-produccion/',
    certificateUrl: 'https://platzi.com/p/onedrako/curso/2181-course/diploma/detalle/'
  }
]
