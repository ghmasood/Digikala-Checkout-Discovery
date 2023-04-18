export interface productsType {
  products: productType[];
  total: number;
  skip: number;
  limit: number;
}

export interface productType {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface cardType {
  cardProducts: productType[];
  total: number;
}
