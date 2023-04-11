import React from "react";

import styles from "./card.module.scss";

import { BsStarFill } from "react-icons/bs";

interface IProductItemCardProps {
  id: string;
  title: string;
  image: string;
  rating: number;
  price: number;
  discount: number;
}
function ProductItemCard({
  title,
  image,
  rating,
  price,
  discount,
}: IProductItemCardProps) {
  return (
    <div className={styles.cardItem}>
      <img
        src={image}
        alt={title}
        style={{ width: "100%", aspectRatio: "2", objectFit: "cover" }}
      />
      <div className={styles.detail}>
        <span className={styles.title}>{title}</span>
        <div className={styles.rating}>
          <BsStarFill color="rgb(249, 188, 0)" /> {rating.toFixed(1)}
        </div>
        <div className={styles.priceSection}>
          <div className={styles.price}>
            <span className={discount > 0 ? styles.sale : ""}>${price}</span>
            {discount > 0 && (
              <span>${((price * (100 - discount)) / 100).toFixed(0)}</span>
            )}
          </div>
          {discount > 0 && (
            <span className={styles.discount}>{discount.toFixed(0)}%</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductItemCard;
