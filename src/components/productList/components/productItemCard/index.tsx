import React from "react";

import styles from "./card.module.scss";

import { Link } from "react-router-dom";
import { useAppDispatch } from "store/hook";
import { productType } from "types";
import { icons } from "components/icons";
import { addToCart } from "store/cart";
import BasicImg from "components/BasicImg";

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
      <Link to={`/product/${cardData.id}`} className={styles.productImage}>
        <BasicImg
          // alt={cardData.title}
          src={cardData.thumbnail}
          width="100%"
          style={{
            borderRadius: "0.5rem",
            objectFit: "cover",
            aspectRatio: "6/7",
          }}
        />
      </Link>
      <div className={styles.content}>
        <Link to={`/product/${cardData.id}`} className={styles.title}>
          {cardData.title}
        </Link>
        <p className={styles.brand}>{cardData.brand}</p>
        <div className={styles.action}>
          <div
            style={{
              display: "flex",
              gap: "0.25rem",
              alignItems: "center",
            }}
          >
            <span className={styles.price}>${FinalPrice}</span>
            <span className={styles.oldPrice}>${cardData.price}</span>
          </div>
          <button
            className={styles.btn}
            onClick={() => reduxDispatch(addToCart(cardData))}
          >
            {icons.AddtoCart()}
            {/* <span>Add To cart</span> */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItemCard;
