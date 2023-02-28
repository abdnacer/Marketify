import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    isProduct: false,
    dataProduct: null,
    message: null,
  },
  reducers: {
    PRODUCT_SUCCESS: (state, action) => {
      console.log('axio')
      // return {
      //   ...state,
      //   isProduct: true,
      //   dataProduct: action.payload.product,
      //   message: 'Prodcut Success',
      // };
    },
    PRODUCT_FAILED: (state, action) => {
      return {
        ...state,
        isProduct: false,
        dataProduct: null,
        message: null,
      };
    },
  },
});

const {PRODUCT_SUCCESS, PRODUCT_FAILED} = productSlice.actions

export default productSlice
