import React from "react";
import { Route, Routes } from "react-router-dom";
import CardPage from "./components/cardPage";
import DetailPage from "./components/detailPage";
import NavBar from "./components/navBar";
import ProductList from "./components/productList";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product" element={<DetailPage />} />
        <Route path="/card" element={<CardPage />} />
      </Routes>
    </>
  );
}

export default App;
