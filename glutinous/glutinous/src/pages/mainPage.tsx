import { Stack, Box, ThemeProvider } from '@mui/material';
import theme from '../themes/theme';
import CameraButton from '../components/HomePageComponents/Buttons/CameraButton';

const MainPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Box
          sx={{
            position: 'fixed',
            bottom: '32%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <CameraButton />
        </Box>
      </Stack>
    </ThemeProvider>
  );
};

export default MainPage;