export const phoneRegExp = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/;
export const API_URL = "http://localhost:3001";

export interface ICategory {
  color: string;
  icon: string;
  name: string;
  _id: string;
}

export interface IUser {
  apartment: string;
  city: string;
  country: string;
  email: string;
  isAdmin: boolean;
  name: string;
  phone: string;
  street: string;
  zip: string;
  __v: number;
  _id: string;
}

export interface ICart {
  id: string;
  quantity: number;
  product: IProduct;
}

export interface ICartMain {
  id: string;
  items: ICart[];
  user: IUser;
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
  wishlist: string[];
  category: ICategory;
  countInStock: number;
  rating: number;
  numReview: number;
  dateCreated: string;
  dateUpdated: string;
  isNewProduct: boolean;
  isFeatured: boolean;
  isSale: boolean;
}

export interface IOrder {
  name: string;
  deleteAt: null | string;
  cartItems: ICartMain;
  shippingAddress: string;
  phone: string;
  address: string;
  status: string;
  totalPrice: number;
  user: IUser;
  id: string;
}
