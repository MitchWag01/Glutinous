import { useState} from 'react';
import { Stack, Box, ThemeProvider } from '@mui/material';
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
        <Box       sx={{
        position: 'absolute',
        top: '60%',
        left: '64%',
        transform: 'translate(-50%, -50%)'
      }}>
             <CameraButton></CameraButton>
        </Box > 
      </Stack>
    </ThemeProvider>
    );
};

export default Home;
