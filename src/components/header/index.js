import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import HeaderDesktop from "./headerDesktop";
import HeaderMobile from "./headerMobile";

export default function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      {matches ? <HeaderMobile matches={matches}/> : <HeaderDesktop matches={matches}/>}
    </>
  );
}