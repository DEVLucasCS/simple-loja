import { createSlice } from "@reduxjs/toolkit";

import { IProductsCartState } from "./interfaces";

import {
  addProductReducer,
  removeProductReducer,
  incrementQuantityProductReducer,
  decrementQuantityProductReducer,
  changeProductValueReducer,
} from "./Reducers";

const storedProductsCart = localStorage.getItem("productsCart");

const initialState: IProductsCartState = {
  products: storedProductsCart ? JSON.parse(storedProductsCart) : [],
};

const productsCartSlice = createSlice({
  name: "productsCart",
  initialState,
  reducers: {
    addProduct: addProductReducer,
    removeProduct: removeProductReducer,
    incrementQuantityProduct: incrementQuantityProductReducer,
    decrementQuantityProduct: decrementQuantityProductReducer,
    changeProductValue: changeProductValueReducer,
  },
});

export const {
  addProduct,
  removeProduct,
  incrementQuantityProduct,
  decrementQuantityProduct,
  changeProductValue,
} = productsCartSlice.actions;

export default productsCartSlice.reducer;
