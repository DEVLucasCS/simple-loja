//imports
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

//interfaces
import { IisOpenCartSidebarState } from "@/store/isOpenCartSidebar/interfaces";
import { IselectorStoreProductsCart } from "@/store/productsCart/interfaces";
import { IProduct } from "@/components/ProductCart/interfaces";

//store
import { CloseCartSidebar } from "@/store/isOpenCartSidebar/Slice";

//components
import ProductCart from "@/components/ProductCart";
import Currency from "@/components/Currency";

//styles
import * as Styles from "./styles";

//icons
import { ShoppingCart, X } from "@phosphor-icons/react";

export default function CartSidebar() {
  const [product, setProducts] = useState<IProduct[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const dispatch = useDispatch();
  const router = useRouter();

  const CartSidebarStore = useSelector(
    (state: { isOpenCartSidebar: IisOpenCartSidebarState }) =>
      state.isOpenCartSidebar
  );
  const { isOpenCartSidebar } = CartSidebarStore;

  const handleClickCloseCartSidebar = () => {
    dispatch(CloseCartSidebar());
  };

  const handleClickButtonCartCheckout = () => {
    router.push("/checkout/cart");
    dispatch(CloseCartSidebar());
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
      dispatch(CloseCartSidebar());
    }
  }, [selectorStoreProductsCart]);

  return (
    <>
      <Styles.OverlayCartSidebar
        className={isOpenCartSidebar ? "overlay--open" : ""}
        onClick={handleClickCloseCartSidebar}
      />

      <Styles.CartSidebar className={isOpenCartSidebar ? "sidebar--open" : ""}>
        <Styles.TitleSidebar>
          <span>
            <ShoppingCart size={32} /> CARRINHO
          </span>
          <span className="close" title="FECHAR">
            <X onClick={handleClickCloseCartSidebar} size={32} />
          </span>
        </Styles.TitleSidebar>

        <Styles.ContainerProductList>
          {product.map((product: IProduct, index: number) => (
            <ProductCart key={index} product={product} />
          ))}
        </Styles.ContainerProductList>

        <div>
          <Styles.TotalPrice>
            <span>Total</span>
            <span>
              <Currency value={totalPrice} />
            </span>
          </Styles.TotalPrice>
          <Styles.ButtonCartCheckout onClick={handleClickButtonCartCheckout}>
            Finalizar Compra
          </Styles.ButtonCartCheckout>
          <Styles.ButtonContinuePurchase onClick={handleClickCloseCartSidebar}>
            Continuar Comprando
          </Styles.ButtonContinuePurchase>
        </div>
      </Styles.CartSidebar>
    </>
  );
}
