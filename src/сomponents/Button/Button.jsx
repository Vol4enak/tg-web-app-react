import React from "react";
import css from "./button.module.css"
const Button = (props) => {
  return <button {...props} className={css.button}/>;
};

export default Button;
