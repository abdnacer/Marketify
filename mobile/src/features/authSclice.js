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
            return {
                ...state,
                isLogin: true,
                message: 'LOGIN SUCCESS',
                user: action.payload.user,
                token: action.payload.token
            }
        },
        LOGIN_FAILED: (state, action) => {
            return {
                ...state,
                isLogin: false,
                message: 'LOGIN Not SUCCESS',
                user: null,
                token: null
            }
        },
        LOGOUT: state => {
            AsyncStorage.removeItem('token')    
            AsyncStorage.removeItem('user') 
            return {
                ...state,
                isLogin: false,
                message: 'LOGOUT SUCCESS',
                user: null,
                token: null,
            }
        }
    }
})

export const {LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } = authSlice.actions

export default authSlice