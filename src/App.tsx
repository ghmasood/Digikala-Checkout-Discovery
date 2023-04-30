import React from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "./components/cartPage";
import DetailPage from "./components/detailPage";
import NavBar from "./components/navBar";
import ProductList from "./components/productList";

function App() {
  return (
    <>
      <NavBar />
      <div style={{ padding: "3rem 2rem" }}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product" element={<DetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
