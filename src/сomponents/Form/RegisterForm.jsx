import { useState, useEffect } from "react";
import { authOperations, authSelectors } from "../../redux/auth";
import css from "./RegisterForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const RegisterForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const isToken = useSelector(authSelectors.getUserToken);
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
      navigate("/", { replace: true });
      reset();
    }
  }, [isToken, navigate]);

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
        {error &&
          <div style={{ color: "red", marginTop: "10px" }}>{error}</div>
        }
      </form>
    </div>
  );
};
