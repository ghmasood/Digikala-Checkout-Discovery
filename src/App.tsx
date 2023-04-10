import React from "react";
import ProductItemCard from "./components/productItemCard";

function App() {
  return (
    <>
      <ProductItemCard
        id={"3"}
        title={"Microsoft Surface Laptop 4"}
        image={"https://i.dummyjson.com/data/products/8/1.jpg"}
        rating={4.43}
        price={1499}
        discount={8}
      />
    </>
  );
}

export default App;
