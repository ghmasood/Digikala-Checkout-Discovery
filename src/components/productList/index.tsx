import React, { useEffect, useState } from "react";

import styles from "./list.module.scss";

import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query/fetchBaseQuery";
import Pagination from "../pagination";
import ProductItemCard from "./components/productItemCard";
import SearchBar from "components/productList/components/searchBar";
import { productsType } from "types";
import { useGetSearchProductQuery } from "store";

interface IProductListProps {
  customClass?: string;
}

function ProductList({ customClass = "" }: IProductListProps) {
  //QUERY PARAMS
  const itemPerPage = 10;
  const [page, setPage] = useState(0);
  const [searchParam, setSearchParam] = useState("");
  //RTK HOOK
  const { isFetching, isLoading, error, data } = useGetSearchProductQuery({
    limit: itemPerPage,
    skip: page * itemPerPage,
    search: searchParam,
  });

  const err = error as FetchBaseQueryError;
  return (
    <div className={styles.contentFrame}>
      <SearchBar
        search={searchParam}
        setSearch={setSearchParam}
        setPage={setPage}
      />
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
