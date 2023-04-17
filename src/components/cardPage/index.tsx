import React from "react";
import { useGetSingleProductQuery } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hook";

function CardPage() {
  const cardItems = useAppSelector((store) => store.card);
  let cardData = [];
  for (let i = 0; i < cardItems.total; i++) {
    const { data } = useGetSingleProductQuery(cardItems.pids[i]);
    cardData.push(data);
  }
  console.log(cardData);
  return (
    <div>
      {cardItems.pids.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
}

export default CardPage;
