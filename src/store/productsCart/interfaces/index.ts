export interface IProduct {
  id: number;
  price: number;
}

export interface IProductInputChangeQuantity extends IProduct {
  quantity: number;
}

export interface IProductsCart {
  product: IProduct;
  quantity: number;
}

export interface IProductsCartState {
  products: IProductsCart[];
}

export interface IselectorStoreProductsCart {
  productsCart: IProductsCartState;
}
