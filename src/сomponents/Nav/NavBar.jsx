import React, { useEffect, useRef } from "react";
import css from "./NavBar.module.css";
import useToggle from "../Hooks/useToggle";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import useClickOutside from "../Hooks/useClickOutside";
import { IoMdClose } from "react-icons/io";
function NavBar() {
  const [isVisible, setIsVisible] = useToggle(false);
  const navRef = useClickOutside(isVisible, setIsVisible, css.noScroll);

  return (
    <div className={css.navBox} ref={navRef}>
      <nav className={css.navBar}>
        <div
          className={css.burgerMenu}
          onClick={() => setIsVisible(!isVisible)}
        >
          <div
            className={`${css.burgerBar} ${
              isVisible ? css.clicked : css.unclicked
            }`}
          ></div>
          <div
            className={`${css.burgerBar} ${
              isVisible ? css.clicked : css.unclicked
            }`}
          ></div>
          <div
            className={`${css.burgerBar} ${
              isVisible ? css.clicked : css.unclicked
            }`}
          ></div>
        </div>
      </nav>
      <div className={`${css.modalMenu} ${isVisible ? css.visible : ""}`}>
        <button onClick={setIsVisible} className={css.closeBtn}>
          <IoMdClose style={{ width: "25px", height: "25px" }} />
        </button>
        <DropDownMenu />
      </div>
    </div>
  );
}

export default NavBar;
