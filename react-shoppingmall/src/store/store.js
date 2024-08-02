import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./cartslice";
import productslice from "./productslice";

export default configureStore({
    reducer : {
        cart : cartslice.reducer,
        products : productslice
    }
})
