"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary--light: #efefef;
    --color-primary--strong: #d7d7d7;
    --color-primary--dark: #7c7c7c;

    --color-secondary--light: #3a3a3a;
    --color-secondary--strong: #2c2c2c;
    --color-secondary--dark: #222222;

    --color-tertiary--light: #d18144;
    --color-tertiary--strong: #fb7f20;
    --color-tertiary--dark: #f06a03;
  }

  * {
    //box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  input,
  button {
    border: none;
    outline: none;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  [data-rmiz-modal-overlay="visible"] {
    background-color: #000000cf;
  }
`;
