import React from 'react';
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

function SingleProduct({ product, matches }) {
    return (
        <>
        <Product>
            <ProductImage src={product.image} />
            <ProductMeta product={product} matches={matches} />
            <ProductActionsWrapper>
                <Stack direction="row">
                    <ProductFavButton isfav={0}>
                        <FavoriteIcon />
                    </ProductFavButton>
                    <ProductActionButton>
                        <ShareIcon color="primary" />
                    </ProductActionButton>
                    <ProductActionButton>
                        <FitScreenIcon  color="primary" />
                    </ProductActionButton>
                </Stack>
            </ProductActionsWrapper>
        </Product>
        <ProductAddToCart variant="contained">Add to cart

        </ProductAddToCart>
        </>
    )
}

export default SingleProduct