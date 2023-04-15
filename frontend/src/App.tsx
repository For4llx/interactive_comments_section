import { ThemeProvider } from "styled-components";
import { Theme } from './styles/Theme';
import { GlobalStyles } from './styles/Global';


function App() {

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
    </ThemeProvider >
  )
}

export default App
