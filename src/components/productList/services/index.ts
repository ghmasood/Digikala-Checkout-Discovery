import { productsType } from "../../../types";

export function productFetcher(
  setProducts: React.Dispatch<React.SetStateAction<productsType | undefined>>
) {
  fetch("https://dummyjson.com/products/")
    .then((res) => res.json())
    .then((json) => setProducts(json));
}
