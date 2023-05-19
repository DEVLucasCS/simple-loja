import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantityProduct,
  decrementQuantityProduct,
  changeProductValue,
  removeProduct,
} from "@/store/productsCart/Slice";

import * as Styles from "./styles";

import Image from "next/image";

import { Trash } from "@phosphor-icons/react";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { IProduct } from "./interfaces";
import {
  IProductsCart,
  IselectorStoreProductsCart,
} from "@/store/productsCart/interfaces";

export default function ProductCart({ product }: { product: IProduct }) {
  const [productQuantity, setProductQuantity] = useState<number>(0);

  const [existingProductStored, setExistingProductStored] =
    useState<boolean>(false);

  const dispatch = useDispatch();

  const handleClickIncrementQuantity = () => {
    if (productQuantity >= 0) {
      setProductQuantity(productQuantity + 1);
      dispatch(
        incrementQuantityProduct({ id: product.id, price: product.price })
      );
    }
  };

  const handleClickDecrementQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
      dispatch(decrementQuantityProduct(product.id));
    }
  };

  const handleChangeInputQuantity = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const quantityInputValue = parseInt(event.target.value);

    setProductQuantity(quantityInputValue);
  };

  const handleBlurInputQuantity = () => {
    const newQuantity = productQuantity > 0 ? productQuantity : 1;
    setProductQuantity(newQuantity);
    dispatch(
      changeProductValue({
        id: product.id,
        price: product.price,
        quantity: newQuantity,
      })
    );
  };

  const handleClickRemoveProduct = () => {
    dispatch(removeProduct(product.id));
  };

  useEffect(() => {
    const storedProductsCart = localStorage.getItem("productsCart");

    if (storedProductsCart) {
      const parsedStoredProductsCart = JSON.parse(storedProductsCart);

      const existingProductStored = parsedStoredProductsCart.find(
        (products: IProductsCart) => products.product.id === product.id
      );

      if (existingProductStored) {
        setExistingProductStored(true);
        setProductQuantity(existingProductStored.quantity);
      } else {
        setExistingProductStored(false);
        setProductQuantity(0);
      }
    }
  }, [useSelector((state: IselectorStoreProductsCart) => state.productsCart)]);

  return (
    <>
      {existingProductStored ? (
        <Styles.Product>
          <Styles.ImageProduct title="ZOOM">
            <Zoom>
              <Image
                src={product.images[1]}
                width={800}
                height={800}
                alt="Picture of the author"
                className="my-image"
              />
            </Zoom>
          </Styles.ImageProduct>

          <div>
            <Styles.NameProduct>{product.name}</Styles.NameProduct>

            <Styles.PriceProduct>R$ {product.price}</Styles.PriceProduct>

            <Styles.QuantityProduct>
              <Styles.ButtonQuantity onClick={handleClickDecrementQuantity}>
                -
              </Styles.ButtonQuantity>

              <Styles.InputQuantity
                type="number"
                value={productQuantity}
                onChange={handleChangeInputQuantity}
                onBlur={handleBlurInputQuantity}
              />

              <Styles.ButtonQuantity onClick={handleClickIncrementQuantity}>
                +
              </Styles.ButtonQuantity>
            </Styles.QuantityProduct>
          </div>

          <Styles.RemoveProduct
            title="REMOVER"
            onClick={handleClickRemoveProduct}
          >
            <Trash size={25} />
          </Styles.RemoveProduct>
        </Styles.Product>
      ) : null}
    </>
  );
}
