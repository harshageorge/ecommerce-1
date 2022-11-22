import { MyList,ActionIconsContainerMobile,ActionIconsContainerDesktop } from "../../styles/header";
import {
    Box,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography,
  } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Colors } from "../../styles/theme";

export default function Actions({matches}) {

  const Component = matches?
  ActionIconsContainerMobile:ActionIconsContainerDesktop;
    return(
      <Component>
        <MyList type="row">
        <ListItemButton
         sx={{
          justifyContent: "center",
        }}
        >
          <ListItemIcon
             sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,}}
          >
            <ShoppingCartIcon />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton
           sx={{
            justifyContent: "center",
          }}>
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,}}>
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton
           sx={{
            justifyContent: "center",
          }}>
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,}}>
            <PersonIcon />
          </ListItemIcon>
        </ListItemButton>
        </MyList>
        </Component>
    )
}