import React from "react";
import styles from "./rating.module.scss";
import { icons } from "components/icons";
interface Irating {
  rate: number;
}
function Rating({ rate }: Irating) {
  const finalRate = Math.round((rate ?? 0) * 2) / 2;
  const fullStar = Math.floor(finalRate);
  const halfStar = fullStar === finalRate ? 0 : 1;
  const emptyStar = 5 - fullStar - halfStar;

  return (
    <div className={styles.special}>
      <div className={styles.stars}>
        {[...new Array(fullStar)].map((item, index) =>
          icons.starFull("", `${styles.starStroke} ${styles.starFill}`)
        )}
        {[...new Array(halfStar)].map((item, index) =>
          icons.starHalf(
            `${styles.starStroke}`,
            `${styles.starFill} ${styles.starStroke}`
          )
        )}
        {[...new Array(emptyStar)].map((item, index) =>
          icons.starEmpty("", `${styles.starStroke} `)
        )}
      </div>
      <span>{rate.toFixed(1)}/5</span>
    </div>
  );
}

export default Rating;
