import React from 'react';
import { useState } from 'react';
import { Stack, Box, ThemeProvider } from '@mui/material';
import MenuButton from '../components/Buttons/MenuButton';
import ScanPage from './Scan';
import SearchPage from './SearchPage';
import CameraButton from '../components/Buttons/CameraButton';
import theme from '../themes/theme';
import NavBar from '../components/NavBar/Navbar';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { AlignHorizontalCenter } from '@mui/icons-material';
import MainCameraButton from '../components/Buttons/MainCameraButton';

const Home = () => {
  const [ScanState, setScanState] = useState(false);
  const [SearchState, setSearchState] = useState(false);
  const [searchList, setSearchList] = useState<string[]>([]);

  return (
    <ThemeProvider theme={theme}>
      <Stack>
  
        {ScanState && <ScanPage ingredientsList="Jesse Likes a reasonable amount of bread, too bad some people just cant handle it" />}
        {SearchState && <SearchPage searchlist={searchList} />} 
        
        <Box sx={{ position: 'fixed',bottom: 0, left: '41%', right:'60%' }}>
          <MainCameraButton/>
          <NavBar />
        </Box>
      </Stack>
    </ThemeProvider>
  );
};

export default Home;
