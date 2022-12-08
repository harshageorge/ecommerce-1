import { useUIContext } from "../../context/ui";
import { Button, IconButton, Slide, TextField } from "@mui/material";
import { SearchBoxContainer,SearchField } from "../../styles/search";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
export default function SearchBox() {
    const { showSearchBox, setshowSearchBox } = useUIContext();
    return(
<Slide direction="down" in={showSearchBox} timeout={500}>
<SearchBoxContainer>
<SearchField
          color="secondary"
          variant="standard"
          fullWidth
          placeholder="search..."
        /> 
            <IconButton>
                  <SearchIcon sx={{ fontSize: { xs: '2rem', md: "3rem" } }} color="secondary" />
        </IconButton>
        <IconButton
                  onClick={() => setshowSearchBox(false) }
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
        >
          <CloseIcon sx={{ fontSize: "4rem" }} color="secondary" />
        </IconButton>
</SearchBoxContainer>
</Slide>
    )
}