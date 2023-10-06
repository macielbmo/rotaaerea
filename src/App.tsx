
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './assets/styles/global'
import _default from './assets/styles/themes/default'

function App() {

  return (
    <ThemeProvider theme={_default}>
      <GlobalStyles />
      <h1>Rota Aérea</h1>
    </ThemeProvider>
  )
}

export default App
