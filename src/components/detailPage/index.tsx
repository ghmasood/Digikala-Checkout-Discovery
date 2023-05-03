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

  const finalRate =
    (Math.round(data?.rating ?? 0) + Math.round(data?.rating ?? 0) - 1) / 2;

  const reduxDispatch = useAppDispatch();

  console.log(data?.rating, finalRate);
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
            <span></span>
            <span>{data?.rating}/5</span>
          </div>
          <span></span>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default DetailPage;
