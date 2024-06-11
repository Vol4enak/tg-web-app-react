import { useState, useEffect } from "react";
import { authOperations, authSelectors } from "../../redux/auth";
import css from "./RegisterForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Notiflix from "notiflix";
export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const isToken = useSelector(authSelectors.getUserToken);
  const nameUser = useSelector(authSelectors.getUsername);
  const error = useSelector(authSelectors.getUserErrorReg);
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
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
  };
  const reset = () => {
    setEmail("");
    setPassword("");
    setName("");
  };
  useEffect(() => {
    if (isToken) {
      Notiflix.Notify.success(`Welcome ${nameUser}!!!`);
      navigate("/", { replace: true });
      reset();
    }
  }, [isToken, nameUser, navigate]);

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
        <p>
          Already have account? <a href="/login">login!</a>
        </p>
        {error && (
          <div style={{ color: "red", marginTop: "10px" }}>{error}</div>
        )}
      </form>
    </div>
  );
};
