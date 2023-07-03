import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { CameraAlt } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material';
import theme from '../../themes/theme';



export default function CameraButton() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(event)
  };

  return (
    <ThemeProvider theme={theme}>
<Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon tabs example"
      TabIndicatorProps={{ style: { backgroundColor: 'transparent' } }} 
      sx={{bgcolor:'primary.main', borderRadius:"10px"}}
      
    >      <Tab icon={<CameraAlt fontSize='large' sx={{color:"secondary.main"}}/>} 
            aria-label="camera" 
            sx={{borderRadius:'10px', color:"transparent"}}
            />
    </Tabs>
    </ThemeProvider>
  );
}
