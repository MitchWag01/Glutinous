import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import { ThemeProvider } from '@mui/material/styles';
import theme from "../../../themes/theme";

const SearchButton = () => {
    const [clicked, setClicked] = useState(false)

    const handleSearch = () => {
        setClicked(!clicked);
    }

    return (
        <ThemeProvider theme={theme}>
            <IconButton onClick={handleSearch} sx={{ bgcolor: clicked ? 'primary.main' : 'secondary.main' }} size="large">
                <SearchIcon sx={{ color: 'black' }} />
            </IconButton>
        </ThemeProvider>
    )
}

export default SearchButton;
