//imports
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Slider from "react-slick";
import Zoom from "react-medium-image-zoom";

//interfaces
import { IProduct } from "./interfaces";
import { IselectorStoreProductsCart } from "@/store/productsCart/interfaces";
import { IProductsCart } from "@/store/productsCart/interfaces";

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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Product({ product }: { product: IProduct }) {
  const [productQuantity, setProductQuantity] = useState<number | null>(0);

  const dispatch = useDispatch();

  const settingsSlider = {
    swipe: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
  };

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
    if (productQuantity !== null && productQuantity > 0) {
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
    if (productQuantity !== null) {
      if (productQuantity > 0) {
        setProductQuantity(productQuantity);
        dispatch(
          changeProductValue({
            id: product.id,
            price: product.price,
            quantity: productQuantity,
          })
        );
      } else {
        setProductQuantity(0);
        dispatch(removeProduct(product.id));
      }

      if (productQuantity > 50) {
        setProductQuantity(50);
        dispatch(
          changeProductValue({
            id: product.id,
            price: product.price,
            quantity: 50,
          })
        );
      }
    }
  };

  const handleKeyPressInputQuantity = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      handleBlurInputQuantity();
    }
  };

  useEffect(() => {
    const storedProductsCart = localStorage.getItem("productsCart");

    if (storedProductsCart) {
      const parsedStoredProductsCart = JSON.parse(storedProductsCart);

      const existingProductStored = parsedStoredProductsCart.find(
        (products: IProductsCart) => products.product.id === product.id
      );

      if (existingProductStored) {
        setProductQuantity(existingProductStored.quantity);
      } else {
        setProductQuantity(0);
      }
    }
  }, [useSelector((state: IselectorStoreProductsCart) => state.productsCart)]);

  return (
    <Styles.Card>
      <Styles.CardImage title="ZOOM">
        <Slider {...settingsSlider}>
          {product.images.map((image, index) => (
            <Zoom key={index}>
              <Image
                src={image}
                width={800}
                height={800}
                alt="Picture of the author"
              ></Image>
            </Zoom>
          ))}
        </Slider>
      </Styles.CardImage>

      <Styles.CardTitle>{product.name}</Styles.CardTitle>

      <Styles.CardPrice>
        <Currency value={product.price} />
      </Styles.CardPrice>

      <Styles.CardQuantity>
        <Styles.ButtonQuantity onClick={handleClickDecrementQuantity}>
          -
        </Styles.ButtonQuantity>
        <Styles.InputQuantity
          type="number"
          value={productQuantity !== null ? productQuantity.toString() : ""}
          onChange={handleChangeInputQuantity}
          onBlur={handleBlurInputQuantity}
          onKeyPress={handleKeyPressInputQuantity}
        />
        <Styles.ButtonQuantity onClick={handleClickIncrementQuantity}>
          +
        </Styles.ButtonQuantity>
      </Styles.CardQuantity>
    </Styles.Card>
  );
}
