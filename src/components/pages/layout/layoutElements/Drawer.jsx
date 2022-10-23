import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  Home,
  FormatListBulleted,
  PlaylistAddCheck,
  Menu,
  Apps,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function LeftDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box className="drawer"
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List >
        <Link className="list_item" to={"/"}>
          <ListItem className="list_item" key="Home" disablePadding >
            <ListItemButton>
              <ListItemIcon>
                <Home style={{ color: '#fff' }}></Home>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>

      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: '#d8183a', color: '#fff' }}
        component="nav"
        aria-labelledby="nested-list-subheader"

      >

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <Apps style={{ color: '#fff' }}></Apps>
          </ListItemIcon>
          <ListItemText primary="Pages" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </List>
      <Collapse in={open} timeout="auto" unmountOnExit>

        <Link className="list_item" to={"/todo"}>

          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <PlaylistAddCheck style={{ color: '#fff' }}></PlaylistAddCheck>

              </ListItemIcon>
              <ListItemText primary="Todo List" />
            </ListItemButton>
          </List>
        </Link>
        <Link className="list_item" to={"/fetchlist"}>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <FormatListBulleted style={{ color: '#fff' }}></FormatListBulleted>
              </ListItemIcon>
              <ListItemText primary="FetchList" />
            </ListItemButton>
          </List>
        </Link>

      </Collapse>


    </Box>
  );

  return (
    <div >
      {["left"].map((anchor) => (
        <React.Fragment key={anchor} >
          <Button onClick={toggleDrawer(anchor, true)}>
            <Menu style={{ color: '#fff' }}></Menu>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
