import React, { useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useRoutes,
} from "react-router-dom";
import { useGetSingleProductQuery } from "../../store";
import styles from "./detailPage.module.scss";
import { useAppDispatch } from "../../store/hook";
import { addToCart } from "../../store/cart";
import { icons } from "components/icons";

interface IDetailPageProps {
  customClass?: string;
}
function DetailPage({ customClass = "" }: IDetailPageProps) {
  const { id } = useParams();

  const { isFetching, isLoading, error, data } = useGetSingleProductQuery(
    Number(id)
  );

  const navigate = useNavigate();

  const [picNO, setPicNO] = useState(0);

  const finalRate = Math.round((data?.rating ?? 0) * 2) / 2;
  const fullStar = Math.floor(finalRate);
  const halfStar = fullStar === finalRate ? 0 : 1;
  const emptyStar = 5 - fullStar - halfStar;

  const reduxDispatch = useAppDispatch();

  return (
    <div className={`${styles.contentFrame} ${customClass}`}>
      <nav onClick={() => navigate(-1)} className={styles.nav}>
        {icons.chevronBack()} Back
      </nav>
      <div className={styles.topArea}>
        <div className={styles.imageArea}>
          <div className={styles.gallery}>
            {data?.images.map((pic, index) => (
              <img
                src={pic}
                className={styles.galleryContiner}
                onClick={() => setPicNO(index)}
              />
            ))}
          </div>
          <img src={data?.images[picNO]} className={styles.mainImage} />
        </div>
        <div className={styles.textArea}>
          <div className={styles.header}>
            <span className={styles.title}>{data?.title}</span>
            <span className={styles.category}>{data?.category}</span>
          </div>
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
            <span>{finalRate}/5</span>
          </div>
          <div className={styles.price}>
            <span>${data?.price}</span>
            <span>
              $
              {(
                ((data?.price ?? 0) * (100 - (data?.discountPercentage ?? 0))) /
                100
              ).toFixed(2)}
            </span>
          </div>
          <span className={styles.desc}>{data?.description}</span>
          <div className={styles.cta}>
            <button className={styles.btn}>
              {icons.AddtoCart()} Add to Bag
            </button>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default DetailPage;
