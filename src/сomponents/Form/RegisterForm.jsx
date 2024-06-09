import { useState } from "react";
import { authOperations } from "../../redux/auth";
import css from "./RegisterForm.module.css";
import { useDispatch } from "react-redux";

export const RegisterForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "name":
        setName(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <div className={css.register_container}>
      <form className={css.register_form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          placeholder="Password"
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
