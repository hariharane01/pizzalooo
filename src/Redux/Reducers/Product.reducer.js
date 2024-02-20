import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice= createSlice({
    name: 'product',
    initialState: {
        product:[],
    },
    reducers:{
        saveAllProducts:(state, action )=>{
            console.log(action );
        }
    },
});
 
export const {saveAllProducts} = ProductSlice.actions;
export default  ProductSlice.reducers;