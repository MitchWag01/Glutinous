import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import { HomeRounded, LiveHelpRounded } from '@mui/icons-material';

export default function NavBar() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
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
        '& .MuiSvgIcon-root': {
          fontSize: '35px',
        },
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeRounded sx={{ color: 'secondary.main' }} />}
      />
      <BottomNavigationAction
        label="Recent Searches"
        value="recent_searches"
        icon={<RestoreIcon sx={{ color: 'secondary.main' }} />}
      />
      <BottomNavigationAction
        label="Help"
        value="help"
        icon={<LiveHelpRounded sx={{ color: 'secondary.main' }} />}
      />
    </BottomNavigation>
  );
}
