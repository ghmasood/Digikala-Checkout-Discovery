export interface productsType {
  products: productType[];
  total: number;
  skip: number;
  limit: number;
}

export interface productReqType {
  limit: number;
  skip: number;
}

export interface productSearchReqType extends productReqType {
  search: string;
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

export interface cartType {
  cartProducts: IFilterdItem[];
  total: number;
}

export interface IFilterdItem extends productType {
  qty: number;
  finalPrice: number;
}
