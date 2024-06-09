import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authOperations } from "../../redux/auth";
import css from "./LoginForm.module.css";
// import { logIn } from "../../redux/auth/auth-slice";
export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // onSubmit(email, password,);
    dispatch(authOperations.logIn({ email, password }));
    reset();
    navigate("/", { replace: true });
  };
  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className={css.login_container}>
        <form className={css.login_form} onSubmit={handleSubmit}>
          <input
            type="text"
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
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};
