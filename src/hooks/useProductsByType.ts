import { IProduct } from '../types.ts';

export const useProductsByType = (
  products: IProduct[],
  type: string
): IProduct[] => {
  return products.filter((product) => product.type === type);
};
