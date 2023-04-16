import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { productType } from "../../types";
import styles from "./detailPage.module.scss";

interface IDetailPageProps {
  customClass?: string;
}
function DetailPage({ customClass = "" }: IDetailPageProps) {
  const [productDetail, setProductDetail] = useState<productType>();
  const loc = useLocation();
  const query = new URLSearchParams(loc.search);
  const pid = query.get("pid");
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${pid}`)
      .then((res) => res.json())
      .then((json) => setProductDetail(json));
  }, [pid]);
  return (
    <div className={`${styles.root} ${customClass}`}>
      <img src={productDetail?.images[0]} alt={productDetail?.title} />
      <div>
        <p>{productDetail?.title}</p>
        <p>{productDetail?.description}</p>
        <p>Brand: {productDetail?.brand}</p>
        <p>Rating{productDetail?.rating}</p>
        <p>Stock: {productDetail?.stock}</p>
        <p>${productDetail?.price}</p>
        <button>add to card!</button>
      </div>
    </div>
  );
}

export default DetailPage;
