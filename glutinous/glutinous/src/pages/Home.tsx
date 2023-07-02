import React from 'react';
import ClickableButton from '../components/Buttons/ClickableButton';
import Header from '../components/Headers/MainHeader';
import { useState } from 'react';
import { Stack, Box } from '@mui/material';
import MenuButton from '../components/Buttons/MenuButton';
import ScanPage from './Scan';
import SearchPage from './Searchpage'

const Home = () => {
  const [ScanState, setScanState] = useState(false);
  const [SearchState, setSearchState] = useState(false)

  return (
    <Stack>
      <Header></Header>
      <Box sx={{ position: 'absolute', top: 0, right: 0, }}>
        <MenuButton setScanState={setScanState} setSearchState={setSearchState}/>
      </Box>
      {ScanState && <ScanPage ingredientsList='Jesse Likes a reasonable amount of bread, too bad some people just cant handle it'/>}
      {SearchState &&< SearchPage searchlist='="There is currently nothing right now'/>}
    </Stack>
  );
};

export default Home;
