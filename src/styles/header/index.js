import { IconButton, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors, DrawerWidth } from "../theme";
import { Box } from "@mui/system";
import "@fontsource/montez";
export const HeaderContainer = styled(Box)(() => ({
    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px'
}));

export const HeaderBar = styled(Typography)(() => ({
    padding: "4px",
    flexGrow: 1,
    fontSize: "4em",
    fontFamily: '"Montez", "cursive"',
    color: Colors.secondary
}));

export const MyList = styled(List)(({ type }) => ({
    display: type === "row" ? "flex" : "block",
    flexGrow: 3,
    justifyContent: "center",
    alignItems: "center",
}));
export const ActionIconsContainerDesktop = styled(Box)(() => ({
    flexGrow: 0,
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
    display: 'flex',
    background: Colors.shaft,
    position: "fixed",
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,
    borderTop: `1px solid ${Colors.border}`
}));
