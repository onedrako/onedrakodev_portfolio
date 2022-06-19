import { CertificatesListTitle } from './types'

export type category = 'frontend' | 'backend' | 'mobile' | 'databases' | 'libraries' | 'others'
export type jobCategory = 'Technology' | 'Business' | 'Investments'
export type educationCategory = 'Languages' | 'Technology' | 'Business' | 'Others'
export type courseCategory = 'English' | 'Technology' | 'Business' | 'Others'

export type route =
  'Web Development School' |
  'Backend Development with Node.js' |
  'English Academy' |
  'App Development with React Native' |
  'Frontend with React' |
  'JavaScript School' |
  'Backend with Python and Django' |
  'Others'

export type LearningPath = {
    learningPath: route,
    order: number,
    level?: 'Basic' | 'Intermediate' | 'Advanced' | 'Complementary'
  }
export interface IdData{
  id: number
}

export interface DefaultData extends IdData {
  name: string
  description: string
  category: category
}

export interface TechnologiesData extends DefaultData {
  image: string
}

export interface ProjectsData extends DefaultData {
  githubUrl: string
  projectUrl: string
  images: string[]
  stack: string[]
  libraries: string[]
  environment: string[]
}

export interface SoftSkillsData extends IdData {
  name: string
  description: string
  icon: string
}

export interface LaboralExperienceData extends IdData {
  institution: string
  title: string
  startDate: string
  endDate: string
  description: string
  category: jobCategory
  iconUrl: string
  important?: boolean
}

export interface EducationData extends IdData {
  institution: string
  startDate: string
  endDate: string
  title: string
  category: educationCategory
  iconUrl: string
  important?: boolean
  progress?: number
  total?: number
}

export interface CertificationsData extends IdData {
  name: string
  institution: string
  learningPath: LearningPath[]
  technologies?: string[],
  courseCategory: courseCategory
  date: string
  image: string
  courseUrl: string
  certificateUrl: string
}

export interface SchoolsAndRoutesData extends IdData {
  name: route
  institution: string
  date: string
  image: string
  technologies?: string[]
  routeUrl: string
  certificateUrl: string
}

export type CertificatesToRenderType = {apiUrl:string, title: route | CertificatesListTitle, type: string}
