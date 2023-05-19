import { PayloadAction } from "@reduxjs/toolkit";

import {
  IProduct,
  IProductInputChangeQuantity,
  IProductsCartState,
} from "./interfaces";

export const addProductReducer = (
  state: IProductsCartState,
  action: PayloadAction<IProduct>
) => {
  const product = action.payload;

  const existingProduct = state.products.find(
    (products) => products.product.id === product.id
  );

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    state.products.push({ product: product, quantity: 1 });
  }

  localStorage.setItem("productsCart", JSON.stringify(state.products));
};

export const removeProductReducer = (
  state: IProductsCartState,
  action: PayloadAction<number>
) => {
  const productId = action.payload;

  const productIndex = state.products.findIndex(
    (products) => products.product.id === productId
  );

  if (productIndex !== -1) {
    state.products.splice(productIndex, 1);
  }

  localStorage.setItem("productsCart", JSON.stringify(state.products));
};

export const incrementQuantityProductReducer = (
  state: IProductsCartState,
  action: PayloadAction<IProduct>
) => {
  const product = action.payload;

  const existingProduct = state.products.find(
    (products) => products.product.id === product.id
  );

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    state.products.push({ product: product, quantity: 1 });
  }

  localStorage.setItem("productsCart", JSON.stringify(state.products));
};

export const decrementQuantityProductReducer = (
  state: IProductsCartState,
  action: PayloadAction<number>
) => {
  const productId = action.payload;

  const existingProduct = state.products.find(
    (products) => products.product.id === productId
  );

  if (existingProduct) {
    existingProduct.quantity--;

    if (existingProduct.quantity <= 0) {
      const productIndex = state.products.findIndex(
        (products) => products.product.id === productId
      );

      if (productIndex !== -1) {
        state.products.splice(productIndex, 1);
      }
    }
  }

  localStorage.setItem("productsCart", JSON.stringify(state.products));
};

export const changeProductValueReducer = (
  state: IProductsCartState,
  action: PayloadAction<IProductInputChangeQuantity>
) => {
  const { id, price, quantity } = action.payload;

  const existingProduct = state.products.find(
    (products) => products.product.id === id
  );

  if (existingProduct) {
    if (quantity > 0 && quantity !== undefined) {
      existingProduct.quantity = quantity;
    }

    if (quantity <= 0) {
      const productIndex = state.products.findIndex(
        (products) => products.product.id === id
      );

      if (productIndex !== -1) {
        state.products.splice(productIndex, 1);
      }
    }
  } else {
    state.products.push({ product: { id, price }, quantity });
  }

  localStorage.setItem("productsCart", JSON.stringify(state.products));
};
