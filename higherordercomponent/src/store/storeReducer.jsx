
import { configureStore } from "@reduxjs/toolkit";
import StoreCreateSlice from "./storeSlice";

export const store = configureStore({
    reducer:{
        storeSlice:StoreCreateSlice,
    }
})
