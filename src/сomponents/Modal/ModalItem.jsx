import React from "react";
import css from "./ModalItem.module.css";
import { IoMdClose } from "react-icons/io";
import { onAddBasket, onAddFavorite } from "../../redux/Product/productHelper";
import { useDispatch, useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
const ModalMenu = ({
  setIsVisibleModal,
  navref,
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
  return (
    <div
      className={css.modal}
      onClick={() => {
        setIsVisibleModal(false);
      }}
    >
      <div className={css.modal_content} ref={navref}>
        <div
          className={css.modal_header}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <h2 className={`${css.title} ${css.truncate}`}>{title}</h2>
          <button
            onClick={() => {
              setIsVisibleModal(false);
            }}
            className={css.close_btn}
          >
            <IoMdClose
              style={{
                width: "30px",
                height: "30px",
                fill: "black",
              }}
            />
          </button>
        </div>
        <div className={css.modal_body}>
          <img src={image} alt={title} className={css.modal_image} />
          <p className={`${css.description} ${css.truncate}`}>{description}</p>
          <p className={css.infoP}>Бренд: {brand}</p>
          <p className={css.infoP}>Модель: {model}</p>
          <p className={css.infoP}>Цвет: {color}</p>
          <p className={css.infoP}>Категория: {category}</p>
          <p className={css.infoP}>Цена: {price} UAH</p>

          {onSale && <p className={css.infoP}>Распродажа!</p>}
          {popular && <p className={css.infoP}>Популярный товар!</p>}
          {discount && (
            <p className={css.infoP}>Кількість товару: {discount}.</p>
          )}

          <div className={css.boxAddHelper}>
            <button
              className={css.favorite_btn}
              style={{
                backgroundColor: activeFavorite ? "#ff4d4d" : "#00cc66",
              }}
              onClick={() => onAddHandler("favorite")}
            >
              {activeFavorite ? "Прибрати з улюблених" : "Додати в улюблені"}
            </button>
            <button
              className={css.basket_btn}
              style={{ backgroundColor: activeBasket ? "#ff4d4d" : "#00cc66" }}
              onClick={() => onAddHandler("basket")}
            >
              {activeBasket ? "Прибрати з кошика" : "Додати у кошик"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMenu;
