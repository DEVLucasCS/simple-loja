import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  //style
  background-color: var(--color-secondary--dark);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  display: flex;
`;

export const InfoSection = styled.section`
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoTitle = styled.h2`
  position: relative;
  z-index: 1;
  line-height: 0.8;
  //style
  font-weight: 900;
  color: var(--color-primary--light);
  text-transform: uppercase;
  font-size: 2.625rem;

  &:before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: -3.188rem;
    margin: auto;
    height: 0.25rem;
    width: 10.063rem;
    //style
    background-color: var(--color-tertiary--strong);
  }
`;

export const InfoParagraph = styled.p`
  margin: 12px 0;
  line-height: 1.58;
  //style
  text-transform: uppercase;
  color: var(--color-primary--light);
  font-size: 0.75rem;
  font-weight: 300;
  font-style: italic;
`;

export const InfoStrong = styled.strong`
  width: 160px;
  line-height: 3.25rem;
  //style
  background-color: var(--color-tertiary--strong);
  font-size: 0.875rem;
  text-transform: uppercase;
  color: var(--color-primary--light);
  font-weight: 700;
  text-align: center;
`;

export const InfoCart = styled.section`
  margin-bottom: -130px;
  margin-top: 90px;
  width: 200px;
  height: 100px;
`;

export const InfoCartPriceTotal = styled.div`
  margin-bottom: 25px;
  //style
  text-align: left;
  font-size: 1.375rem;
  font-weight: 900;
  color: var(--color-primary--light);
`;

export const InfoCartButtonCartFinish = styled.button`
  width: 220px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  //style
  background-color: var(--color-tertiary--strong);
  font-size: 14px;
  text-transform: uppercase;
  color: var(--color-secondary--darki);
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  transition: background-color ease-in-out 0.3s;

  &:hover {
    background-color: var(--color-tertiary--dark);
  }

  svg {
    position: relative;
    top: -2px;
  }
`;

export const CardsSection = styled.section`
  width: calc(100% - 350px);
`;

export const CardsContainer = styled.div`
  margin-top: calc(50vh - 225px);

  .slick-prev:before,
  .slick-next:before {
    font-size: 40px;
    color: transparent;
  }

  .slick-prev:before {
    content: "prev";
    margin-left: -30px;
    background: url(/images/prev-slide-icon.png) no-repeat;
  }

  .slick-next:before {
    content: "next";
    background: url(/images/next-slide-icon.png) no-repeat;
  }

  .slick-dots button:before,
  .slick-dots .slick-active button:before {
    font-size: 15px;
    color: var(--color-secondary--dark);
  }
`;
