import React from "react";
import { Link } from "react-router-dom";
import css from "./DropDownMenu.module.css";

import useFetchData from "../../../Hooks/useFetchData";

export default function DropDownMenu({isVisible}) {


  const {
    data: fetchData,
    loading,
    error,
  } = useFetchData(
    "https://tg-web-app-node-5618b5f5f78b.herokuapp.com/api/category"
  );

  if (loading) {
    return;
  }

  if (error) {
    return console.log(error);
  }

  return (
    <div className={css.dropdownContainer}>
      <ul className={`${css.menu} ${isVisible ? css.visible : ""}`}>
        {fetchData.categories.map((categories) => (
          <li key={categories} className={css.menuItem}>
            <Link
              className={css.link}
              to={`/category/${categories}`}
            >
              {categories}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
