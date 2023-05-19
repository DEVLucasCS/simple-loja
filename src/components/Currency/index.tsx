import React from "react";

import { ICurrencyProps } from "./interfaces";

const Currency = ({ value }: ICurrencyProps) => {
  const formattedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

  return <span>{formattedValue}</span>;
};

export default Currency;
