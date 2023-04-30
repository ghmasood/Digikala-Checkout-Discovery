import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { minusFromCart } from "../../store/cart";

function CartPage() {
  const cardItems = useAppSelector((store) => store.cart);
  const reduxDispatch = useAppDispatch();

  const totalPrice = cardItems.cartProducts.reduce(
    (accumulator, currValue) =>
      accumulator + currValue.finalPrice * currValue.qty,
    0
  );
  console.log(cardItems);
  return (
    <>
      {cardItems.cartProducts.map((item) => (
        <div
          style={{ display: "flex ", justifyContent: "center" }}
          key={item.description}
          onClick={() => {
            reduxDispatch(minusFromCart(item.id));
          }}
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
            <span style={{}}>${item?.finalPrice?.toFixed(2)}</span>
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
