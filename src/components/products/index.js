import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Container, Grid } from "@mui/material";
import axios from 'axios';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import SingleProduct from './SingleProduct';
import SingleProductDesktop from './SingleProductDesktop';
import { setProducts } from "../../redux/actions/productActions.js";
import { products } from "../../data";

function Products() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
  //   const response = await axios.get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //       console.log("Err: ", err);
  //     });
  //   dispatch(setProducts(response.data));
  // }

  // const products = useSelector((state) => state.allProducts.products);
  // console.log(products);
  const renderProducts = products.map((product) => {
    // const { id, title, image, price, category } = product;
    return(
    <Grid
    className='test'
     item key={product.id}
    xs={2}
    sm={4}
     display="flex" flexDirection={'column'} alignItems="center" >
 {matches ? (
        <SingleProduct product={product} matches={matches} />
      ) : (
        <SingleProductDesktop product={product} matches={matches} />
      )}
    </Grid>
    )
  });

  return (
    <Container>
      <Grid
        container
      
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        sx={{ margin: `20px 4px 10px 4px` }}
        columns={{ xs: 4, sm: 8, md: 12 }}
       
      >
        {renderProducts}
      </Grid>
    </Container>
  )
}

export default Products