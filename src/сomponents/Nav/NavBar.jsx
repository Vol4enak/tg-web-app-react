// NavBar.js
import React from "react";
import css from "./NavBar.module.css";
import { useBurgerMenu } from "../СontextAPI/ContextAPI";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import { IoMdClose } from "react-icons/io";
import useClickOutside from "../../Hooks/useClickOutside";

function NavBar() {
  const { isBurgerMenuOpen, toggleBurgerMenu, closeBurgerMenu } =
    useBurgerMenu();
  const navRef = useClickOutside(
    isBurgerMenuOpen,
    closeBurgerMenu,
    css.noScroll
  );

  return (
    <div className={css.navBox} ref={navRef}>
      <nav className={css.navBar}>
        <a href="/" className={css.logo}>
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRfj92hNYhlP-aQqZ84CY_c7P48GobsririeIPOkX8IcN6y32ui"
            alt="logo"
            className={css.logo}
          />
        </a>
        <div className={css.burgerMenu} onClick={toggleBurgerMenu}>
          <div
            className={`${css.burgerBar} ${
              isBurgerMenuOpen ? css.clicked : css.unclicked
            }`}
          ></div>
          <div
            className={`${css.burgerBar} ${
              isBurgerMenuOpen ? css.clicked : css.unclicked
            }`}
          ></div>
          <div
            className={`${css.burgerBar} ${
              isBurgerMenuOpen ? css.clicked : css.unclicked
            }`}
          ></div>
        </div>
      </nav>
      <div
        className={`${css.modalMenu} ${isBurgerMenuOpen ? css.visible : ""}`}
      >
        <button onClick={closeBurgerMenu} className={css.closeBtn}>
          <IoMdClose style={{ width: "30px", height: "30px" }} />
        </button>
        <DropDownMenu />
      </div>
    </div>
  );
}

export default NavBar;
