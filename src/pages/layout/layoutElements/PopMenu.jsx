import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";



export default function PopMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div >
      <Button
        id="button"
       
        aria-haspopup="true"
        
        onClick={handleClick}
      >
        <AccountCircle style={{ color: "#fff" }}></AccountCircle>
      </Button>
      <Menu
        style={{margin:'0'}}
        
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "button",
        }} disablePadding
      >
        <Link to={'/'} style={{textDecoration: 'none', color: '#000'}}>
          <MenuItem onClick={handleClose}  >
            Home
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
