import React from "react";

import styles from "./card.module.scss";

import { BsCartPlusFill, BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { addToCart } from "../../store/cart";
import { productType } from "../../types";

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
    <>
      <div className={styles.cardItem}>
        <Link to={`/product/?pid=${cardData.id}`}>
          <img
            src={cardData.thumbnail}
            alt={cardData.title}
            style={{ width: "100%", aspectRatio: "1.6", objectFit: "cover" }}
          />
          <div className={styles.detail}>
            <span className={styles.title}>{cardData.title}</span>
            <div className={styles.rating}>
              <BsStarFill color="rgb(249, 188, 0)" />{" "}
              {cardData.rating.toFixed(1)}
            </div>
            <div className={styles.priceSection}>
              <div className={styles.price}>
                <span
                  className={cardData.discountPercentage > 0 ? styles.sale : ""}
                >
                  ${cardData.price}
                </span>
                {cardData.discountPercentage > 0 && <span>${FinalPrice}</span>}
              </div>
              {cardData.discountPercentage > 0 && (
                <span className={styles.discount}>
                  {cardData.discountPercentage.toFixed(0)}%
                </span>
              )}
            </div>
          </div>
        </Link>
        <button
          className={styles.addBtn}
          onClick={() => {
            reduxDispatch(addToCart(cardData));
          }}
        >
          <BsCartPlusFill />{" "}
          <span style={{ fontWeight: "500" }}>Add to cart!</span>
        </button>
      </div>
    </>
  );
}

export default ProductItemCard;
