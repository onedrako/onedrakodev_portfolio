import { CategoryColorsForTimeLine } from '@utils/constants'

export const defineColorPoint = (category: string) => {
  return CategoryColorsForTimeLine[category as keyof typeof CategoryColorsForTimeLine]
}
