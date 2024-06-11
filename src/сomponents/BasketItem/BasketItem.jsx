import React, { useState } from "react";
import css from "./BasketItem.module.css";
const BasketItem = ({
  _id,
  id,
  title,
  discount,
  image,
  price,
  brand,
  model,
  color,
  activeBasket,
}) => {
  const [value, setValue] = useState(1);

  const increment = (discounts) => {
    if(value === discounts) return
    setValue(value + 1);
  };
  const decrement = () => {
    if(value === 1) return
    setValue(value - 1);
  };

  const truncateString = (str, num) => {
    if (!str || typeof str !== "string") {
      return "";
    }
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };
  return (
    <div className={css.cart_item}>
      <img src={image} alt={title} />
      <div className={css.item_details}>
        <h2 className={css.title}>{truncateString(title, 35)}</h2>
        <p className={css.brand_model}>
          {brand} - {model}
        </p>
        <p className={css.color}>Color: {color}</p>
        <p>Kількість: {discount}</p>
        <span className={css.price}>${price}</span>
        <div className={css.quantity_controls}>
          <button className={css.decrease} onClick={() => decrement()}>
            -
          </button>
          <input type="number" value={value} className={css.quantity} />
          <button className={css.increase} onClick={() => increment(discount)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
