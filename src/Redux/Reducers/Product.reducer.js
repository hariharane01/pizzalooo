import { createSlice } from "@reduxjs/toolkit";


 export const ProductSlice= createSlice({
    name:'products',
    initialState:{
        products: [ ]
    },
    reducers:{ 
        //its a action creator 
        saveAllProducts: (state, action )=> {
            console.log(action );
        },
    },
});

export const {saveAllProducts} =ProductSlice.actions;

export default  ProductSlice.reducer;