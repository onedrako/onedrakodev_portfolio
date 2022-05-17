import { useState, createContext, ReactNode } from 'react'

import { defineGlobalTheme } from '@utils/defineGlobalTheme'
import { darkBackgroundColor, darkTextColor, darkModalBackgroundColor } from '@utils/constants'

import { ThemeColors, Theme } from '@customTypes/types'

type ThemeContextType = {
  theme: ThemeColors,
  toggleTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType>(
  {
    theme: {
      backgroundColor: darkBackgroundColor,
      textColor: darkTextColor,
      modalBackgroundColor: darkModalBackgroundColor
    },
    toggleTheme: (theme: Theme): void => {}
  }
)

const ThemeProvider = ({ children }: {children: ReactNode}) => {
  const [theme, setTheme] = useState<ThemeColors>({
    backgroundColor: darkBackgroundColor,
    textColor: darkTextColor,
    modalBackgroundColor: darkModalBackgroundColor
  })

  const toggleTheme = (userThemePreference: Theme): void => {
    setTheme(defineGlobalTheme(userThemePreference))
  }

  return (
    <ThemeContext.Provider value={
      {
        theme,
        toggleTheme
      }
    }>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }