import React, { useEffect, useState } from "react";

import ProductItemCard from "../productItemCard";

import styles from "./list.module.scss";

import { productFetcher } from "./services";

import { productsType } from "../../types";
interface IProductListProps {
  customClass?: string;
}

function ProductList({ customClass = "" }: IProductListProps) {
  //STATES
  const [products, setProducts] = useState<productsType>();
  //LIFE CYCLE HOOK
  useEffect(() => {
    productFetcher(setProducts);
  }, []);

  return (
    <div className={styles.procuctList}>
      {products?.products.map((item) => (
        <ProductItemCard
          key={item.id + ""}
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
