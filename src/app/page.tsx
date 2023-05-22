"use client";

//imports
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";

//interfaces
import { IProduct } from "@/components/Product/interfaces";
import { IselectorStoreProductsCart } from "@/store/productsCart/interfaces";

//store
import { OpenCartSidebar } from "@/store/isOpenCartSidebar/Slice";

//components
import Product from "@/components/Product";
import CartSidebar from "@/components/CartSidebar";
import Currency from "@/components/Currency";

//styles
import * as Styles from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//icons
import { ShoppingCart } from "@phosphor-icons/react";

export default function Home() {
  const [product, setProducts] = useState<IProduct[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantityProductsCart, setTotalQuantityProductsCart] =
    useState<number>(0);

  const dispatch = useDispatch();

  const settingsSlider = {
    Infinity: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
  };

  const selectorStoreProductsCart = useSelector(
    (state: IselectorStoreProductsCart) => state.productsCart.products
  );

  const formattedTotalQuantityProductsCart = (() => {
    const totalQuantityString = totalQuantityProductsCart.toString();

    if (totalQuantityString.length > 2) {
      return totalQuantityString.substring(0, 2) + "..";
    } else {
      return totalQuantityString;
    }
  })();

  const handleOpenCartSidebar = () => {
    if (selectorStoreProductsCart.length == 0) {
      alert("compra algo fdp");
    } else {
      dispatch(OpenCartSidebar());
    }
  };

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await axios.get("/data/products.json");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Erro ao carregar os produtos:", error);
      }
    };

    loadProducts();
  }, []);
  0;

  useEffect(() => {
    const sumTotalPrice = selectorStoreProductsCart.reduce(
      (accumulator, item) => accumulator + item.product.price * item.quantity,
      0
    );
    setTotalPrice(sumTotalPrice);
  }, [selectorStoreProductsCart]);

  useEffect(() => {
    if (selectorStoreProductsCart) {
      const totalQuantityProductsCart = selectorStoreProductsCart.reduce(
        (accumulator, item) => accumulator + item.quantity,
        0
      );
      setTotalQuantityProductsCart(totalQuantityProductsCart);
    }
  }, [selectorStoreProductsCart]);

  return (
    <>
      <CartSidebar />
      <Styles.Section>
        <Styles.Container>
          <Styles.InfoSection>
            <Styles.InfoContainer>
              <Styles.InfoTitle>Frases & Pensamentos</Styles.InfoTitle>

              <Styles.InfoParagraph>
                Uma seleção especial para você arrasar
              </Styles.InfoParagraph>

              <Styles.InfoStrong>APROVEITE JÁ!</Styles.InfoStrong>

              <Styles.InfoCart>
                <Styles.InfoCartPriceTotal>
                  TOTAL: <Currency value={totalPrice} />
                </Styles.InfoCartPriceTotal>

                <Styles.InfoCartButtonCartFinish
                  onClick={handleOpenCartSidebar}
                >
                  <span>{formattedTotalQuantityProductsCart}</span>
                  <ShoppingCart size={32} />
                  FINALIZAR COMPRA
                </Styles.InfoCartButtonCartFinish>
              </Styles.InfoCart>
            </Styles.InfoContainer>
          </Styles.InfoSection>

          <Styles.CardsSection>
            <Styles.CardsContainer>
              <Slider {...settingsSlider}>
                {product.map((product: IProduct, index: number) => (
                  <Product key={index} product={product} />
                ))}
              </Slider>
            </Styles.CardsContainer>
          </Styles.CardsSection>
        </Styles.Container>
      </Styles.Section>
    </>
  );
}
