export interface IProduct {
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
  description: string;
  type: string;
  old_price?: number;
}

export interface ICartProduct {
  id: number;
  img: string;
  title: string;
  price: number;
  count: number;
  type: string;
  description?: string;
}
