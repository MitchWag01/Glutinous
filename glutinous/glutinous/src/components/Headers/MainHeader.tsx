import { Box } from '@mui/material';


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
        bottom: '90%',
        backgroundImage: 'url(/images/Header.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottomLeftRadius: '1em',
        borderBottomRightRadius: '1em',
        boxShadow: '0px 10px 20px rgba(0,0,0,0.2)',
      }}
    >
    </Box>
  );
};

export default Header;
