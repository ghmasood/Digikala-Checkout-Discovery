import React from "react";
import { BsStarFill } from "react-icons/bs";
import "./Card.scss";

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
  return (
    <div className={"card-item"}>
      <img src={image} width="auto" alt={title} />
      <div className="detail">
        <span className="title">{title}</span>
        <div className="rating">
          <BsStarFill color="rgb(249, 188, 0)" /> {rating.toFixed(1)}
        </div>
        <div className="price-section">
          <div className="price">
            <span className={discount > 0 ? "sale" : ""}>${price}</span>
            {discount > 0 && (
              <span>${((price * (100 - discount)) / 100).toFixed(0)}</span>
            )}
          </div>
          {discount > 0 && <span className="discount">{discount}%</span>}
        </div>
      </div>
    </div>
  );
}

export default ProductItemCard;
