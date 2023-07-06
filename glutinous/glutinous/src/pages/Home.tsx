import { Stack, Box, ThemeProvider } from '@mui/material';
import theme from '../themes/theme';
import CameraButton from '../components/Buttons/CameraButton';

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack>        
        <Box       sx={{
        position: 'absolute',
        top: '60%',
        left: '64%',
        transform: 'translate(-50%, -50%)'
      }}>
             <CameraButton></CameraButton>
        </Box > 
      </Stack>
    </ThemeProvider>
    );
};

export default Home;