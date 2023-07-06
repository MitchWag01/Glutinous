import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import { HomeRounded, LiveHelpRounded, Search } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../themes/theme';

interface NavBarProps {
  onNavButtonClick: (button: NavButton) => void;
  selectedButton: NavButton;
}

enum NavButton {
  HOME = 'home',
  SEARCH = 'search',
  RECENT_SEARCHES = 'recent_searches',
  HELP = 'help',
}

const NavBar: React.FC<NavBarProps> = ({ onNavButtonClick, selectedButton }) => {
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    onNavButtonClick(newValue as NavButton);
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
        value={selectedButton}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Home"
          value={NavButton.HOME}
          icon={<HomeRounded sx={{ fontSize: '30px', color: 'secondary.main' }} />}
          sx={{
            '& .MuiBottomNavigationAction-label': {
              color: selectedButton === NavButton.HOME ? theme.palette.secondary.main : 'inherit',
            },
          }}
        />
        <BottomNavigationAction
          label="Search"
          value={NavButton.SEARCH}
          icon={<Search sx={{ fontSize: '30px', color: 'secondary.main' }} />}
          sx={{
            '& .MuiBottomNavigationAction-label': {
              color: selectedButton === NavButton.SEARCH ? theme.palette.secondary.main : 'inherit',
            },
          }}
        />
        <BottomNavigationAction
          label="Recent"
          value={NavButton.RECENT_SEARCHES}
          icon={<RestoreIcon sx={{ fontSize: '30px', color: 'secondary.main' }} />}
          sx={{
            '& .MuiBottomNavigationAction-label': {
              color: selectedButton === NavButton.RECENT_SEARCHES ? theme.palette.secondary.main : 'inherit',
            },
          }}
        />
        <BottomNavigationAction
          label="Help"
          value={NavButton.HELP}
          icon={<LiveHelpRounded sx={{ fontSize: '30px', color: 'secondary.main' }} />}
          sx={{
            '& .MuiBottomNavigationAction-label': {
              color: selectedButton === NavButton.HELP ? theme.palette.secondary.main : 'inherit',
            },
          }}
        />
      </BottomNavigation>
    </ThemeProvider>
  );
};

export default NavBar;
