import React from "react";
// import Button from "../../Button/Button";
import css from "./ProductItem.module.css";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingCart } from "react-icons/hi";
const ProductItem = ({
  id,
  title,
  image,
  price,
  description,
  brand,
  model,
  color,
  category,
  discount,
  onAdd,
  className,
}) => {
  const onAddHandler = () => {
    onAdd({
      id,
      title,
      image,
      price,
      description,
      brand,
      model,
      color,
      category,
      discount,
    });
  };
  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  return (
    <li className={css.productItem}>
      <button className={css.svgLike} onClick={onAddHandler}>
        <GoHeartFill
          style={{
            width: "15px",
            height: "15px",
            fill: "grey",
          }}
        />
      </button>
      <button className={css.svgBuy} onClick={onAddHandler}>
        <HiShoppingCart
          style={{
            width: "15px",
            height: "15px",
            fill: "grey",
          }}
        />
      </button>
      <img src={image} alt="" className={css.imgItem} />
      <p className={css.title}>{truncateString(title, 25)}</p>
      {/* <div className={css.description}>{product.description}</div> */}
      <p className={css.price}>
        <span>
          ціна: <b>{price} UAH</b>
        </span>
      </p>
      {/* <Button className={css.add_btn} >
        Добавить в корзину
      </Button> */}
    </li>
  );
};

export default ProductItem;
