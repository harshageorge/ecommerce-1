import React from 'react';
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
  import Actions from "./actions";
  import SearchIcon from "@mui/icons-material/Search";
import { HeaderBar,HeaderContainer,  MyList} from '../../styles/header'

function HeaderDesktop({matches}) {
    return (
        <HeaderContainer>
      <HeaderBar variant="h4">My Shop</HeaderBar>
      <MyList type = "row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="About us" />
        <ListItemText primary="Contact us" />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
          </MyList> 
     <Actions />   
    </HeaderContainer>
         )
}

export default HeaderDesktop