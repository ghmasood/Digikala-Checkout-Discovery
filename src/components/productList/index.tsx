import React, { useEffect, useState } from "react";
import ProductItemCard from "../productItemCard";
import styles from "./list.module.scss";

interface IProductListProps {
  customClass?: string;
}
interface productsType {
  products: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }[];
  total: number;
  skip: number;
  limit: number;
}
function ProductList({ customClass = "" }: IProductListProps) {
  const [product, setProduct] = useState<productsType>();
  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <div className={styles.procuctList}>
      {product?.products.map((item) => (
        <ProductItemCard
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
