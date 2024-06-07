import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authOperations } from "../../redux/auth";
// import css from "./formCard.module.css";
// import { logIn } from "../../redux/auth/auth-slice";
export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelChange = (e) => {
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
    dispatch(authOperations.logIn({email, password}))
    reset();
    navigate("/", { replace: true });
  };
  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            onChange={handelChange}
            value={email}
            placeholder="email"
            required
          />
          <input
            type="number"
            name="password"
            onChange={handelChange}
            value={password}
            placeholder="password"
            required
          />

          <button type="submit">Add info</button>
        </form>
      </div>
    </>
  );
};
