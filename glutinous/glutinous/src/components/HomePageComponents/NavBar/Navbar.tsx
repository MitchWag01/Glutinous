import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../themes/theme';
import { LiveHelpRounded, Search, History, Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';

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
  const handleChange = (_event: React.SyntheticEvent, newValue: NavButton) => {
    onNavButtonClick(newValue);
  };

 
  const [firstClick,setFirstclick]= React.useState(true);


  const renderIcon = () => {
    if(firstClick){
      return <img src="./images/LogoMakr-2ND0aW.png" style={{ width: '30px', height: '30px' }} />
    }
    else{
      return <Search sx={{ fontSize: '30px', color: 'secondary.main' }} />
    }
  };

   function SwitchIcon() {
    setFirstclick(!firstClick)
  }



  return (
    <ThemeProvider theme={theme}>
      <BottomNavigation
        sx={{
          width: '100%',
          bgcolor: 'primary.main',
          borderRadius: 10,
          '& .MuiBottomNavigationAction-root': {
            color: 'secondary.main',
            borderRadius: 5,
            '&.Mui-selected': {
              backgroundColor: 'transparent',
            },
            '&:focus': {
              outline: 'none',
            },
          },
        }}
        value={selectedButton}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Menu"
          value={NavButton.HOME}
          icon={<Menu sx={{ fontSize: `30px`, color: 'secondary.main' }} />}
          component={Link}
          to="/menu"
          sx={{
            '& .MuiBottomNavigationAction-label': {
              color: selectedButton === NavButton.HOME ? theme.palette.secondary.main : 'inherit',
            },
          }}
        />
        <BottomNavigationAction
          label="Search"
          value={NavButton.SEARCH}
          icon={renderIcon()}
          onClick={SwitchIcon}
          sx={{
            '& .MuiBottomNavigationAction-label': {
              color: selectedButton === NavButton.SEARCH ? theme.palette.secondary.main : 'inherit',
            },
          }}
        />
        <BottomNavigationAction
          label="Recent"
          value={NavButton.RECENT_SEARCHES}
          icon={<History sx={{ fontSize: `30px`, color: 'secondary.main' }} />}
          sx={{
            '& .MuiBottomNavigationAction-label': {
              color: selectedButton === NavButton.RECENT_SEARCHES ? theme.palette.secondary.main : 'inherit',
            },
          }}
        />
        <BottomNavigationAction
          label="Help"
          value={NavButton.HELP}
          icon={<LiveHelpRounded sx={{ fontSize: `30px`, color: 'secondary.main' }} />}
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