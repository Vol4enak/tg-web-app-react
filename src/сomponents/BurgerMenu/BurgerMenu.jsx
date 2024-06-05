import React from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

import css from "./BurgerMenu.module.css";
const BurgerMenu = ({ navRef, setIsVisibleMenu }) => {
  return (
    <div className={css.menu} ref={navRef}>
      <button
        onClick={() => {
          setIsVisibleMenu(false);
        }}
        className={css.closeBtn}
      >
        <IoMdClose
          style={{
            width: "30px",
            height: "30px",
            fill: "var(--tg-theme-text-color)",
          }}
        />
      </button>

      <ul className={css.burgtrList}>
        <li onClick={() => setIsVisibleMenu(false)} className={css.burgtrItem}>
          <Link to="/login" className={css.burgtrItemLink}>
            login
          </Link>
        </li>
        <li onClick={() => setIsVisibleMenu(false)} className={css.burgtrItem}>
          <Link to="register" className={css.burgtrItemLink}>
            register
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
