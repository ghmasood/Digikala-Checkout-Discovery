import React from "react";
import { useGetSingleProductQuery } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hook";

function CartPage() {
  const cardItems = useAppSelector((store) => store.cart);

  return (
    <>
      {cardItems.cartProducts.map((item) => (
        <div style={{ display: "flex ", justifyContent: "center" }}>
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
            <span style={{}}>${item.price}</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default CartPage;
