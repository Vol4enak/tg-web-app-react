import React, { useState } from "react";
import css from "./NavBar.module.css";

function NavBar() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div className={css.navBox}>
      <nav className={css.navBar}>
        <div className={css.burgerMenu} onClick={toggleMenu}>
          <div
            className={`${css.burgerBar} ${
              isMenuActive ? css.clicked : css.unclicked
            }`}
          ></div>
          <div
            className={`${css.burgerBar} ${
              isMenuActive ? css.clicked : css.unclicked
            }`}
          ></div>
          <div
            className={`${css.burgerBar} ${
              isMenuActive ? css.clicked : css.unclicked
            }`}
          ></div>
        </div>
      </nav>
      <div
        className={`${css.menu} ${isMenuActive ? css.visible : css.hidden}`}
      ></div>
    </div>
  );
}

export default NavBar;
