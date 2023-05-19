import styled from "styled-components";

export const OverlayCartSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: none;

  &.overlay--open {
    display: block;
    z-index: 1;
    //style
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const CartSidebar = styled.section`
  position: fixed;
  top: 0;
  left: -600px;
  width: 600px;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //style
  background-color: #fff;
  transition: left 0.3s ease-in-out;

  &.sidebar--open {
    left: 0;
    z-index: 2;
  }
`;

export const TitleSidebar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  //style
  text-align: center;
  background-color: var(--color-primary--light);
  font-size: 1.375rem;
  font-weight: 900;
  color: var(--color-secondary--strong);

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease-in-out;

    &.close:hover {
      cursor: pointer;
      opacity: 0.6;
    }

    svg {
      position: relative;
      top: -2px;
      color: var(--color-secondary--strong);
    }
  }
`;

export const ContainerProductList = styled.ul`
  overflow: auto;
  width: 100%;
  height: 100%;
  margin: 40px 0;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888888;
    border-radius: 5px;
  }

  li:last-child {
    border-bottom: solid 1px var(--color-primary--strong);
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  //style
  font-size: 1.375rem;
  font-weight: 900;
  color: var(--color-secondary--strong);
  background-color: var(--color-primary--light);
`;

export const ButtonCartCheckout = styled.button`
  width: 100%;
  padding: 20px;
  //style
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
  font-size: 1.375rem;
  font-weight: 900;
  color: var(--color-secondary--strong);
  background-color: var(--color-tertiary--strong);
  transition: background-color ease-in-out 0.3s;

  &:hover {
    background-color: var(--color-tertiary--dark);
  }
`;

export const ButtonContinuePurchase = styled.button`
  width: 100%;
  padding: 20px;
  //style
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--color-secondary--strong);
  background-color: var(--color-primary--light);
`;
