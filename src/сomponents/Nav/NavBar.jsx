import React from "react";
import css from "./NavBar.module.css";
import useToggle from "../Hooks/useTelegram";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import { IoMdClose } from "react-icons/io";
function NavBar() {
  const [isVisible, setIsVisible] = useToggle(false);

  return (
    <div className={css.navBox}>
      <nav className={css.navBar}>
        <div className={css.burgerMenu} onClick={setIsVisible}>
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
