import React,{useState} from 'react';
import {
    ExtraActionsWrapper,
    Product,
    ProductActionButton,
    ProductActionsWrapper,
    ProductAddToCart,
    ProductFavButton,
    ProductImage,
    ProductMetaWrapper,
} from "../../styles/products";
import { Stack, Tooltip, Typography } from "@mui/material";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";

function SingleProductDesktop({ product, matches }) {
    const [showOptions, setShowOptions] = useState(false);
    const handleMouseEnter = () => {
        setShowOptions(true);
      };
      const handleMouseLeave = () => {
        setShowOptions(false);
      };
    return (
        <>
        <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
           <ProductImage src={product.image} />
            <ProductFavButton isfav={0}>
          <FavoriteIcon />
        </ProductFavButton>
        {showOptions && <ProductAddToCart show={showOptions} variant="contained">
        Add to Cart
        </ProductAddToCart>}
        <ProductActionsWrapper show={showOptions}>
                <Stack direction="column">
                    <ProductActionButton>
                        <ShareIcon color="primary" />
                    </ProductActionButton>
                    <ProductActionButton>
                        <FitScreenIcon  color="primary" />
                    </ProductActionButton>
                </Stack>
            </ProductActionsWrapper>
        </Product>
        <ProductMeta product={product} matches={matches} />
        </>
    )
}

export default SingleProductDesktop