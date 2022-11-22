import { IconButton } from '@mui/material'
import { HeaderContainer,  HeaderBar } from "../../styles/header";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Actions from "./actions";
import React from 'react'

function HeaderMobile({matches}) {
  return (
    <HeaderContainer>
        <IconButton>
        <MenuIcon/>
      </IconButton>
      <HeaderBar textAlign={"center"} variant="h4">My Shop</HeaderBar>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches}/>
    </HeaderContainer>
  )
}

export default HeaderMobile