import { configureStore } from "@reduxjs/toolkit";
import { pacientSlice } from "./pacientSlice";

export const store = configureStore({
    reducer: {
        pacients: pacientSlice.reducer
    }
})