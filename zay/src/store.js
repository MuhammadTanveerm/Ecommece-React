import { configureStore } from "@reduxjs/toolkit";
import feactureSlice  from "./feactures/shopSlice";


export const store = configureStore({
    reducer:{
        feactureData: feactureSlice,
    }
})