import { darkBackgroundColor, darkTextColor, lightBackgroundColor, lightTextColor } from './constants'
import { ThemeColors } from '@customTypes/types'

export const defineGlobalTheme = (theme: string): ThemeColors => {
  if (theme === 'dark') {
    return {
      backgroundColor: darkBackgroundColor,
      textColor: darkTextColor
    }
  } else {
    return {
      backgroundColor: lightBackgroundColor,
      textColor: lightTextColor
    }
  }
}
