import React from "react";
import css from "./ProductItem.module.css";
import useClickOutside from "../../Hooks/useClickOutside";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingCart } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { authSelectors } from "../../redux/auth";
import { onAddBasket, onAddFavorite } from "../../redux/Product/product-helper";
import Modal from "../Modal/Modal";
import useToggle from "../../Hooks/useToggle";
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
  activeFavorite,
  activeBasket,
}) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();
  const [isVisibleModal, setIsVisibleModal] = useToggle(false);

  const navRef = useClickOutside(
    isVisibleModal,
    () => {
      setIsVisibleModal(false);
    },
    css.noScroll
  );

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
    };
    const filteredProduct = filterUndefinedProperties(product);
    if (actionType === "favorite") {
      onAddFavorite(filteredProduct, dispatch, isLoggedIn);
    } else if (actionType === "basket") {
      onAddBasket(filteredProduct, dispatch, isLoggedIn);
    }
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
    <li className={css.productItem} onClick={() => setIsVisibleModal(true)}>
      <button
        className={css.svgLike}
        onClick={(e) => {
          e.stopPropagation()
          onAddHandler("favorite");
        }}
      >
        <GoHeartFill
          style={{
            width: "15px",
            height: "15px",
            fill: activeFavorite ? "red" : "grey", // Используем красный цвет, если продукт в избранном
          }}
        />
      </button>
      <button
        className={css.svgBuy}
        onClick={(e) => {
          e.stopPropagation()
          onAddHandler("basket");
        }}
      >
        <HiShoppingCart
          style={{
            width: "15px",
            height: "15px",
            fill: activeBasket ? "green" : "grey", // Используем зеленый цвет, если продукт в корзине
          }}
        />
      </button>
      <img src={image} alt="" className={css.imgItem} />
      <p className={css.titles}>{truncateString(title, 25)}</p>
      <p className={css.price}>
        <span>
          ціна: <b>{price} UAH</b>
        </span>
      </p>
      {isVisibleModal && (
        <Modal
          navRef={navRef}
          key={_id}
          _id={_id}
          id={id}
          title={title}
          image={image}
          price={price}
          description={description}
          brand={brand}
          model={model}
          color={color}
          category={category}
          onSale={onSale}
          popular={popular}
          discount={discount}
          activeFavorite={activeFavorite}
          activeBasket={activeBasket}
          setIsVisibleModal={setIsVisibleModal}
        />
      )}
    </li>
  );
};

export default ProductItem;
