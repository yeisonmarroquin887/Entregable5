import { createSlice } from "@reduxjs/toolkit";

const pokemon =createSlice({
    name: "pokeApi",
    initialState: "",
    reducers: {
        setpokeApy: (state, action) => action.payload
    }
})
export const { setpokeApy }= pokemon.actions

export default pokemon.reducer