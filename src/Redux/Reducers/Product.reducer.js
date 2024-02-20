import { createSlice } from "@reduxjs/toolkit";


 export const ProductSlice= createSlice({
    name:'products',
    initialState:{
        products: [
            {
              id: 1,
              name: " Barbecue Chicken",
              imageUrl:
                "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/caa88590-9486-4a8b-be77-36e7403aa301_new_pepper_barbeque_chicken.jpg",
              price: "299",
              size: ["S", "M ", "L", "xl"],
              discount: "10%",
              quantity: 0,
            },
            {
              id: 2,
          
              name: " Fiery Sausage & Paprika",
              imageUrl:
                "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/4d42a594-14be-48d2-ac4a-adcd0034a08f_FierySausagePaprikadef.jpeg",
              price: "299",
              size: ["S", "M ", "L", "xl"],
              discount: "10%",
              quantity: 0,
            },
            {
              id: 3,
          
              name: " Margherita",
              imageUrl:
                " https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/79bc3609-690b-440e-b8be-74694b1f3215_new_margherita_2502.jpg",
              price: "299",
              discount: "10%",
              quantity: 0,
            },
            {
              id: 4,
          
              name: " Veggie Buddies",
              imageUrl:
                "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/ae395297-1fd7-4141-b6b1-967dcf86ae34_Veggie-Buddies-Customize.jpg",
              price: "199",
              size: ["S", "M ", "L", "xl"],
              discount: "10%",
              quantity: 0,
            },
            {
              id: 5,
              name: "Triple Veg Delight",
              imageUrl:
                "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/b2e8e739-14cb-42d6-a462-f94ca3060a51_Triple-Veg-Delight-Customise.jpg",
              price: "199",
              discount: "10%",
              quantity: 0,
            },
          ]
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