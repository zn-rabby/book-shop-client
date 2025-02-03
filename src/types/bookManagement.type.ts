export type TProduct = {
  _id: string;
  title: string;
  category: string;
  author: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  quantity: number;
  isDeleted: boolean;
};

export type ApiResponse<T = unknown> = {
  data: T;
  status: number;
  message?: string;
};
