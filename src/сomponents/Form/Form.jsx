// import React, { useState, useEffect } from "react";
// import css from "./Form.module.css";
// import { useTelegram } from "../Hooks/useTelegram";
const Form = () => {
//   const [country, setCountry] = useState("");
//   const [street, setStreet] = useState("");
//   const [subject, setSubject] = useState("physical");
//   const { tg } = useTelegram();

//   useEffect(() => {
//     tg.MainButton.setParams({
//       text: "отправить данные",
//     });
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   useEffect(() => {
//     if (!street || !country) {
//       tg.MainButton.hide();
//     } else {
//       tg.MainButton.show();
//     }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [country, street]);

//   const onChangeCountry = (e) => {
//     setCountry(e.target.value);
//   };
//   const onChangeStreet = (e) => {
//     setStreet(e.target.value);
//   };

//   const onChangeSubject = (e) => {
//     setSubject(e.target.value);
//   };

  return (
    <div>ghbdtn</div>
    // <div className={css.form}>
    //   <h3>Введите данные</h3>
    //   <input
    //     type="text"
    //     placeholder="country"
    //     className={css.input}
    //     value={country}
    //     onChange={onChangeCountry}
    //   />
    //   <input
    //     type="text"
    //     placeholder="city"
    //     className={css.input}
    //     value={street}
    //     onChange={onChangeStreet}
    //   />

    //   <select value={subject} onChange={onChangeSubject} className={css.select}>
    //     <option value={"physical"}>fiz</option>
    //     <option value={"legal"}>ur</option>
    //   </select>
    // </div>
  );
};

export default Form;
