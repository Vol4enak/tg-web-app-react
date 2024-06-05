import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { TbCategory } from "react-icons/tb";
import { TiThMenu } from "react-icons/ti";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import { IoMdClose } from "react-icons/io";
import useClickOutside from "../../Hooks/useClickOutside";
import useToggle from "../../Hooks/useToggle";
import css from "./NavBar.module.css";
function NavBar() {
  const [isVisibleMenu, setIsVisibleMenu] = useToggle(false);
  const [isVisibleCategory, setIsVisibleCategory] = useToggle(false);
  const navRef = useClickOutside(
    isVisibleMenu,
    () => {
      setIsVisibleMenu(false);
    },
    css.noScroll
  );

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
          >
            <TbCategory
              style={{
                width: "30px",
                height: "30px",
                // fill: "var(--tg-theme-text-color)",
              }}
            />
            <br />
            {isVisibleCategory && <DropDownMenu />}
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
        </div>
      )}
    </div>
  );
}

export default NavBar;
