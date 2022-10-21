import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  Home,
  FormatListBulleted,
  PlaylistAddCheck,
  Menu,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function LeftDrawer() {
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
              <Home style={{color: '#fff'}}></Home>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        </Link>
        <Link className="list_item" to={"/todo"}>
          <ListItem key="Todo" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PlaylistAddCheck style={{color: '#fff'}}></PlaylistAddCheck>
              </ListItemIcon>
              <ListItemText primary="Todo List" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link className="list_item" to={"/fetchlist"}>
          <ListItem key="FetchList" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FormatListBulleted style={{color: '#fff'}}></FormatListBulleted>
              </ListItemIcon>

              <ListItemText primary="Fetch List" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
     
    </Box>
  );

  return (
    <div >
      {["left"].map((anchor) => (
        <React.Fragment key={anchor} >
          <Button onClick={toggleDrawer(anchor, true)}>
            <Menu style={{color: '#fff'}}></Menu>
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
