import styles from './ItemCartBottom.module.scss';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../store/stote.ts';
import { FC } from 'react';
import { IItemCardBottomProps } from './types.ts';
import {
  addToCart,
  decrementProduct,
} from '../../store/reducers/Cart/Cart.tsx';

export const ItemCardBottom: FC<IItemCardBottomProps> = ({ item }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const { cartItems } = useAppSelector((state) => state.cart);
  const cartItem = cartItems.find((product) => product.id === item.id);

  const handleMinusProduct = () => {
    dispatch(decrementProduct(item.id));
  };

  const handleAddToCart = () => {
    const { old_price, rate, ...rest } = item;

    dispatch(addToCart({ ...rest, count: 1 }));
  };

  return (
    <div className={styles.bottom}>
      <div className={styles.rateWrapper}>
        <img src="/icons/star.svg" alt="Star icon" />
        <p className={styles.rate}>{item.rate}</p>
      </div>
      {cartItem ? (
        <div className={styles.countWrapper}>
          <img
            className={styles.icon}
            src="/icons/minus.svg"
            alt="Minus icon"
            onClick={(event) => {
              event.stopPropagation();
              handleMinusProduct();
            }}
          />
          <p className={styles.count}>{cartItem.count}</p>
          <img
            className={styles.icon}
            src="/icons/plus.svg"
            alt="Plus icon"
            onClick={(event) => {
              event.stopPropagation();
              handleAddToCart();
            }}
          />
        </div>
      ) : (
        <p
          className={styles.buy}
          onClick={(event) => {
            event.stopPropagation();
            handleAddToCart();
          }}
        >
          {t('buy')}
        </p>
      )}
    </div>
  );
};
