//imports
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";

//interfaces
import { IProduct } from "./interfaces";
import {
  IProductsCart,
  IselectorStoreProductsCart,
} from "@/store/productsCart/interfaces";

//store
import {
  incrementQuantityProduct,
  decrementQuantityProduct,
  changeProductValue,
  removeProduct,
} from "@/store/productsCart/Slice";

//components
import Currency from "@/components/Currency";

//styles
import * as Styles from "./styles";
import "react-medium-image-zoom/dist/styles.css";

//icons
import { Trash } from "@phosphor-icons/react";

export default function ProductCart({ product }: { product: IProduct }) {
  const [productQuantity, setProductQuantity] = useState<number | null>(0);

  const [existingProductStored, setExistingProductStored] =
    useState<boolean>(false);

  const dispatch = useDispatch();

  const handleClickIncrementQuantity = () => {
    if (
      productQuantity !== null &&
      productQuantity >= 0 &&
      productQuantity < 50
    ) {
      setProductQuantity(productQuantity + 1);
      dispatch(
        incrementQuantityProduct({ id: product.id, price: product.price })
      );
    }
  };

  const handleClickDecrementQuantity = () => {
    if (productQuantity !== null && productQuantity > 1) {
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
    const newQuantity =
      productQuantity !== null && productQuantity > 0 ? productQuantity : 1;

    if (newQuantity > 0) {
      setProductQuantity(newQuantity);
      dispatch(
        changeProductValue({
          id: product.id,
          price: product.price,
          quantity: newQuantity,
        })
      );
    }

    if (newQuantity > 50) {
      setProductQuantity(50);
      dispatch(
        changeProductValue({
          id: product.id,
          price: product.price,
          quantity: 50,
        })
      );
    }
  };

  const handleKeyPressInputQuantity = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      handleBlurInputQuantity();
    }
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

            <Styles.PriceProduct>
              <Currency value={product.price} />
            </Styles.PriceProduct>

            <Styles.QuantityProduct>
              <Styles.ButtonQuantity onClick={handleClickDecrementQuantity}>
                -
              </Styles.ButtonQuantity>

              <Styles.InputQuantity
                type="number"
                value={
                  productQuantity !== null ? productQuantity.toString() : ""
                }
                onChange={handleChangeInputQuantity}
                onBlur={handleBlurInputQuantity}
                onKeyPress={handleKeyPressInputQuantity}
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
