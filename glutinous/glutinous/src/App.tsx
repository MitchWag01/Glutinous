import React from 'react';
import { useState } from 'react';
import Home from './pages/Home';
import { Stack } from '@mui/material';
import SearchButton from './components/Buttons/SearchButton';
import SideBar from './components/SideBar/SideBar';


const App = () => {


  return (
    <Stack>
      <Home />
      <SearchButton />
      <SideBar/>
    </Stack>
  )
};

export default App;
