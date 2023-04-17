import { ThemeProvider } from "styled-components";
import { Theme } from './styles/Theme';
import { GlobalStyles } from './styles/Global';
import { QueryClient, QueryClientProvider } from 'react-query';

import CommentPage from './pages/CommentPage';

const queryClient = new QueryClient();


function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <CommentPage />
      </ThemeProvider >
    </QueryClientProvider>

  )
}

export default App
