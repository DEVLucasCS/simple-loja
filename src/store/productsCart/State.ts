import { IProductsCartState } from "./interfaces";

const storedProductsCart = localStorage.getItem("productsCart");

export const initialState: IProductsCartState = {
  products: storedProductsCart ? JSON.parse(storedProductsCart) : [],
};
