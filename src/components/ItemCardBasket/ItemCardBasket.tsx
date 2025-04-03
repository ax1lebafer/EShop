import styles from './ItemCartBasket.module.scss';
import { FC, useEffect, useState } from 'react';
import { IItemCartBasketProps } from './types.ts';
import { useAppDispatch } from '../../store/stote.ts';
import {
  addToCart,
  decrementProduct,
  removeFromCart,
} from '../../store/reducers/Cart/Cart.tsx';

export const ItemCardBasket: FC<IItemCartBasketProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const totalPrice = item.price * item.count;

    setTotalPrice(totalPrice);
  }, [item.count, item.price]);

  const handleRemoveProduct = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleAddProduct = () => {
    dispatch(addToCart(item));
  };

  const handleMinusProduct = () => {
    dispatch(decrementProduct(item.id));
  };

  return (
    <div className={styles.cartItem}>
      <button className={styles.deleteBtn} onClick={handleRemoveProduct}>
        <img src="/icons/delete.svg" alt="Delete icon" />
      </button>

      <div className={styles.product}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={item.img} alt="Product image" />
        </div>
        <div className={styles.productInfo}>
          <p className={styles.title}>{item.title}</p>
          <p className={styles.price}>{item.price} ₽</p>
        </div>
      </div>

      <div className={styles.cartItemBottom}>
        <div className={styles.countWrapper}>
          <img
            className={styles.icon}
            src="/icons/minus.svg"
            alt="Minus icon"
            onClick={handleMinusProduct}
          />
          <p className={styles.count}>{item.count}</p>
          <img
            className={styles.icon}
            src="/icons/plus.svg"
            alt="Plus icon"
            onClick={handleAddProduct}
          />
        </div>
        <p className={styles.totalPrice}>{totalPrice} ₽</p>
      </div>
    </div>
  );
};
