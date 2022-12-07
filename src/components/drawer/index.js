import {
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemText,
    styled,
  } from "@mui/material";
export default function AppDrawer() {
    return(
      <Drawer open={true}>
<List>
<ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <Divider variant="middle"/>
          <ListItemButton>
            <ListItemText>Categories</ListItemText>
          </ListItemButton>
          <Divider variant="middle"/>
          <ListItemButton>
            <ListItemText>Products</ListItemText>
          </ListItemButton>
          <Divider variant="middle"/>
          <ListItemButton>
            <ListItemText>About Us</ListItemText>
          </ListItemButton>
          <Divider variant="middle"/>
          <ListItemButton>
            <ListItemText>Contact Us</ListItemText>
          </ListItemButton>
</List>
      </Drawer>
    )
}