import { darkBackgroundColor, darkTextColor, lightBackgroundColor, lightTextColor, darkModalBackgroundColor, lightModalBackgroundColor } from './constants'
import { ThemeColors } from '@customTypes/types'

export const defineGlobalTheme = (theme: string): ThemeColors => {
  if (theme === 'dark') {
    return {
      backgroundColor: darkBackgroundColor,
      textColor: darkTextColor,
      modalBackgroundColor: darkModalBackgroundColor
    }
  } else {
    return {
      backgroundColor: lightBackgroundColor,
      textColor: lightTextColor,
      modalBackgroundColor: lightModalBackgroundColor
    }
  }
}
