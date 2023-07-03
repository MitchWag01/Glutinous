import { AccountCircle, AirlineSeatReclineNormalTwoTone } from '@mui/icons-material'
import { Box, Stack, ThemeProvider, Typography } from '@mui/material'
import React, {useState} from 'react'
import {TextField} from '@mui/material'
import { SearchRounded } from '@mui/icons-material'
import theme from '../themes/theme'

interface SearchProp{
    searchlist: string[]
}

const SearchPage: React.FC<SearchProp> = ({searchlist})=>{
    const [searchText, setSearchText] = useState('');
    console.log(searchlist);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && searchText.trim() !== '') {
      setSearchText('');
      // Add searchText to the searchlist array
      searchlist.push(searchText);
    }
  };
    return ( 
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', bgcolor:'primary.main' , borderRadius:'10px', height:'50px'}}>
        <SearchRounded  sx={{ color: 'action.active', mr: 1, my: 0.5, fontSize:"35px"}} />
        <TextField 
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleKeyDown}
        id="input-with-sx" label="Search here" variant="standard"
        sx={{color: 'black'}} />
      </Box>
      </ThemeProvider>
    )
}
export default SearchPage