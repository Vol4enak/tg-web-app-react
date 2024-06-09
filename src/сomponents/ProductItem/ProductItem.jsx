import React from "react";
import css from "./ProductItem.module.css";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingCart } from "react-icons/hi";
import authSelectors from "../../redux/auth/auth-selectors";
import { useSelector, useDispatch } from "react-redux";
import { onAddBasket, onAddFavorite } from "../../redux/Product/product-helper";
const ProductItem = ({
  _id,
  id,
  title,
  image,
  price,
  description,
  brand,
  model,
  color,
  category,
  popular,
  onSale,
  discount,
  favorite,
  basket,
}) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();
  const filterUndefinedProperties = (obj) => {
    const filteredObj = {};
    for (const [key, value] of Object.entries(obj)) {
      if (value !== undefined) {
        filteredObj[key] = value;
      }
    }
    return filteredObj;
  };
 
  const onAddHandler = (actionType) => {
    const product = {
      _id,
      id,
      title,
      image,
      price,
      description,
      brand,
      model,
      color,
      category,
      popular,
      onSale,
      discount,
      favorite,
      basket,
    };
    const filteredProduct = filterUndefinedProperties(product);
    if (actionType === "favorite") {
      onAddFavorite(filteredProduct, dispatch, isLoggedIn);
    } else if (actionType === "basket") {
      onAddBasket(filteredProduct, dispatch, isLoggedIn);
    }
  };

  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  return (
    <li className={css.productItem}>
      <button
        className={css.svgLike}
        onClick={() => {
          onAddHandler("favorite");
        }}
      >
        <GoHeartFill
          style={{
            width: "15px",
            height: "15px",
            fill: favorite ? "red" : "grey", // Используем красный цвет, если продукт в избранном
          }}
        />
      </button>
      <button
        className={css.svgBuy}
        onClick={() => {
          onAddHandler("basket");
        }}
      >
        <HiShoppingCart
          style={{
            width: "15px",
            height: "15px",
            fill: basket ? "green" : "grey", // Используем зеленый цвет, если продукт в корзине
          }}
        />
      </button>
      <img src={image} alt="" className={css.imgItem} />
      <p className={css.title}>{truncateString(title, 25)}</p>
      <p className={css.price}>
        <span>
          ціна: <b>{price} UAH</b>
        </span>
      </p>
    </li>
  );
};

export default ProductItem;
