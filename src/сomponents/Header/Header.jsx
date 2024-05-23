import React from "react";
import Button from "../Button/button";
import { useTelegram } from "../Hooks/useTelegram";
const Header = () => {
  const { user, onClose } = useTelegram();

  return (
    <div className={"heared"}>
      <Button onClick={onClose}>3акрыть</Button>
      <span className={"username"}>{user?.username}</span>
    </div>
  );
};

export default Header;
