import React from "react";

import ProductItemCard from "../productItemCard";

import styles from "./list.module.scss";


import { useGetAllProductsQuery } from "../../store";

interface IProductListProps {
  customClass?: string;
}

function ProductList({ customClass = "" }: IProductListProps) {
  const { isFetching, isLoading, error, data } = useGetAllProductsQuery(null);

  return (
    <div className={styles.procuctList}>
      {data?.products.map((item) => (
        <ProductItemCard
          key={item.id + item.title}
          id={item.id + ""}
          title={item.title}
          image={item.thumbnail}
          rating={item.rating}
          price={item.price}
          discount={item.discountPercentage}
        />
      ))}
    </div>
  );
}

export default ProductList;
