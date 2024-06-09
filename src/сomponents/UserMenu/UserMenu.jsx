import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authOperations, authSelectors } from "../../redux/auth";
import css from "./UserMenu.module.css";
const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  return (
    <div className={css.welcome_container}>
      <span className={css.welcome_message}>Welcome, {name}</span>
      <button
        className={css.logout_button}
        type="button"
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
