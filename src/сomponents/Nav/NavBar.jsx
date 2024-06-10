import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { TbCategory } from "react-icons/tb";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { FaShoppingBasket } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import Notiflix from "notiflix";
import useToggle from "../../Hooks/useToggle";
import useClickOutside from "../../Hooks/useClickOutside";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { authSelectors } from "../../redux/auth";
import css from "./NavBar.module.css";

function NavBar() {
  const [isVisibleMenu, setIsVisibleMenu] = useToggle(false);
  const [isVisibleCategory, setIsVisibleCategory] = useToggle(false);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const navRef = useClickOutside(
    isVisibleMenu,
    () => {
      setIsVisibleMenu(false);
    },
    css.noScroll
  );

  Notiflix.Notify.init({
    position: "right-bottom",
  });

  return (
    <div className={css.navBox}>
      <nav className={css.navBar}>
        <a href="/" className={css.logo}>
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRfj92hNYhlP-aQqZ84CY_c7P48GobsririeIPOkX8IcN6y32ui"
            alt="logo"
            className={css.logo}
          />
        </a>
        <ul className={css.navList}>
          <li
            className={css.navList_item}
            onClick={() => {
              setIsVisibleCategory(true);
            }}
            navRef={navRef}
          >
            <TbCategory
              style={{
                width: "30px",
                height: "30px",
                // fill: "var(--tg-theme-text-color)",
              }}
            />
            <br />
            {isVisibleCategory && (
              <DropDownMenu setIsVisibleCategory={setIsVisibleCategory} />
            )}
          </li>
          <li className={css.navList_item}>
            <Link
              to={isLoggedIn ? "/favorites" : "/"}
              onClick={() => {
                if (!isLoggedIn) {
                  Notiflix.Notify.info(
                    "Щоб переглянути свої вподобайки будьласка увійдіть в акаунт"
                  );
                }
              }}
            >
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
            <Link
              to={isLoggedIn ? "/basket" : "/"}
              onClick={() => {
                if (!isLoggedIn) {
                  Notiflix.Notify.info(
                    "Щоб переглянути свій кошик будьласка увійдіть в акаунт"
                  );
                }
              }}
            >
              <FaShoppingBasket
                style={{
                  width: "30px",
                  height: "30px",
                  fill: "var(--tg-theme-text-color)",
                }}
              />
            </Link>
          </li>
        </ul>

        <button
          className={css.bthMenu}
          onClick={() => {
            setIsVisibleMenu(true);
          }}
        >
          <TiThMenu
            style={{
              width: "40px",
              height: "40px",
              fill: "var(--tg-theme-text-color)",
            }}
          />
        </button>
      </nav>
      {isVisibleMenu && (
        <BurgerMenu navRef={navRef} setIsVisibleMenu={setIsVisibleMenu} />
      )}
    </div>
  );
}

export default NavBar;
