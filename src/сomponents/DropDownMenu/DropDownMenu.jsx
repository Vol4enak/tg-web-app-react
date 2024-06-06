import React from "react";
import { Link } from "react-router-dom";
import css from "./DropDownMenu.module.css";

import useFetchData from "../../Hooks/useFetchData";

export default function DropDownMenu() {


  const {
    data: fetchData,
    loading,
    error,
  } = useFetchData(
    "https://tg-web-app-node-5618b5f5f78b.herokuapp.com/api/data/category"
  );

  if (loading) {
    return;
  }

  if (error) {
    return console.log(error);
  }

  return (
    <div className={css.dropdownContainer}>
      <ul className={css.menu}>
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
