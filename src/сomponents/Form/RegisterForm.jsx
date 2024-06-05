import { useState } from "react";

// import css from "./formCard.module.css";
// import { useDispatch } from "react-redux";

export const RegisterForm = ({ onSubmit }) => {
  // const dispatch = useDispatch();
  const [name, setName] = useState("");
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
        case "name":
          setName(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(authOperation);
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
          <input
            type="number"
            name="name"
            onChange={handelChange}
            value={name}
            placeholder="name"
            required
          />

          <button type="submit" onSubmit={onSubmit}>
            Add info
          </button>
        </form>
      </div>
    </>
  );
};
