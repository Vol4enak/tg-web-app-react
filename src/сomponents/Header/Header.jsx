import React from "react";
import NavBar from "../Nav/NavBar";
// import Button from "../Button/Button";
import style from "./header.module.css";
// import { useTelegram } from "../Hooks/useTelegram";
const Header = () => {
  // const { user, onClose } = useTelegram();

  return (
    <div className={style.header}>
      <NavBar />
    
      {/* <Button onClick={onClose}>3акрыть</Button> */}
      {/* <span className={style.username}>{user?.username}</span> */}
    </div>
  );
};

export default Header;
