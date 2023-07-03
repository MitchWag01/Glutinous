import React from 'react';
import ClickableButton from '../components/Buttons/ClickableButton';
import Header from '../components/Headers/MainHeader';
import { useState } from 'react';
import { Stack, Box } from '@mui/material';
import MenuButton from '../components/Buttons/MenuButton';
import ScanPage from './Scan';
import SearchPage from './SearchPage';
import CameraButton from '../components/Buttons/CameraButton';

const Home = () => {
  const [ScanState, setScanState] = useState(false);
  const [SearchState, setSearchState] = useState(false);
  const [searchList, setSearchList] = useState<string[]>([]); // Define an array to hold the search items

  return (
    <Stack>
      <Header></Header>
      <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
        <MenuButton setScanState={setScanState} setSearchState={setSearchState} />
      </Box>
      {ScanState && <ScanPage ingredientsList="Jesse Likes a reasonable amount of bread, too bad some people just cant handle it" />}
      {SearchState && <SearchPage searchlist={searchList} />} 
      <Box sx={{position: 'absolute', bottom: 0, left:'50%'}}>
      <CameraButton></CameraButton>
      </Box>
    </Stack>
  );
};

export default Home;
