import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authOperations, authSelectors } from "../../redux/auth";
import Notiflix from "notiflix";
import css from "./LoginForm.module.css";

export const LoginForm = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const nameUser = useSelector(authSelectors.getUsername);
  const error = useSelector(authSelectors.getUserErrorLogin);
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
    dispatch(authOperations.logIn({ email, password }));
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (isLoggedIn) {
      Notiflix.Notify.success(`Welcome ${nameUser}!!!`);
      navigate("/", { replace: true });
      reset();
    }
  }, [isLoggedIn, nameUser, navigate]);

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
          <p>
            Dont have account? <a href="/register">Register!</a>
          </p>
          {error && (
            <div style={{ color: "red", marginTop: "10px" }}>
              {error.message}
            </div>
          )}
        </form>
      </div>
    </>
  );
};
