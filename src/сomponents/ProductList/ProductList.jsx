import React from "react";
// import css from "./ProductList.module.css"
import { useTelegram } from "../Hooks/useTelegram";
const ProductList = () => {
  const { onToggleButton } = useTelegram;
  return (
    <div>
      ProductList
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
};

export default ProductList;
