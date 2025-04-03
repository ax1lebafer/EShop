import styles from './ItemCartBasket.module.scss';
import { FC } from 'react';
import { IItemCartBasketProps } from './types.ts';
import { useAppDispatch } from '../../store/stote.ts';
import { removeFromCart } from '../../store/reducers/Cart/Cart.tsx';

export const ItemCardBasket: FC<IItemCartBasketProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleRemoveProduct = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className={styles.cartItem}>
      <button className={styles.deleteBtn} onClick={handleRemoveProduct}>
        <img src="/icons/delete.svg" alt="Delete icon" />
      </button>
      <p>{item.title}</p>
      <p>{item.price} ₽</p>
      <img src={item.img} alt="Product image" />
    </div>
  );
};
