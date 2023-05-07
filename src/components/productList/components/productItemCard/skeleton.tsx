import React from "react";

import styles from "./card.module.scss";

import { Link } from "react-router-dom";

import BasicImg from "components/BasicImg";

function ProductItemCardLoading() {
  return (
    <div className={styles.productCard}>
      <Link to={""} className={styles.productImage}>
        <BasicImg
          src={""}
          width="100%"
          style={{
            borderRadius: "0.5rem",
            objectFit: "cover",
            aspectRatio: "6/7",
          }}
        />
      </Link>
      <div className={styles.content}>
        <Link to={``} className={`${styles.title} skeleton`}>
          title
        </Link>
        <p className={`${styles.brand} skeleton`}>brand</p>
        <div className={`${styles.action}`}>
          <div
            className="skeleton"
            style={{
              display: "flex",
              gap: "0.25rem",
              alignItems: "center",
            }}
          >
            <span className={styles.price}>price</span>
            <span className={styles.oldPrice}>price</span>
          </div>
          <span
            className={`${styles.btn} skeleton`}
            style={{ width: "35px", height: "35px" }}
          >
            f
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductItemCardLoading;
