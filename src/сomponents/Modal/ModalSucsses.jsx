import React from "react";
import css from "./ModalSucsses.module.css";
import { IoMdClose } from "react-icons/io";

const ModalSucsses = ({ navref, setIsVisibleSuc }) => {
  return (
    <div className={css.overlay} onClick={() => setIsVisibleSuc(false)}>
      <div
        className={css.modal}
        onClick={(e) => e.stopPropagation()}
        navref={navref}
      >
        Дякую за замовлення
        <button
          onClick={() => {
            setIsVisibleSuc(false);
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
      </div>
    </div>
  );
};

export default ModalSucsses;
