import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilter } from "../../redux/filterSlice";
import styles from "./SearchBox.module.css"; // CSS modülünü içeri aktarın

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search contacts..."
        value={filter || ""}
        onChange={handleChange}
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchBox;
