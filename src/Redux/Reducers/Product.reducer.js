import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data";

export const ProductSlice= createSlice({
    name: 'product',
    initialState: {
        product:data,
    },
    reducers:{
        saveAllProducts:(state, action )=>{
            console.log(action );
        }
    },
});
 
export const {saveAllProducts} = ProductSlice.actions;
export default  ProductSlice.reducers;