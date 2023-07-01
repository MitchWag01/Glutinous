import React from 'react';
import ClickableButton from '../components/Buttons/ClickableButton';
import Header from '../components/Headers/MainHeader';
import { useState } from 'react';
import { Stack, Box } from '@mui/material';
import MenuButton from '../components/Buttons/MenuButton';
import ScanPage from './Scan';

const Home = () => {
  const [ScanState, setScanState] = useState(false);

  return (
    <Stack>
      <Header></Header>
      <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
        <MenuButton setScanState={setScanState} />
      </Box>
      {ScanState && <ScanPage ingredientsList='Bread MoreBread Jesse likes bread!'/>}
    </Stack>
  );
};

export default Home;
