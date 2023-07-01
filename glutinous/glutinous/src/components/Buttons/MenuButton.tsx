import * as React from 'react';
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from '@mui/material/MenuItem'

export default function MenuButton(){
    const[item, setitem] = React.useState<null | HTMLElement>(null)
    const Openmenu = Boolean(item)
    const handleClick= (event: React.MouseEvent<HTMLButtonElement>) => {
        setitem(event.currentTarget);
    };

    const handleClose = () => {
        setitem(null)
    };

    return(
        <div>
        <Button
        id="Menu-button"
        aria-controls={Openmenu ? 'open-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={Openmenu ? true : undefined}
        onClick={handleClick}
        >
        Menu
        </Button>
        <Menu
         id='open-menu'
         anchorEl={item}
         open={Openmenu}
         onClose={handleClose}
         MenuListProps={{'aria-labelledby': 'Menu-button'}}
         >
        <MenuItem onClick={handleClose} >Home</MenuItem>
        <MenuItem onClick={handleClose}>Contact Us</MenuItem>
        <MenuItem onClick={handleClose}>Scan Product</MenuItem>
        </Menu>
        </div>


    )
}