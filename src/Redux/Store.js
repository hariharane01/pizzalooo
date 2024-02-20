import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Reducers/Product.reducer";

//Redux store

//detail needed 
//1.Create store 
//2. import reducer

export default configureStore({
    reducer:{
        product: ProductReducer,

    },
})
