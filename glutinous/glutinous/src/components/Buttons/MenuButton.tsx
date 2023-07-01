import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as Images from "@mui/icons-material";
import { icons } from "react-icons";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

export default function MenuButton() {
  const [item, setitem] = React.useState<null | HTMLElement>(null);
  const Openmenu = Boolean(item);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setitem(event.currentTarget);
  };

  const handleClose = () => {
    setitem(null);
  };

  return (
    <div>
      <Button
      size="large"
      variant="contained"
      startIcon={<Images.MenuTwoTone/>}
        id="Menu-button"
        aria-controls={Openmenu ? "open-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={Openmenu ? true : undefined}
        onClick={handleClick}
    
      >
        Menu
      </Button>
      <Menu
        id="open-menu"
        anchorEl={item}
        open={Openmenu}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "Menu-button" }}
      >
        <MenuItem>
          <ListItemIcon>
            <Images.House />
          </ListItemIcon>
          Home
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Images.PhoneInTalk />
          </ListItemIcon>
          Contact Us
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Images.CameraAltTwoTone />
          </ListItemIcon>
          Scan Item
        </MenuItem>
      </Menu>
    </div>
  );
}
