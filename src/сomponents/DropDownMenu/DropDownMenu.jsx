import React from "react";
import { Link } from "react-router-dom";
import useClickOutside from "../../Hooks/useClickOutside"; // ваш хук
import css from "./DropDownMenu.module.css";

export default function DropDownMenu({ setIsVisibleCategory }) {
  const menuRef = useClickOutside(true, () => {
    setIsVisibleCategory(false);
  });

  return (
    <div className={css.dropdownContainer} ref={menuRef}>
      <ul className={css.menu}>
        <li className={css.menuItem}>
          <Link className={css.link} to={`/category/tv`}>
            TV
          </Link>
        </li>
        <li className={css.menuItem}>
          <Link className={css.link} to={`/category/audio`}>
            Audio
          </Link>
        </li>
        <li className={css.menuItem}>
          <Link className={css.link} to={`/category/laptop`}>
            Laptop
          </Link>
        </li>
        <li className={css.menuItem}>
          <Link className={css.link} to={`/category/mobile`}>
            Mobile
          </Link>
        </li>
        <li className={css.menuItem}>
          <Link className={css.link} to={`/category/gaming`}>
            Gaming
          </Link>
        </li>
        <li className={css.menuItem}>
          <Link className={css.link} to={`/category/appliances`}>
            Appliances
          </Link>
        </li>
      </ul>
    </div>
  );
}
