import React from "react";

import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import css from "./UserMenu.module.css";
import { useNavigate } from "react-router-dom";
const UserMenu = ({ setIsVisibleMenu }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(authOperations.logOut());
    navigate("/", { replace: true });
  };

  return (
    <div>
      <button
        className={css.logout_button}
        type="button"
        onClick={() => {
          setIsVisibleMenu(false);
          handleLogout();
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
