export type category = 'frontend' | 'backend' | 'mobile' | 'databases' | 'libraries' | 'others'
export type jobCategory = 'Technology' | 'Business' | 'Investments'
export type educationCategory = 'Languages' | 'Technology' | 'Business' | 'Others'

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
  position: string
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
  description: string
  category: educationCategory
  iconUrl: string
  important?: boolean
  progress?: number
  total?: number
}
