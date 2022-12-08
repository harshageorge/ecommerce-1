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
  import {
    HeaderContainer,
    HeaderBar,
    MyList,
  } from "../../styles/header";
  import { useUIContext } from "../../context/ui";

function HeaderDesktop({matches}) {
  const { showSearchBox, setshowSearchBox } = useUIContext();
 return (
    <HeaderContainer>
      <HeaderBar variant="h4">Pet Shop</HeaderBar>
      <MyList type = "row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="About us" />
        <ListItemText primary="Contact us" />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon onClick={()=>setshowSearchBox(true)} />
          </ListItemIcon>
        </ListItemButton>
          </MyList> 
     <Actions matches={matches}/>   
    </HeaderContainer>

         )
}

export default HeaderDesktop