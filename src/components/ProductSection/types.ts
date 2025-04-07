import { IProduct } from '../../types.ts';

export interface IProductSectionProps {
  title: string;
  data: IProduct[];
  searchQuery: string;
  className?: string;
}
