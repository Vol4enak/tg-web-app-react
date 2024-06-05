import React from "react";
import { useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";
import css from "./BurgerMenu.module.css";
const BurgerMenu = ({ navRef, setIsVisibleMenu }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

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
      {isLoggedIn && <UserMenu />}
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
