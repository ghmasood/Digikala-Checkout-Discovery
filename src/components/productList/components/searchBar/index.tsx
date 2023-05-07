import React, { useEffect, useState } from "react";
import styles from "./searchBar.module.scss";
import { useGetSearchProductQuery } from "store/API/productApi";
import { productsType } from "types";
interface ISearchBar {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
function SearchBar({ search, setSearch, setPage }: ISearchBar) {
  //QUERY PARAM
  //RTK HOOK

  return (
    <div className={styles.searchBar}>
      <label htmlFor="search">Search Item</label>
      <input
        id="search"
        value={search}
        onChange={(e) => {
          setPage(0);
          setSearch(e.target.value);
        }}
        placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
      />
    </div>
  );
}

export default SearchBar;
