import { IconButton } from '@mui/material'
import { HeaderContainer,  HeaderBar } from "../../styles/header";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Actions from "./actions";
import React from 'react';
import { useUIContext } from "../../context/ui";

function HeaderMobile({matches}) {
  const { setDrawerOpen,showSearchBox, setshowSearchBox } = useUIContext();
  return (
    <HeaderContainer>
        <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon/>
      </IconButton>
      <HeaderBar textAlign={"center"} variant="h4">My Shop</HeaderBar>
      <IconButton>
        <SearchIcon  onClick={()=>setshowSearchBox(true)} />
      </IconButton>
      <Actions matches={matches}/>
    </HeaderContainer>
  )
}

export default HeaderMobile