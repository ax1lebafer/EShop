import { useParams } from 'react-router-dom';
import { getProductById } from '../../data.ts';

export const ProductDetail = () => {
  const { id } = useParams();

  const product = getProductById(Number(id));

  if (!product) {
    return null;
  }

  return (
    <div>
      <p>123</p>
    </div>
  );
};
