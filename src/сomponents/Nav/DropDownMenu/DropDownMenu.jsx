import React from "react";
import { Link } from "react-router-dom";
import css from "./DropDownMenu.module.css";
import useToggle from "../../../Hooks/useToggle";
import { useBurgerMenu } from "../../СontextAPI/ContextAPI";
import useFetchData from "../../../Hooks/useFetchData";

export default function DropDownMenu() {
  const [isVisible, setIsVisible] = useToggle(false);
  const { closeBurgerMenu } = useBurgerMenu();
  const {
    data: fetchData,
    loading,
    error,
  } = useFetchData("https://adorable-lebkuchen-d0f7d9.netlify.app/api/category");

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={css.dropdownContainer}>
      <button className={css.toggleButton} onClick={setIsVisible}>
        Каталог товаров
      </button>
      <ul className={`${css.menu} ${isVisible ? css.visible : ""}`}>
        {fetchData.categories.map((categories) => (
          <li key={categories} className={css.menuItem}>
            <Link
              className={css.link}
              to={`/category/${categories}`}
              onClick={closeBurgerMenu}
            >
              {categories}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
