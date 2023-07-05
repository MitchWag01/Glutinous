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
        backgroundImage: 'url(/images/HeaderAlternate.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottomLeftRadius: '1em',
        borderBottomRightRadius: '1em',
        boxShadow: '0px 10px 20px rgba(0,0,0,0.2)',
      }}
    >
      {/* <Typography
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
      </Typography> */}
    </Box>
  );
};

export default Header;
