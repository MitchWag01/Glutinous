import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as Images from "@mui/icons-material";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useState, useRef } from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../themes/theme";

interface MenuButtonProps {
  setScanState: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchState: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuButton: React.FC<MenuButtonProps> = ({ setScanState, setSearchState}) => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLButtonElement>(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
      if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
        return;
      }
      setOpen(false);
    };
  
    const handleScanItem = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      if (event.target !== anchorRef.current) {
        setOpen(false);
        setScanState((prevState) => !prevState);
      }
    };
  
    const handleSearchItem = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      if (event.target !== anchorRef.current) {
        setOpen(false);
        setSearchState((prevState) => !prevState);
      }
    };

    

  return (
    <div>
      <ThemeProvider theme={{theme}}>
      <Button
      size="large"
      variant="contained"
          startIcon={<Images.MenuTwoTone/>}
          sx={{ bgcolor: "primary.main",
          textShadow: '-0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000'}}
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"

          onClick={handleToggle}
          
      >
        Menu
      </Button>
      <Menu
        id="open-menu"
        anchorEl={anchorRef.current}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "Menu-button" }}
      >
        <MenuItem>
          <ListItemIcon>
            <Images.House />
          </ListItemIcon>
          Home
        </MenuItem>
        <MenuItem onClick={handleSearchItem}>
          <ListItemIcon>
            <Images.PhoneInTalk />
          </ListItemIcon>
          Recent Searches
        </MenuItem>
        <MenuItem onClick={handleScanItem}>
          <ListItemIcon>
            <Images.CameraAltTwoTone />
          </ListItemIcon>
          Scan Item
        </MenuItem>
      </Menu>
      </ThemeProvider>
    </div>
  );
}

export default MenuButton
