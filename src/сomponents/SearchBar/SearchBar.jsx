import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
function SearchBar() {
  // eslint-disable-next-line no-unused-vars
  const [inputValue, setInputValue] = useState("");

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };
  console.log(inputValue);
  return (
    <>
      <form className={styles.searchForm}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="enter your request"
          onChange={onChangeInput}
        />
        <button className={styles.searchButton}>
          <FaSearch />
        </button>
      </form>
    </>
  );
}

export default SearchBar;
