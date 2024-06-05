import { useState } from "react";

// import css from "./formCard.module.css";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
