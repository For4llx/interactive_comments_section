import { ThemeProvider } from "styled-components";
import { Theme } from './styles/Theme';
import { GlobalStyles } from './styles/Global';
import CommentPage from './pages/CommentPage';


function App() {

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <CommentPage />
    </ThemeProvider >
  )
}

export default App
