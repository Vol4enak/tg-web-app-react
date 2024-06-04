import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { TbCategory } from "react-icons/tb";
import { TiThMenu } from "react-icons/ti";

import { useBurgerMenu } from "../Сontext/Contexts";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import { IoMdClose } from "react-icons/io";
import useClickOutside from "../../Hooks/useClickOutside";
import useToggle from "../../Hooks/useToggle";
import css from "./NavBar.module.css";
function NavBar() {
  const { isBurgerMenuOpen, toggleBurgerMenu, closeBurgerMenu } =
    useBurgerMenu();
  const [isVisible, setIsVisible] = useToggle(false);
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
        <ul className={css.navList}>
          <li className={css.navList_item} onClick={() => setIsVisible(true)}>
            <TbCategory
              style={{
                width: "30px",
                height: "30px",
                // fill: "var(--tg-theme-text-color)",
              }}
            />
            <br />
            {isVisible ? <DropDownMenu isVisible={isVisible} /> : null}
          </li>
          <li className={css.navList_item}>
            <Link to="/favorites">
              <BsFillEmojiHeartEyesFill
                style={{
                  width: "30px",
                  height: "30px",
                  fill: "var(--tg-theme-text-color)",
                }}
              />
            </Link>
          </li>
          <li className={css.navList_item}>
            <Link to="/basket">
              <FaShoppingBasket
                style={{
                  width: "30px",
                  height: "30px",
                  fill: "var(--tg-theme-text-color)",
                }}
              />{" "}
            </Link>
          </li>
        </ul>
        <div className={css.burgerMenu} onClick={toggleBurgerMenu}>
          <div
            className={`${css.burgerBar} ${
              isBurgerMenuOpen ? css.clicked : css.unclicked
            }`}
          >
            <TiThMenu
              style={{
                width: "40px",
                height: "40px",
                fill: "var(--tg-theme-text-color)",
              }}
            />
          </div>
        </div>
      </nav>
      <div
        className={`${css.modalMenu} ${isBurgerMenuOpen ? css.visible : ""}`}
      >
        <button onClick={closeBurgerMenu} className={css.closeBtn}>
          <IoMdClose
            style={{
              width: "30px",
              height: "30px",
              fill: "var(--tg-theme-text-color)",
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
