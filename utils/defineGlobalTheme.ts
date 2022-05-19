import {
  darkBackgroundColor,
  darkTextColor,
  lightBackgroundColor,
  lightTextColor,
  darkModalBackgroundColor,
  lightModalBackgroundColor,
  darkActiveElement,
  lightActiveElement
} from './constants'
import { ThemeColors } from '@customTypes/types'

export const defineGlobalTheme = (theme: string): ThemeColors => {
  if (theme === 'dark') {
    return {
      backgroundColor: darkBackgroundColor,
      textColor: darkTextColor,
      modalBackgroundColor: darkModalBackgroundColor,
      activeElementColor: darkActiveElement
    }
  } else {
    return {
      backgroundColor: lightBackgroundColor,
      textColor: lightTextColor,
      modalBackgroundColor: lightModalBackgroundColor,
      activeElementColor: lightActiveElement
    }
  }
}
