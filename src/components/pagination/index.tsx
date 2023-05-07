import React from "react";

import styles from "./pagination.module.scss";
import { icons } from "components/icons";
interface IPaginationProps {
  loading?: boolean;
  total: number;
  limit: number;
  skip: number;
  onChange: (p: number) => void;
}
function Pagination({
  limit,
  skip,
  total,
  onChange,
  loading,
}: IPaginationProps) {
  const pageNumbers: number[] = [];
  const totalPage = Math.ceil(total / limit);
  for (let i = 0; i < totalPage; i++) pageNumbers.push(i);
  return (
    <div className={styles.pagination}>
      <ul
        className={`${styles.ulstyle} ${loading ? "skeleton" : ""} `}
        style={{ maxWidth: loading ? "40%" : "" }}
      >
        {skip > 0 && (
          <li
            onClick={() => {
              if (skip > 0) {
                onChange(skip - 1);
              }
            }}
          >
            {icons.chevronBack(`${styles.iconSvg}`, `${styles.iconPath} `)}
          </li>
        )}
        {pageNumbers.map((n) => (
          <li
            key={n}
            onClick={() => onChange(n)}
            className={`${styles.listyle} ${n === skip ? styles.active : ""}`}
          >
            {n + 1}
          </li>
        ))}
        {skip < totalPage - 1 && (
          <li
            onClick={() => {
              if (skip < totalPage - 1) onChange(skip + 1);
            }}
          >
            {icons.chevronBack(
              `${styles.rotate} ${styles.iconSvg}`,
              styles.iconPath
            )}
          </li>
        )}
      </ul>
    </div>
  );
}

export default Pagination;
