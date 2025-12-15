import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import wordSlice from "./wordSlice";
import counterSlice from "./counterSlice";

const store = configureStore({
    reducer:{
        products:productSlice.reducer ,
        carts : cartSlice.reducer,
        words:wordSlice.reducer,
        counters:counterSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store