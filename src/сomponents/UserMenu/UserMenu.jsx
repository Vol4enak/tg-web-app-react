import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authOperations, authSelectors } from "../../redux/auth";
// import { logOut } from "../../redux/auth/auth-slice";
const UserMenu = () => {
  // const login = useSelector((state) => state.user.login);
  // const dispatch = useDispatch();
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  return (
    <div>
      <span> wellcome {name}</span>
      <button
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
