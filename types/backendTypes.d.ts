export type category = 'frontend' | 'backend' | 'mobile' | 'databases' | 'libraries' | 'others'

export interface IdData{
  id: number
}

export interface DefaultData extends IdData {
  name: string,
  description: string,
  category: category,
}

export interface TechnologiesData extends DefaultData {
  image: string
}

export interface ProjectsData extends DefaultData {
  githubUrl: string,
  projectUrl: string,
  images: string[],
  stack: string[],
  libraries: string[],
  environment: string[]
}

export interface SoftSkillsData extends IdData {
  name: string,
  description: string,
  icon: string
}
