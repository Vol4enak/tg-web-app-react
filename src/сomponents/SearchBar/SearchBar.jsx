import React from "react";
import { useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";
import { productActions } from "../../redux/Product";

function SearchBar() {
  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    dispatch(productActions.setSearchQuery(e.target.value));
  };

  return (
    <>
      <form className={styles.searchForm} onSubmit={(e) => e.preventDefault()}>
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
