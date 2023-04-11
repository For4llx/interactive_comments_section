import React, { useState, useEffect } from 'react'; import { ThemeProvider } from "styled-components";
import { Theme } from './styles/Theme';
import { GlobalStyles } from './styles/Global';
import Comments from "./pages/Comments";

function App() {

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Comments />
    </ThemeProvider >
  )
}

export default App

/*
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <CommentModal
        buttonDelete={<AppButton large delete>Yes, Delete</AppButton>}
        buttonCancel={<AppButton large cancel>No, Cancel</AppButton>}
      />
      <AppContainer>
        <CommentAdd
          username="amyrobinson"
          picture="./assets/images/avatars/image-amyrobson.png"
          button={<AppButton>Send</AppButton>}
        />
      </AppContainer>
    </ThemeProvider >
*/