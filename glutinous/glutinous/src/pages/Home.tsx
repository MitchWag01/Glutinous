import { useState } from 'react';
import { Stack, Box, ThemeProvider } from '@mui/material';
import MainPage from './mainPage';
import theme from '../themes/theme';
import useLockBodyScroll from '../../hooks';
import MyDialog from '../Popup';
import NavBar from '../components/HomePageComponents/NavBar/Navbar';
import SearchPage from './SearchPage';
import Header from '../components/HomePageComponents/Headers/MainHeader';
import Recent from '../pages/Recent'
import Help_page from '../pages/Help'

enum NavButton {
  HOME = 'home',
  SEARCH = 'search',
  RECENT_SEARCHES = 'recent_searches',
  HELP = 'help',
}

const Home = (): JSX.Element => {
  useLockBodyScroll();
  const [selectedButton, setSelectedButton] = useState<NavButton>(NavButton.HOME);
  const [IsScan, setISScan]= useState(true)

  const handleNavButtonClick = (button: NavButton): void => {
    if (selectedButton==NavButton.SEARCH){
      setISScan(!IsScan)
      setSelectedButton(button)
    }
    else{
    setSelectedButton(button);}
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Header />
        {selectedButton === NavButton.SEARCH && IsScan && <SearchPage searchlist={[]} />}
        {selectedButton === NavButton.SEARCH && !IsScan && <MainPage />}
        {selectedButton === NavButton.RECENT_SEARCHES && <Recent ingredientsList=''/>}
        {selectedButton === NavButton.HELP && <Help_page />}
        <MyDialog
          page1Text="Disclaimer: This app is a project being developed by students and does not guarantee that any food is gluten-free. The information provided is for informational purposes only and should not be considered as professional advice. The app aims to make it easier to find gluten in certain foods, but accuracy is not guaranteed. Always consult with a healthcare professional or a qualified expert for accurate and personalized dietary guidance."
          page2Text="By clicking the Confirm button, you agree to the conditions stated on the prior page and understand the creators of this CANNOT guarantee foods to be gluten free. For more information click on the <?> button."
        />
        <Box
          sx={{
            position: 'fixed',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <NavBar onNavButtonClick={handleNavButtonClick} selectedButton={selectedButton} />
        </Box>
      </Stack>
    </ThemeProvider>
  );
};

export default Home;
