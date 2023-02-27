import {createSlice} from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogin: false,
        user: null,
        token: null,
        message: null
    },
    reducers: {
        LOGIN_SUCCESS: (state, action) => {
            state.isLogin = true
            state.user = action.payload.user
            state.token = action.payload.token
        },
        LOGIN_FAILED: (state, action) => {
            state.isLogin = false
            state.user = null
            state.token = null
        },
        LOGOUT: (state, action) => {
            state.user = null
            state.token = null
            AsyncStorage.removeItem('token')    
        }
    }
})

export const {LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } = authSlice

export default authSlice