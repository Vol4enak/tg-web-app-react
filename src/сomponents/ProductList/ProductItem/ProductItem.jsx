import React from "react";
import Button from "../../Button/Button";
import css from "./ProductItem.module.css";

const ProductItem = ({ id, title, price, description, className, onAdd }) => {


  return (
    <div className={css.product + " " + className} key={id}>
      <div className={css.img} />
      <div className={css.title}>{title}</div>
      <div className={css.description}>{description}</div>
      <div className={css.price}>
        <span>
          Стоимость: <b>{price}</b>
        </span>
      </div>
      <Button className={css.add_btn} onClick={onAdd}>
        Добавить в корзину
      </Button>
    </div>
  );
};

export default ProductItem;
