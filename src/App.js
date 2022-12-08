import './App.css';
import Container from '@mui/material/Container';
import { ThemeProvider } from "@mui/system";
import Header from "./components/header/index.js";
import Banner from "./components/banner";
import {Typography, Box} from "@mui/material";
import theme from './styles/theme';
import Products from "./components/products";
import Footer from "./components/footer";
import AppDrawer from './components/drawer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UIProvider } from './context/ui';
import SearchBox from './components/search';
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Container maxwidth ="xl"
    sx={{background :'#fff'}}>
      {/* <Router> */}
      <UIProvider>
    <Header/>
    <Banner/>
    <Box display="flex" justifyContent="center" sx={{p:4}}>
              <Typography variant="h4">Our Products</Typography>
            </Box>
    <Products/>
    <Footer/>
    <AppDrawer/>
        {/* <Routes>
        <Route exact path="/" element={<ProductListing/>}></Route>
       <Route path="/product/:productId" element={<ProductDetails/>}></Route>
          <Route>404 Not Found!</Route>
        </Routes>
      </Router> */}
      <SearchBox/>
      </UIProvider>
      </Container>
      </ThemeProvider>
  );
}

export default App;
