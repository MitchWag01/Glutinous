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
        <MyDialog
            page1Text="Disclaimer: This app is a project being developed by students and does not guarantee that any food is gluten-free. The information provided is for informational purposes only and should not be considered as professional advice. The app aims to make it easier to find gluten in certain foods, but accuracy is not guaranteed. Always consult with a healthcare professional or a qualified expert for accurate and personalized dietary guidance."
            page2Text="By clicking the Confirm button, you agree to the conditions stated on the prior page and understand the creators of this CANNOT guarantee foods to be gluten free. For more information click on the <?> button."
      />
      </Stack>
    </ThemeProvider>
  )
};

export default App;
