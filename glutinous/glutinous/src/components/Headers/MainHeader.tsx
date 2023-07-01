import React from 'react';
import { Box, Typography } from '@mui/material';
import { BrowserRouter as Router, Route,Routes, Link} from "react-router-dom";
// import Contact from '../../pages/Contact';
// import Home from '../../pages/Home';
// import Scan from'../../pages/Scan';
// import App from '../../App';
// import SideBar from '../SideBar/SideBar';
import MenuButton from '../Buttons/MenuButton';

const Header = () => {
  return (
    
    <Box
      sx={{
        padding: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: '80%',
        backgroundImage: 'url(/images/CroppedWheat.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottomLeftRadius: '1em',
        borderBottomRightRadius: '1em',
        boxShadow: '0px 10px 20px rgba(0,0,0,0.2)',
      }}
    >
      {/* <Router>
        <SideBar />
        <Routes>
        <Route path='../../App' element={<App />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Scan' element={<Scan />} />
        </Routes>
      </Router> */}
      <Typography
        variant="h4"
        component="h1"
        sx={{
          textShadow:
            '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
          color: '#fff',
          fontSize: '3em',
        }}
      >
        GLUTINOUS
      </Typography>
      <MenuButton>
      
      </MenuButton>
    </Box>
  );
};

export default Header;
