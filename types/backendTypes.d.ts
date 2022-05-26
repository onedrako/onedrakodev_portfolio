export type category = 'frontend' | 'backend' | 'mobile' | 'databases' | 'libraries' | 'others'

export type TechnologiesData = {
  id: number
  name: string
  description: string
  category: category
  image: string
}

export type ProjectsData = {
  id: number
  name: string
  description: string
  githubUrl: string
  projectUrl: string
  category: category
  images: string[]
  stack: string[],
  libraries: string[],
  environment: string[]
}
