import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../themes/theme';
import { HomeRounded, LiveHelpRounded, Search, History } from '@mui/icons-material';

enum NavButton {
  HOME = 'home',
  SEARCH = 'search',
  RECENT_SEARCHES = 'recent_searches',
  HELP = 'help',
}

interface NavBarProps {
  onNavButtonClick: (button: NavButton) => void;
  selectedButton: NavButton;
}

const NavBar: React.FC<NavBarProps> = ({ onNavButtonClick, selectedButton }) => {
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    onNavButtonClick(newValue as NavButton);
  };

  const renderIcon = (button: NavButton) => {
    const iconSize = 30; // Adjust the size as desired
    if (button === NavButton.HOME && selectedButton === NavButton.HOME) {
      return <img src="../../../public/images/LogoMakr-2ND0aW.png" alt="Home" style={{ width: `${iconSize}px`, height: `${iconSize}px` }} />;
    } else if (button === NavButton.SEARCH && selectedButton === NavButton.SEARCH) {
      return <img src="../../../public/images/LogoMakr-2ND0aW.png" alt="Search" style={{ width: `${iconSize}px`, height: `${iconSize}px` }} />;
    } else if (button === NavButton.RECENT_SEARCHES && selectedButton === NavButton.RECENT_SEARCHES) {
      return <img src="../../../public/images/LogoMakr-2ND0aW.png" alt="Recent" style={{ width: `${iconSize}px`, height: `${iconSize}px` }} />;
    } else if (button === NavButton.HELP && selectedButton === NavButton.HELP) {
      return <img src="../../../public/images/LogoMakr-2ND0aW.png" alt="Help" style={{ width: `${iconSize}px`, height: `${iconSize}px` }} />;
    }

    switch (button) {
      case NavButton.HOME:
        return <HomeRounded sx={{ fontSize: `${iconSize}px`, color: 'secondary.main' }} />;
        case NavButton.SEARCH:
          return <Search sx={{ fontSize: `${iconSize}px`, color: 'secondary.main' }} />;
          case NavButton.RECENT_SEARCHES:
            return <History sx={{ fontSize: `${iconSize}px`, color: 'secondary.main' }} />;

      case NavButton.HELP:
        return <LiveHelpRounded sx={{ fontSize: `${iconSize}px`, color: 'secondary.main' }} />;
        default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <BottomNavigation
        sx={{
          width: 400,
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
          pl:2,pr:2
        }}
        value={selectedButton}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Home"
          value={NavButton.HOME}
          icon={renderIcon(NavButton.HOME)}
          sx={{
            '& .MuiBottomNavigationAction-label': {
              color: selectedButton === NavButton.HOME ? theme.palette.secondary.main : 'inherit',
            },
          }}
        />
        <BottomNavigationAction
          label="Search"
          value={NavButton.SEARCH}
          icon={renderIcon(NavButton.SEARCH)}
          sx={{
            '& .MuiBottomNavigationAction-label': {
              color: selectedButton === NavButton.SEARCH ? theme.palette.secondary.main : 'inherit',
            },
          }}
        />
        <BottomNavigationAction
          label="Recent"
          value={NavButton.RECENT_SEARCHES}
          icon={renderIcon(NavButton.RECENT_SEARCHES)}
          sx={{
            '& .MuiBottomNavigationAction-label': {
              color: selectedButton === NavButton.RECENT_SEARCHES ? theme.palette.secondary.main : 'inherit',
            },
          }}
        />
        <BottomNavigationAction
          label="Help"
          value={NavButton.HELP}
          icon={renderIcon(NavButton.HELP)}
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
