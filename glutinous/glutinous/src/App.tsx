import React from 'react';
import { useState } from 'react';
import Home from './pages/Home';
import { Stack } from '@mui/material';
import SearchButton from './components/Buttons/SearchButton';

const App = () => {


  return (
    <Stack>
      <Home />
      <SearchButton />
    </Stack>
  )
};

export default App;
