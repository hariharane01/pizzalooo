import { createSlice } from "@reduxjs/toolkit";


 export const CartSlice= createSlice({
    name:'products',
    initialState:{
        items: [ ]
    },
    reducers:{ 
        //its a action creator 
        addItemtoCart: (state, action )=> {
            const items = action.payload;
            if(items.id ){
                state.items.push(action.payload) ;

            }
            
    },}
});

export const {addItemtoCart} =CartSlice.actions;

export default  CartSlice.reducer;