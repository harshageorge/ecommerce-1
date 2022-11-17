import './App.css';
import Container from '@mui/material/Container';
import { ThemeProvider } from "@mui/system";
import Header from "./components/header/index.js";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import theme from './styles/theme';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Container maxwidth ="xl"
    sx={{background :'#fff'}}>
      <Router>
    <Header/>
        <Routes>
        <Route exact path="/" element={<ProductListing/>}></Route>
       <Route path="/product/:productId" element={<ProductDetails/>}></Route>
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
      </Container>
      </ThemeProvider>
  );
}

export default App;
