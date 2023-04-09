import React from "react";

interface IProductItemCardProps {
  customClass?: string;
  title?: string;
  image?: string;
  rating?: { rate: number; count: number };
  count?: number;
}
function ProductItemCard({ customClass = "" }: IProductItemCardProps) {
  return <div className={customClass}>ProductItemCard</div>;
}

export default ProductItemCard;
