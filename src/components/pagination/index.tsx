import React from "react";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import styles from "./pagination.module.scss";
interface IPaginationProps {
  total: number;
  limit: number;
  skip: number;
  onChange: (p: number) => void;
}
function Pagination({ limit, skip, total, onChange }: IPaginationProps) {
  const pageNumbers: number[] = [];
  const totalPage = Math.ceil(total / limit);
  for (let i = 0; i < totalPage; i++) pageNumbers.push(i);
  return (
    <div className={styles.pagination}>
      <ul className={styles.ulstyle}>
        <BiChevronLeftCircle
          size={"1.85rem"}
          color="#ef394e"
          cursor={"pointer"}
          onClick={() => {
            if (skip > 1) {
              onChange(skip - 1);
            }
          }}
        />

        {pageNumbers.map((n) => (
          <li
            key={n}
            onClick={() => onChange(n)}
            className={`${styles.listyle} ${n === skip ? styles.active : ""}`}
          >
            {n + 1}
          </li>
        ))}

        <BiChevronRightCircle
          size={"1.85rem"}
          color="#ef394e"
          cursor={"pointer"}
          onClick={() => {
            if (skip < totalPage - 1) onChange(skip + 1);
          }}
        />
      </ul>
    </div>
  );
}

export default Pagination;
