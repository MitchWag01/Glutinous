import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import { HomeRounded, LiveHelpRounded } from '@mui/icons-material';
import { ThemeProvider, styled } from '@mui/material/styles';
import theme from '../../themes/theme';

const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  width: 500,
  backgroundColor: theme.palette.primary.main, // Use backgroundColor instead of bgcolor
  borderRadius: 10,
  '& .MuiBottomNavigationAction-root': {
    color: theme.palette.secondary.main,
    borderRadius: 5,
    '&.Mui-selected': {
      backgroundColor: 'transparent',
    },
    '&:focus': {
      outline: '2px solid transparent',
    },
  },
  '& .MuiSvgIcon-root': {
    fontSize: '35px',
  },
}));

export default function NavBar() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    console.log(event);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledBottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeRounded sx={{ color: theme.palette.secondary.main }} />}
        />
        <BottomNavigationAction
          label="Recent Searches"
          value="recent_searches"
          icon={<RestoreIcon sx={{ color: theme.palette.secondary.main }} />}
        />
        <BottomNavigationAction
          label="Help"
          value="help"
          icon={<LiveHelpRounded sx={{ color: theme.palette.secondary.main }} />}
        />
      </StyledBottomNavigation>
    </ThemeProvider>
  );
}
