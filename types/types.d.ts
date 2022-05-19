// STYLES THEMES
export enum Theme {
  Dark = 'dark',
  Light = 'light'
}
export interface ThemeColors {
  backgroundColor: string
  textColor: string
  modalBackgroundColor: string
  activeElementColor: string
}

// HEADER / NAVIGATION

export enum TabNavOptions {
  Home = 'Home',
  Portfolio = 'Portfolio',
  Certifications = 'Certifications',
  Personal = 'Personal',
  About = 'About',
}

export interface ElementSelectedOnTabNav {
  home: boolean
  portfolio: boolean
  certifications: boolean
  personal: boolean
  about: boolean
}

// HOME
export interface TechnologiesSelector {
  all: boolean
  frontend: boolean
  backend: boolean
  mobile: boolean
  databases: boolean
  others: boolean
}
