import React from "react";
import styles from "./searchBar.module.scss";
interface ISearchBar {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
function SearchBar({ search, setSearch }: ISearchBar) {
  return (
    <div className={styles.searchBar}>
      <label htmlFor="search">Search Item</label>
      <input
        id="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
      />
    </div>
  );
}

export default SearchBar;
