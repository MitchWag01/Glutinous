import {Stack, ThemeProvider } from '@mui/material';
import Home from './pages/Home';
import theme from './themes/theme';




const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Home/>
      </Stack>
    </ThemeProvider>
  )
};

export default App;
