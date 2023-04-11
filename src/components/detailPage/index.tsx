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
      <div>{productDetail?.title}</div>
    </div>
  );
}

export default DetailPage;
