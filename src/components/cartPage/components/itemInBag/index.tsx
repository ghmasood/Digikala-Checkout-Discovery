import React from "react";
import styles from "./intemInBag.module.scss";
import { IFilterdItem } from "types";
import Rating from "components/rating";
import { icons } from "components/icons";
import { useAppDispatch } from "store/hook";
import { addToCart, minusFromCart } from "store/cart";
import BasicImg from "components/BasicImg";
interface ItemInBag {
  product: IFilterdItem;
}
function ItemInBag({ product }: ItemInBag) {
  const reduxDispatch = useAppDispatch();
  return (
    <div className={styles.bagItem}>
      <div className={styles.imgArea}>
        <BasicImg
          src={product?.thumbnail}
          style={{
            objectFit: "cover",
            width: "100%",
            aspectRatio: 1,
            borderRadius: "1rem",
          }}
        />
      </div>
      <div className={styles.contentArea}>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.brand}>{product.brand}</div>
        <div className={styles.description}>{product.description}</div>
        <Rating rate={product.rating} />
        <div className={styles.priceCount}>
          <span>
            $ {product.finalPrice.toFixed(0)} X {product.qty}
          </span>
          <div>
            <span
              onClick={() => {
                reduxDispatch(minusFromCart(product.id));
              }}
            >
              {icons.minus()}
            </span>
            <span>{product.qty}</span>
            <span
              onClick={() => {
                reduxDispatch(addToCart(product));
              }}
            >
              {icons.plus()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemInBag;
