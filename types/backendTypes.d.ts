export type category = 'frontend' | 'backend' | 'mobile' | 'databases' | 'libraries' | 'others'

export type TechnologiesData = {
  id: number
  name: string
  description: string
  category: category
  image: string
}
