"use client";

//imports
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

//interfaces
import { IProduct } from "@/components/ProductCart/interfaces";
import { IselectorStoreProductsCart } from "@/store/productsCart/interfaces";

interface ICoupon {
  id: number;
  name: string;
  discount: number;
}

//components
import ProductCart from "@/components/ProductCart";
import Currency from "@/components/Currency";

//styles
import * as Styles from "./styles";

export default function CartCheckout() {
  const [product, setProducts] = useState<IProduct[]>([]);
  const [isOpenCoupon, setIsOpenCoupon] = useState<boolean>(false);
  const [coupons, setCoupons] = useState<ICoupon[]>([]);
  const [couponInput, setCouponInput] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const router = useRouter();

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

  useEffect(() => {
    const loadCoupons = async () => {
      try {
        const response = await axios.get("/data/coupon.json");
        setCoupons(response.data.coupons);
      } catch (error) {
        console.error("Erro ao carregar os cupons:", error);
      }
    };

    loadCoupons();
  }, []);

  const selectorStoreProductsCart = useSelector(
    (state: IselectorStoreProductsCart) => state.productsCart.products
  );

  useEffect(() => {
    const sumTotalPrice = selectorStoreProductsCart.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
    setTotalPrice(sumTotalPrice);
  }, [selectorStoreProductsCart]);

  useEffect(() => {
    if (selectorStoreProductsCart.length == 0) {
      router.push("/");
    }
  }, [selectorStoreProductsCart]);

  const handleClickButtonCheckout = () => {
    router.push("/");
  };

  const handleClickButtonContinuePurchase = () => {
    router.push("/");
  };

  const handleClickIsOpenCoupon = () => {
    setIsOpenCoupon(!isOpenCoupon);
  };

  const handleChangeInputCoupon = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCouponInput(event.target.value);
  };

  const handleClickButtonAddCoupon = () => {
    const existingCoupon = coupons.find(
      (coupon: ICoupon) => coupon.name === couponInput
    );

    if (existingCoupon) {
      alert("Existe");
    } else {
      alert("Não existe");
    }
  };

  return (
    <main>
      <Styles.CartCheckout>
        <Styles.ContainerCartCheckout>
          <Styles.Products>
            {product.map((product: IProduct, index: number) => (
              <ProductCart key={index} product={product} />
            ))}
          </Styles.Products>

          <Styles.Totalize>
            {isOpenCoupon ? (
              <Styles.Coupon>
                <span onClick={handleClickIsOpenCoupon}>Cupom de desconto</span>
                <Styles.FieldsCoupon>
                  <Styles.InputCoupon
                    type="text"
                    placeholder="Código"
                    onChange={handleChangeInputCoupon}
                  />
                  <Styles.ButtonAddCoupon onClick={handleClickButtonAddCoupon}>
                    ADICIONAR
                  </Styles.ButtonAddCoupon>
                </Styles.FieldsCoupon>
              </Styles.Coupon>
            ) : (
              <Styles.Coupon onClick={handleClickIsOpenCoupon}>
                <span>
                  <strong>Adicionar cupom de desconto</strong>
                </span>
              </Styles.Coupon>
            )}

            <Styles.Subtotal>
              <li>
                <span>Subtotal</span>
                <span>
                  <Currency value={totalPrice} />
                </span>
              </li>
              <li>
                <span>Total</span>
                <span>
                  <Currency value={totalPrice} />
                </span>
              </li>
            </Styles.Subtotal>

            <Styles.ButtonCartCheckout onClick={handleClickButtonCheckout}>
              Finalizar Compra
            </Styles.ButtonCartCheckout>

            <Styles.ButtonContinuePurchase
              onClick={handleClickButtonContinuePurchase}
            >
              Escolher mais produtos
            </Styles.ButtonContinuePurchase>
          </Styles.Totalize>
        </Styles.ContainerCartCheckout>
      </Styles.CartCheckout>
    </main>
  );
}
