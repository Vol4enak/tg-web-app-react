import React from "react";
// import Button from "../../Button/Button";
import css from "./ProductItem.module.css";

const ProductItem = ({
  id,
  category,
  description,
  image,
  price,
  title,
  onAdd,
  className,
}) => {
  // const onAddHandler = () => {
  //   onAdd(product);
  // };
  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  return (
    <div className={css.product}>
      <img src={image} alt="" className={css.imgItem}/>
      <p className={css.title}>{truncateString(title, 25)}</p>
      {/* <div className={css.description}>{product.description}</div> */}
      <p className={css.price}>
        <span>
          ціна: <b>{price} UAH</b>
        </span>
      </p>
      {/* <Button className={css.add_btn} onClick={onAddHandler}>
        Добавить в корзину
      </Button> */}
    </div>
  );
};

export default ProductItem;
