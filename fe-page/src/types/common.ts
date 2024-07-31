export const phoneRegExp = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/;
export const API_URL = "http://localhost:3001";

export interface ICategory {
  color: string;
  icon: string;
  name: string;
}

export interface ICart {
  id: string;
  quantity: number;
  product: IProduct;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  images: string[];
  priceOrigin: number;
  salePercent: number;
  discount: number;
  category: ICategory;
  countInStock: number;
  rating: number;
  numReview: number;
  dateCreated: string;
  dateUpdated: string;
  newProduct: boolean;
  isFeatured: boolean;
  isSale: boolean;
}
