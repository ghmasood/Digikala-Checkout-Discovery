import React from "react";
import { useGetSingleProductQuery } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hook";

function CardPage() {
  const cardItems = useAppSelector((store) => store.card);

  return (
    <div>
      {cardItems.cardProducts.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
}

export default CardPage;
