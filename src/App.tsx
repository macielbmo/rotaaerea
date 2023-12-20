import { useState, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'

// Estilização
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './assets/styles/global'

// Temas do site
import { Theme } from './contexts/ThemeContext'
import light from './assets/styles/themes/light'
import dark from './assets/styles/themes/dark'
import { getTheme, setTheme } from './assets/styles/themes/configTheme'

function App() {
  const userTheme = getTheme();

  useEffect(() => {
    if (!userTheme) {
      setTheme('light');
    }
  }, [userTheme]);

  const [themeActive, setThemeActive] = useState<string | null>(userTheme)

  function toggleTheme() {
    setThemeActive((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <Theme themeActive={toggleTheme}>
      <ThemeProvider theme={themeActive === 'light' ? light : dark}>
          <GlobalStyles />
          <RouterProvider router={router}/>
      </ThemeProvider>
    </Theme>
  )
}

export default App
