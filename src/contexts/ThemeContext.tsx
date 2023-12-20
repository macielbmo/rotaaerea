import { createContext, ReactNode, useState } from 'react'
import { setTheme } from '../assets/styles/themes/configTheme'

interface ThemeContextData {
  handleTheme: () => void
  checked: boolean
  themeSelect: string
}

interface ThemeProviderProps {
  children: ReactNode
  themeActive: () => void
}

export const ThemeContext = createContext({} as ThemeContextData)

export function Theme({children, themeActive}: ThemeProviderProps) {
  const [themeSelect, setThemeSlect] = useState('light')
  const [checked, setChecked] = useState(true)

  const handleTheme = () => {
    setThemeSlect(themeSelect === 'light' ? 'dark' : 'light')
    setChecked(!checked)
    themeActive()
    setTheme(themeSelect)
  }

  return(
    <ThemeContext.Provider value={{ themeSelect, handleTheme, checked }}>
      {children}
    </ThemeContext.Provider>
  )
}
