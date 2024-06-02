import React from "react";
import css from "./DropDownMenu.module.css";
import useToggle from "../../Hooks/useTelegram";
export default function DropDownMenu() {
  const [isVisible, setIsVisible] = useToggle(false);

  return (
    <div className={css.dropdownContainer}>
      <button className={css.toggleButton} onClick={setIsVisible}>
        Каталог товаров
      </button>
      <ul className={`${css.menu} ${isVisible ? css.visible : ""}`}>
        <li className={css.menuItem}>Товар 1</li>
        <li className={css.menuItem}>Товар 2</li>
        <li className={css.menuItem}>Товар 3</li>
        <li className={css.menuItem}>Товар 4</li>
        <li className={css.menuItem}>Товар 5</li>
      </ul>
    </div>
  );
}
