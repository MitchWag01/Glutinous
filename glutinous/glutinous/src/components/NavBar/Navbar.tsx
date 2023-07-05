import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import { HomeRounded, LiveHelpRounded, Search } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../themes/theme';
import { colors } from '@mui/material';

export default function NavBar() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue((prevValue) => (prevValue === newValue ? '' : newValue));
    console.log(value)
  };
  

  return (
    <ThemeProvider theme={theme}>
      <BottomNavigation
        sx={{
          width: 500,
          bgcolor: 'primary.main',
          borderRadius: 10,
          '& .MuiBottomNavigationAction-root': {
            color: 'secondary.main',
            borderRadius: 5,
            '&.Mui-selected': {
              backgroundColor: 'transparent',
            },
            '&:focus': {
              outline: '2px solid transparent', // Set a transparent outline
            },
          },
        }}
        value={value}
        onChange={handleChange}
      >
 <BottomNavigationAction
  label="Home"
  value="home"
  icon={<HomeRounded sx={{ fontSize: '30px', color: 'secondary.main' ? theme.palette.secondary.main : 'inherit' }} />}
  sx={{
    '& .MuiBottomNavigationAction-label': {
      color: value === 'home' ? theme.palette.secondary.main : 'inherit',
    },
  }}
/>
<BottomNavigationAction
  label="Search"
  value="search"
  icon={<Search sx={{ fontSize: '30px', color: 'secondary.main'? theme.palette.secondary.main : 'inherit' }} />}
  sx={{
    '& .MuiBottomNavigationAction-label': {
      color: value === 'search' ? theme.palette.secondary.main : 'inherit',
    },
  }}
/>
<BottomNavigationAction
  label="Recent"
  value="recent_searches"
  icon={<RestoreIcon sx={{ fontSize: '30px', color: 'secondary.main' ? theme.palette.secondary.main : 'inherit' }} />}
  sx={{
    '& .MuiBottomNavigationAction-label': {
      color: value === 'recent_searches' ? theme.palette.secondary.main : 'inherit',
    },
  }}
/>
<BottomNavigationAction
  label="Help"
  value="help"
  icon={<LiveHelpRounded sx={{ fontSize: '30px', color: 'secondary.main' }} />}
  sx={{
    '& .MuiBottomNavigationAction-label': {
      color: value === 'help' ? theme.palette.secondary.main : 'inherit',
    },
  }}
/>


      </BottomNavigation>
    </ThemeProvider>
  );
}
