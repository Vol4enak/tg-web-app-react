import React from "react";
import css from "./Modal.module.css";
import { IoMdClose } from "react-icons/io";
const Modal = ({
  setIsVisibleModal,
  navRef,
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
  return (
    <div
      className={css.modal}
      onClick={() => {
        setIsVisibleModal(false);
      }}
    >
      <div className={css.modal_content} ref={navRef}>
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
                fill: "var(--tg-theme-text-color)",
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
          {discount && <p className={css.infoP}>Скидка: {discount}%</p>}

          <button className={css.favorite_btn}>
            {activeFavorite ? "Убрать из избранного" : "Добавить в избранное"}
          </button>
          <button className={css.basket_btn}>
            {activeBasket ? "Убрать из корзины" : "Добавить в корзину"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
