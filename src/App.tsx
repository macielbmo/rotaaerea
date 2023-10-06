import { RouterProvider } from 'react-router-dom'
import { router } from './Router'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './assets/styles/global'
import _default from './assets/styles/themes/default'

function App() {

  return (
    <ThemeProvider theme={_default}>
      <GlobalStyles />
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App
