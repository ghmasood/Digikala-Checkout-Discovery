import React, { useState } from "react";

import styles from "./list.module.scss";

import { useGetAllProductsQuery } from "../../store";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query/fetchBaseQuery";
import Pagination from "../pagination";
import ProductItemCard from "./components/productItemCard";
import SearchBar from "components/searchBar";

interface IProductListProps {
  customClass?: string;
}

function ProductList({ customClass = "" }: IProductListProps) {
  const itemPerPage = 10;
  const [page, setPage] = useState(0);
  const [searchParam, setSearchParam] = useState("");
  const { isFetching, isLoading, error, data } = useGetAllProductsQuery({
    limit: itemPerPage,
    skip: page * itemPerPage,
  });
  const err = error as FetchBaseQueryError;
  console.log(searchParam);
  return (
    <div className={styles.contentFrame}>
      <SearchBar search={searchParam} setSearch={setSearchParam} />
      <div className={styles.procuctList}>
        {isLoading || isFetching ? (
          <div>loading...</div>
        ) : err ? (
          <div>{err.status}</div>
        ) : (
          data?.products.map((item) => (
            <ProductItemCard key={item.id + item.title} cardData={item} />
          ))
        )}
      </div>
      {!isLoading && !isFetching && (
        <Pagination
          total={data?.total ?? 0}
          limit={itemPerPage}
          skip={page}
          onChange={(p) => setPage(p)}
        />
      )}
    </div>
  );
}

export default ProductList;
