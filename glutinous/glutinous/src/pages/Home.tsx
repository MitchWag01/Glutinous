import { useState} from 'react';
import { Stack, Box, ThemeProvider } from '@mui/material';
import ScanPage from './Scan';
import SearchPage from './SearchPage';
import theme from '../themes/theme';
import NavBar from '../components/NavBar/Navbar';
import CameraButton from '../components/Buttons/CameraButton';
import Header from '../components/Headers/MainHeader';


const Home = () => {


  const [ScanState, setScanState] = useState(false);
  const [SearchState, setSearchState] = useState(false);
  const [searchList, setSearchList] = useState<string[]>([]);

  // setting the state for user warning and acknowledgement




  console.log(setScanState)
  console.log(setSearchList)
  console.log(setSearchState)


    //onClick={callOpenAIAPI}
  

  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Header></Header>
  
        {ScanState && <ScanPage ingredientsList="Jesse's bread preferences are a terror to our society as he likes raisin bread..." />}
        {SearchState && <SearchPage searchlist={searchList} />} 
        
        <Box       sx={{
        position: 'absolute',
        top: '50%',
        left: '60%',
        transform: 'translate(-50%, -50%)'
      }}>
        <CameraButton></CameraButton>
        </Box >
        <Box   sx={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)'
              }}>
          <NavBar />
        </Box>
      </Stack>
    </ThemeProvider>
    );
};

export default Home;
