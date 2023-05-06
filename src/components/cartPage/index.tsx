import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { minusFromCart } from "../../store/cart";
import ItemInBag from "./components/itemInBag";
import styles from "./cartItem.module.scss";

function CartPage() {
  const cardItems = useAppSelector((store) => store.cart);

  const totalPrice = cardItems.cartProducts.reduce(
    (accumulator, currValue) =>
      accumulator + currValue.finalPrice * currValue.qty,
    0
  );
  return (
    <div className={styles.root}>
      <span className={styles.title}>Check your Card Items</span>
      {cardItems.cartProducts.map((item) => (
        <ItemInBag key={item.id} product={item} />
      ))}
    </div>
  );
}

export default CartPage;
