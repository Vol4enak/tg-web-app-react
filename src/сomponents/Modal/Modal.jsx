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
          {/* Вывод информации о продукте */}
          <img src={image} alt={title} className={css.modal_image} />
          <p className={`${css.description} ${css.truncate}`}>{description}</p>
          <p>Бренд: {brand}</p>
          <p>Модель: {model}</p>
          <p>Цвет: {color}</p>
          <p>Категория: {category}</p>
          <p>Цена: {price} UAH</p>

          {onSale && <p>Распродажа!</p>}
          {popular && <p>Популярный товар!</p>}
          {discount && <p>Скидка: {discount}%</p>}

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
