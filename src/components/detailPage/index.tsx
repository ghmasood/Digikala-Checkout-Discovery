import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetSingleProductQuery } from "../../store";
import { productType } from "../../types";
import styles from "./detailPage.module.scss";
import { useAppDispatch } from "../../store/hook";
import { addToCart } from "../../store/cart";

interface IDetailPageProps {
  customClass?: string;
}
function DetailPage({ customClass = "" }: IDetailPageProps) {
  const loc = useLocation();
  const query = new URLSearchParams(loc.search);
  const pid = query.get("pid");
  const { isFetching, isLoading, error, data } = useGetSingleProductQuery(
    Number(pid)
  );
  const reduxDispatch = useAppDispatch();

  return (
    <div className={`${styles.root} ${customClass}`}>
      <img src={data?.images[0]} alt={data?.title} />
      <div>
        <p>{data?.title}</p>
        <p>{data?.description}</p>
        <p>Brand: {data?.brand}</p>
        <p>Rating{data?.rating}</p>
        <p>Stock: {data?.stock}</p>
        <p>${data?.price}</p>
        <button
          onClick={() => {
            data && reduxDispatch(addToCart(data));
          }}
        >
          add to cart!
        </button>
      </div>
    </div>
  );
}

export default DetailPage;
