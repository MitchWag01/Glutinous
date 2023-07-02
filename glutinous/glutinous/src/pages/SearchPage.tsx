import { AccountCircle, AirlineSeatReclineNormalTwoTone } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import React, {useState} from 'react'
import {TextField} from '@mui/material'
import { SearchRounded } from '@mui/icons-material'

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
        <Box sx={{ display: 'flex', alignItems: 'flex-end', background:'#679ce3', borderRadius:'10px', height:'50px'}}>
        <SearchRounded sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField 
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleKeyDown}
        id="input-with-sx" label="Search here" variant="standard" sx={{color: 'black'}} />
      </Box>
    )
}
export default SearchPage