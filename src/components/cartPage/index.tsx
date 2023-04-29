import React from "react";
import { useGetSingleProductQuery } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { productType } from "../../types";

interface IFilterdItem extends productType {
  qty: number;
  finalPrice: number;
}
function CartPage() {
  const cardItems = useAppSelector((store) => store.cart);

  const filteredItems: IFilterdItem[] = [];

  for (const item of cardItems.cartProducts) {
    const isDuplicate = filteredItems.find((obj) => obj.id === item.id);
    if (!isDuplicate) {
      filteredItems.push({
        ...item,
        qty: 1,
        finalPrice: (item.price * (100 - item.discountPercentage)) / 100,
      });
    } else {
      const foundItem = filteredItems.find((i) => i.id === isDuplicate.id);
      foundItem && foundItem.qty++;
    }
  }

  const totalPrice = filteredItems.reduce(
    (accumulator, currValue) =>
      accumulator + currValue.finalPrice * currValue.qty,
    0
  );
  return (
    <>
      {filteredItems.map((item) => (
        <div
          style={{ display: "flex ", justifyContent: "center" }}
          key={item.description}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              width: "25%",
            }}
          >
            <span style={{}}>{item.title}</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              width: "25%",
            }}
          >
            <span style={{}}>${item.finalPrice.toFixed(2)}</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              width: "25%",
            }}
          >
            <span style={{}}>{item.qty}</span>
          </div>
        </div>
      ))}
      <span>total price: ${totalPrice.toFixed(2)}</span>
    </>
  );
}

export default CartPage;
