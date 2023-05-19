import styled from "styled-components";

export const CartCheckout = styled.section`
  display: flex;
  justify-content: center;
`;

export const ContainerCartCheckout = styled.section`
  display: flex;
  max-width: 1170px;
  width: 80%;
  margin-top: 40px;
`;

export const Products = styled.section`
  width: 65%;
`;

export const Totalize = styled.section`
  width: 35%;
  height: max-content;
  position: sticky;
  top: 20px;
  //style
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.13);
`;

export const Subtotal = styled.ul`
  width: 80%;
  margin: 40px auto;

  li {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    //style
    border-bottom: solid 1px var(--color-primary--strong);
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-secondary--light);
  }

  li:last-child {
    border-bottom: 0;
    font-weight: 700;
  }
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
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-secondary--strong);
  background-color: transparent;
`;

export const Coupon = styled.div`
  span {
    display: flex;
    justify-content: center;
    padding: 20px 0 0;
    //style
    cursor: pointer;
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--color-secondary--light);

    strong {
      text-decoration: underline;
      font-weight: 400;
    }
  }
`;

export const FieldsCoupon = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin: 10px auto 0;
`;

export const InputCoupon = styled.input`
  width: 100%;
  padding: 0 10px;
  //style
  border: 1px solid var(--color-primary--strong);
  color: var(--color-secondary--dark);
  font-size: 0.75rem;
  font-weight: 700;
`;

export const ButtonAddCoupon = styled.button`
  padding: 10px 20px;
  //style
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 900;
  color: var(--color-secondary--strong);
  background-color: var(--color-tertiary--strong);
  transition: background-color ease-in-out 0.3s;

  &:hover {
    background-color: var(--color-tertiary--dark);
  }
`;
