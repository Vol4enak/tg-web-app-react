import React from "react";
import css from "./ModalMenu.module.css";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import UserMenu from "../UserMenu/UserMenu";

const ModalMenu = ({ navref, setIsVisibleMenu }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div className={css.overlay} onClick={() => setIsVisibleMenu(false)}>
      <div
        className={css.modal}
        onClick={(e) => e.stopPropagation()}
        navref={navref}
      >
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
        {!isLoggedIn ? (
          <ul className={css.modalList}>
            <li
              onClick={() => setIsVisibleMenu(false)}
              className={css.modalItem}
            >
              <Link to="/login" className={css.modalItemLink}>
                Login
              </Link>
            </li>
            <li
              onClick={() => setIsVisibleMenu(false)}
              className={css.modalItem}
            >
              <Link to="/register" className={css.modalItemLink}>
                Register
              </Link>
            </li>
          </ul>
        ) : (
          <UserMenu setIsVisibleMenu={setIsVisibleMenu} />
        )}
      </div>
    </div>
  );
};

export default ModalMenu;
