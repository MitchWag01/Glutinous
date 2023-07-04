import {Stack, ThemeProvider } from '@mui/material';
import Home from './pages/Home';
import theme from './themes/theme';
import useLockBodyScroll from '../hooks'
import MyDialog from './Popup';



const App = () => {
  useLockBodyScroll();

  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Home/>
        <MyDialog />
      </Stack>
    </ThemeProvider>
  )
};

export default App;
