import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const panierSlice = createSlice({
    name: 'panier',
    initialState: {
        product: null,
    },
    reducers: {
        ADD_PRODUCT: (state, action) => {
            console.log('panier')
            // const { id, vendeur, client, total_price, quantity } = action.payload;
            // // if the product already exist
            // const nbr_product = state.product.findIndex(p => p.id === id);
            // if (nbr_product >= 0) { state.product[nbr_product].quantity += quantity; }
            // //add
            // else { state.product.push({id, client, total_price, quantity  }); }
        },

        DELETE_PRODUCT: (state, action) => {
            // const id_product = action.payload;
            // const index = state.product.findIndex(pro => pro.id === id_product,);
            // //delete 
            // if (index !== -1) { state.product.splice(index, 1); }
        }
    }

});
export const { ADD_PRODUCT, DELETE_PRODUCT } = panierSlice
export default panierSlice
