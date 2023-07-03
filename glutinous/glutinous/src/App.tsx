import React, { useState } from 'react';
import { Box, Button, Stack, ThemeProvider } from '@mui/material';
import Home from './pages/Home';
import SearchButton from './components/Buttons/SearchButton';
import theme from './themes/theme';




const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Home/>
      </Stack>
    </ThemeProvider>
  )
};

export default App;
