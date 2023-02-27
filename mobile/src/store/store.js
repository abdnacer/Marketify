import { configureStore } from "@reduxjs/toolkit"
import authSclice from "../features/authSclice"

const store = configureStore({
    reducer: {
        auth: authSclice.reducer
    }
})

export default store