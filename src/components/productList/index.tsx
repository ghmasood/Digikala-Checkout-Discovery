import React, { useState } from "react";

import ProductItemCard from "../productItemCard";

import styles from "./list.module.scss";

import { useGetAllProductsQuery } from "../../store";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query/fetchBaseQuery";
import Pagination from "../pagination";

interface IProductListProps {
  customClass?: string;
}

function ProductList({ customClass = "" }: IProductListProps) {
  const itemPerPage = 10;
  const [page, setPage] = useState(0);
  const { isFetching, isLoading, error, data } = useGetAllProductsQuery({
    limit: itemPerPage,
    skip: page * itemPerPage,
  });
  const err = error as FetchBaseQueryError;
  return (
    <>
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
    </>
  );
}

export default ProductList;
