import React from "react";

import styles from "./card.module.scss";

import { BsCartPlusFill, BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { addToCard } from "../../store/cart";

interface IProductItemCardProps {
  id: string;
  title: string;
  image: string;
  rating: number;
  price: number;
  discount: number;
}
function ProductItemCard({
  id,
  title,
  image,
  rating,
  price,
  discount,
}: IProductItemCardProps) {
  const reduxDispatch = useAppDispatch();
  const FinalPrice = ((price * (100 - discount)) / 100).toFixed(0);
  return (
    <>
      <div className={styles.cardItem}>
        <Link to={`/product/?pid=${id}`}>
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
                <span className={discount > 0 ? styles.sale : ""}>
                  ${price}
                </span>
                {discount > 0 && <span>${FinalPrice}</span>}
              </div>
              {discount > 0 && (
                <span className={styles.discount}>{discount.toFixed(0)}%</span>
              )}
            </div>
          </div>
        </Link>
        <button
          className={styles.addBtn}
          onClick={() => {
            reduxDispatch(addToCard(+id));
          }}
        >
          <BsCartPlusFill />{" "}
          <span style={{ fontWeight: "500" }}>Add to card!</span>
        </button>
      </div>
    </>
  );
}

export default ProductItemCard;
