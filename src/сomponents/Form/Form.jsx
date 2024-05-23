import React, { useState } from "react";
import css from "./Form.module.css";
const Form = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [subject, setSubject] = useState("physical");

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const onChangeCity = (e) => {
    setCity(e.target.value);
  };

  const onChangeSubject = (e) => {
    setSubject(e.target.value);

  };

  return (
    <div className={css.form}>
      <h3>Введите данные</h3>
      <input
        type="text"
        placeholder="country"
        className={css.input}
        value={country}
        onChange={onChangeCountry}
      />
      <input
        type="text"
        placeholder="city"
        className={css.input}
        value={city}
        onChange={onChangeCity}
      />

      <select value={subject} onChange={onChangeSubject} className={css.select} >
        <option value={"physical"}>fiz</option>
        <option value={"legal"}>ur</option>
      </select>
    </div>
  );
};

export default Form;
