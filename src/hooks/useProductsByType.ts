import { IProduct } from '../types.ts';

export const useProductsByType = (
  products: IProduct[],
  type: string,
  searchQuery: string = ''
): IProduct[] => {
  return products
    .filter((product) => product.type === type)
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
};
