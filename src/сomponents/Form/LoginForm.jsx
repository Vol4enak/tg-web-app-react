import { useState } from "react";
import { useDispatch } from "react-redux";
// import css from "./formCard.module.css";
import { logIn } from "../../redux/auth/auth-slice";
export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
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
    console.log(email, password);
    dispatch(logIn(email, password));
    e.currentTarget.reset();
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
