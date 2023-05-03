import React from "react";
import NavBar from "./navBar";
import { Route, Routes } from "react-router-dom";
import ProductList from "./productList";
import DetailPage from "./detailPage";
import CartPage from "./cartPage";
import styles from "./styles.module.scss";

function ShopApp() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<DetailPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default ShopApp;
