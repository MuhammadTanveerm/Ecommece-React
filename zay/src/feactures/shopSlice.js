import { createSlice } from "@reduxjs/toolkit";
import feacData from "../MockData/feacturedProduct.js"
import shopData from "../MockData/shopProduct.js"
const initialState = {
cart : [],
quantity:0,
feacutre:feacData,
prouduct:shopData,
tolalQuantity:0,
};
export const feactureSlice =createSlice({
    name:"cart",
    initialState,
    reducers: {
        // addToCart:(state , action) =>{
        //     let find = state.cart.findIndex((item) => item.id === action.payload.id );
        //     if(find >= 0){
        //         state.cart[find].quantity += 1;
        //     }
        // else{
     
        //     state.cart.push(action.payload);
        // }
           
        // }
    },
});
// Action creators are generated for each case reducer function
// export const {addToCart}=shopSlice.actions;
export default feactureSlice.reducer