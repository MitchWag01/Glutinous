import React from 'react';
import { useState } from 'react';
import Home from './pages/Home';
import { Stack, ThemeProvider } from '@mui/material';
import SearchButton from './components/Buttons/SearchButton';
import theme from './themes/theme';

const App = () => {


  return (
    <ThemeProvider theme={theme}>
    <Stack>
      <Home />
    </Stack>
    </ThemeProvider>
  )
};

export default App;
