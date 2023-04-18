import React from "react";

import ProductItemCard from "../productItemCard";

import styles from "./list.module.scss";

import { useGetAllProductsQuery } from "../../store";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query/fetchBaseQuery";

interface IProductListProps {
  customClass?: string;
}

function ProductList({ customClass = "" }: IProductListProps) {
  const { isFetching, isLoading, error, data } = useGetAllProductsQuery(null);
  const err = error as FetchBaseQueryError;

  return (
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
  );
}

export default ProductList;
