import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Reducers/Product.reducer";
import CartReducer from "./Reducers/Cart.reducer";

export default configureStore(
    {
        reducer:{
            product: ProductReducer,
            cart: CartReducer,

        }
    }
);