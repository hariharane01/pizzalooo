import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
  },
  reducers: {
    //its a action creator
    addItemtoCart: (state, action) => {
      const items = action.payload;
      if (items.id) {
        state.items.push(action.payload);
      }
    },
    handleQuantityChange: (state, action) => {
      const { type = "0", id = "" } = action.payload;
      if (type && id) {
        let cartCopy = [...state.items];
        const itemSelected = cartCopy.find((d) => d.id === id);
        if (type === "0") {
          itemSelected.quantity += 1;
        }
        if(type === "1" && itemSelected.quantity >1){
            itemSelected.quantity -= 1;
        }
        state.items = cartCopy;
      }
    },
  },
});

export const { addItemtoCart, handleQuantityChange } = CartSlice.actions;

export default CartSlice.reducer;
