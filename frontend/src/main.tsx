import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "styled-components";
import { Theme } from './styles/Theme';
import { GlobalStyles } from './styles/Global';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


function App() {

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
    </ThemeProvider >
  )
}
