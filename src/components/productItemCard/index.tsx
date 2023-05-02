import React from "react";

import styles from "./card.module.scss";

import { Link } from "react-router-dom";
import { useAppDispatch } from "store/hook";
import { productType } from "types";
import { icons } from "components/icons";
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
      <Link to={`/product/?pid=${cardData.id}`} className={styles.productImage}>
        <img
          alt={cardData.title}
          src={cardData.thumbnail}
          height="160px"
          width="200px"
          style={{ borderRadius: "0.5rem", objectFit: "contain" }}
        />
      </Link>
      <div className={styles.content}>
        <Link to={`/product/?pid=${cardData.id}`} className={styles.title}>
          {cardData.title}
        </Link>
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
            {icons.AddtoCart()}
            {/* <span>Add To cart</span> */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItemCard;
