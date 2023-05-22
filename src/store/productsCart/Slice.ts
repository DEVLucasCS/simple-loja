import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./State";
import {
  addProductReducer,
  removeProductReducer,
  incrementQuantityProductReducer,
  decrementQuantityProductReducer,
  changeProductValueReducer,
} from "./Reducers";

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
