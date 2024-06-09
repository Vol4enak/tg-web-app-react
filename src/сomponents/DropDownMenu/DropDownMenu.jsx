import React from "react";
import { Link } from "react-router-dom";
import css from "./DropDownMenu.module.css";

export default function DropDownMenu() {
  return (
    <div className={css.dropdownContainer}>
      <ul className={css.menu}>
        <li className={css.menuItem}>
          <Link className={css.link} to={`/category/tv`}>
            tv
          </Link>
        </li>
        <li className={css.menuItem}>
          <Link className={css.link} to={`/category/audio`}>
            audio
          </Link>
        </li>
        <li className={css.menuItem}>
          <Link className={css.link} to={`/category/laptop`}>
            laptop
          </Link>
        </li>
        <li className={css.menuItem}>
          <Link className={css.link} to={`/category/mobile`}>
            mobile
          </Link>
        </li>
        <li className={css.menuItem}>
          <Link className={css.link} to={`/category/gaming`}>
            gaming
          </Link>
        </li>
        <li className={css.menuItem}>
          <Link className={css.link} to={`/category/appliances`}>
            appliances
          </Link>
        </li>
      </ul>
    </div>
  );
}
