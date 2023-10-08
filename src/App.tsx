import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './assets/styles/global'

import { Theme } from './contexts/ThemeContext'
import light from './assets/styles/themes/light'
import dark from './assets/styles/themes/dark'

function App() {
  const [themeActive, setThemeActive] = useState(light)

  function ThemeActive() {
    setThemeActive(themeActive.title === 'light' ? dark : light)
    console.log(themeActive)
  }

  return (
    <Theme themeActive={ThemeActive}>
      <ThemeProvider theme={themeActive}>
          <GlobalStyles />
          <RouterProvider router={router}/>
      </ThemeProvider>
    </Theme>
  )
}

export default App
