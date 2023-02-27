import { configureStore } from "@reduxjs/toolkit"
import authSclice from "../features/authSclice"
import panier from '../features/PanierSlice'

const store = configureStore({
    reducer: {
        auth: authSclice.reducer,
        panier :panier.reducer
    }
})

export default store


