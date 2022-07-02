import {
  darkBackgroundColor,
  darkTextColor,
  darkModalBackgroundColor,
  darkActiveElement,
  darkTitleText,

  lightBackgroundColor,
  lightTextColor,
  lightModalBackgroundColor,
  lightActiveElement,
  lightTitleText
} from './constants'
import { ThemeColors } from '@customTypes/types'

export const defineGlobalTheme = (theme: string): ThemeColors => {
  if (theme === 'dark') {
    return {
      backgroundColor: darkBackgroundColor,
      textColor: darkTextColor,
      modalBackgroundColor: darkModalBackgroundColor,
      activeElementColor: darkActiveElement,
      titleText: darkTitleText
    }
  } else {
    return {
      backgroundColor: lightBackgroundColor,
      textColor: lightTextColor,
      modalBackgroundColor: lightModalBackgroundColor,
      activeElementColor: lightActiveElement,
      titleText: lightTitleText
    }
  }
}
