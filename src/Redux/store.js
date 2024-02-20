import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Reducers/Product.reducer";

export default configureStore(
    {
        reducer:{
            product: ProductReducer,

        }
    }
);