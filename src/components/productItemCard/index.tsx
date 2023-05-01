import React from "react";

import styles from "./card.module.scss";

import { BsCartPlusFill, BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAppDispatch } from "store/hook";
import { productType } from "types";
import { AddtoCart } from "components/icons";
import { addToCart } from "store/cart";

interface IProductItemCardProps {
  cardData: productType;
}
function ProductItemCard({ cardData }: IProductItemCardProps) {
  const reduxDispatch = useAppDispatch();
  const FinalPrice = (
    (cardData.price * (100 - cardData.discountPercentage)) /
    100
  ).toFixed(0);
  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img
          src={cardData.thumbnail}
          height="160px"
          width="200px"
          style={{ borderRadius: "0.5rem" }}
        />
      </div>
      <div className={styles.content}>
        <span className={styles.title}>{cardData.title}</span>
        <span className={styles.brand}>{cardData.brand}</span>
        <div className={styles.action}>
          <div
            style={{
              display: "flex",
              gap: "0.25rem",
              alignItems: "baseline",
            }}
          >
            <span className={styles.price}>${FinalPrice}</span>
            <span className={styles.oldPrice}>${cardData.price}</span>
          </div>
          <button
            className={styles.btn}
            onClick={() => reduxDispatch(addToCart(cardData))}
          >
            <AddtoCart />
            {/* <span>Add To cart</span> */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItemCard;
