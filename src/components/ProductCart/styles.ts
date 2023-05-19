import styled from "styled-components";

export const Product = styled.li`
  width: 80%;
  display: flex;
  padding: 40px 0 35px;
  margin: 0px auto;
  //
  border-top: solid 1px var(--color-primary--strong);
`;

export const ImageProduct = styled.div`
  img {
    width: 150px;
    height: 150px;

    &:hover {
      transition: ease-in-out 0.3s;
      opacity: 0.6;
    }
  }

  &:hover::before {
    content: "";
    width: 40px;
    height: 40px;
    pointer-events: none;
    z-index: 9;
    position: absolute;
    margin: 55px 55px;
    //style
    background: url(/images/zoom-icon.png) no-repeat;
    background-size: 40px 40px;
    opacity: 0.8;
    transition: ease-in-out 0.3s;
  }
`;

export const NameProduct = styled.div`
  height: 42px;
  padding-left: 15px;
  //style
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-secondary--light);
`;

export const PriceProduct = styled.div`
  padding: 25px 15px;
  //style
  font-size: 1.375rem;
  font-weight: 900;
  color: var(--color-secondary--strong);
`;

export const RemoveProduct = styled.div`
  margin-left: auto;

  svg {
    color: var(--color-secondary--strong);
    transition: ease-in-out 0.3s;
  }

  svg:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const QuantityProduct = styled.div`
  padding-left: 15px;
`;

export const InputQuantity = styled.input`
  width: 30px;
  height: 28px;
  padding: 0 5px;
  //style
  border: 1px solid var(--color-primary--strong);
  color: var(--color-secondary--dark);
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
`;

export const ButtonQuantity = styled.button`
  width: 40px;
  height: 30px;
  //style
  background-color: var(--color-tertiary--strong);
  font-size: 16px;
  text-transform: uppercase;
  color: var(--color-primary--light);
  font-weight: 700;
  text-align: center;
  cursor: pointer;

  &:hover {
    transition: background-color ease-in-out 0.3s;
    background-color: var(--color-tertiary--dark);
  }
`;
