export const API_URL = "http://localhost:3001";

export interface ICategory {
  updateAt: string;
  _id: string;
  name: string;
  color: string;
  icon: string;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  images: string[];
  discount: number;
  salePercent: number;
  category: ICategory;
  countInStock: number;
  rating: number;
  numReview: number;
  isFeatured: boolean;
  isSale: boolean;
  dateCreated: string;
  dateUpdated: null;
  priceOrigin: number;
  wishlist: string[];
  isNewProduct: boolean;
}
