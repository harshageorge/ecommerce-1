import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from "./reducers/productReducer";


export const store = configureStore({
reducer:{
    allProducts: productReducer,
}
} )
export default store;