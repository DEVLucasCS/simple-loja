import styled from "styled-components";

export const Card = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  //style
  border: 2px solid var(--color-primary--light);
  background: var(--color-primary--light);
`;

export const CardImage = styled.div`
  margin-bottom: 20px;

  &:hover::before {
    content: "";
    width: 40px;
    height: 40px;
    pointer-events: none;
    z-index: 9;
    position: absolute;
    margin: 120px 105px;
    //style
    background: url(/images/zoom-icon.png) no-repeat;
    background-size: 40px 40px;
    opacity: 0.8;
    transition: ease-in-out 0.3s;
  }

  img {
    width: 260px;
    height: 260px;

    &:hover {
      transition: ease-in-out 0.3s;
      opacity: 0.6;
    }
  }

  .slick-prev,
  .slick-next {
    display: none !important;
  }

  .slick-dots {
    margin: -15px 0 15px;
    position: relative;
  }
`;

export const CardTitle = styled.div`
  width: 95%;
  margin: 0 auto 20px;
  //style
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-secondary--light);
`;

export const CardPrice = styled.div`
  width: 95%;
  margin: 0 auto 20px;
  //style
  text-align: center;
  font-size: 1.375rem;
  font-weight: 900;
  color: var(--color-secondary--strong);
`;

export const CardQuantity = styled.div`
  width: 95%;
  margin: 0 auto 6px;
  display: flex;
  justify-content: space-between;
`;

export const InputQuantity = styled.input`
  width: 60px;
  height: 52px;
  padding: 0 5px;
  margin-top: -1px;
  //style
  color: var(--color-secondary--dark);
  border: 1px solid var(--color-primary--strong);
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
`;

export const ButtonQuantity = styled.button`
  width: 80px;
  height: 52px;
  //style
  background-color: var(--color-tertiary--strong);
  font-size: 1.5rem;
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
