import { configureStore } from "@reduxjs/toolkit";
import pokeApy from "./slices/pokeApy.slice.js"
export default configureStore({
    reducer: {
       pokeApy
    }
})