import { configureStore } from "@reduxjs/toolkit"
import authSclice from "../features/authSclice"
import panier from '../features/PanierSlice'
// import productSlice from "../features/productSlice"

const store = configureStore({
    reducer: {
        auth: authSclice.reducer,
        panier :panier.reducer,
        // product: productSlice.reducer
    }
})

export default store