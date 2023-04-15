import React from "react";
import { Route, Routes } from "react-router-dom";
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
      </Routes>
    </>
  );
}

export default App;
