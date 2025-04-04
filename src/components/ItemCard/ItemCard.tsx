import { FC } from 'react';
import { IItemCardProps } from './types.ts';
import styles from './ItemCard.styles.module.scss';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../store/stote.ts';
import {
  addToCart,
  decrementProduct,
} from '../../store/reducers/Cart/Cart.tsx';
import {
  addToFavorite,
  removeFromFavorite,
} from '../../store/reducers/Favorite/Favorite.tsx';

export const ItemCard: FC<IItemCardProps> = ({ item }) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const { cartItems } = useAppSelector((state) => state.cart);
  const { favoriteItems } = useAppSelector((state) => state.favorite);

  const cartItem = cartItems.find((product) => product.id === item.id);
  const favoriteItem = favoriteItems.find((product) => product.id === item.id);

  const handleAddToCart = () => {
    const { old_price, rate, ...rest } = item;

    dispatch(addToCart({ ...rest, count: 1 }));
  };

  const handleMinusProduct = () => {
    dispatch(decrementProduct(item.id));
  };

  const handleAddToFavorite = () => {
    dispatch(addToFavorite(item));
  };

  const handleRemoveFromFavorite = () => {
    dispatch(removeFromFavorite(item.id));
  };

  return (
    <div className={styles.card}>
      <img
        className={cn(styles.favoriteIcon, styles.active)}
        src={favoriteItem ? '/icons/heart_fill.svg' : 'icons/heart.svg'}
        alt="Favorite icon"
        onClick={favoriteItem ? handleRemoveFromFavorite : handleAddToFavorite}
      />
      <div className={styles.imgWrapper}>
        <img src={item.img} alt={item.title} />
      </div>
      <div className={styles.info}>
        <div className={styles.top}>
          <p className={styles.title}>{item.title}</p>
          <div className={styles.priceWrapper}>
            <p className={styles.price}>{item.price} ₽</p>
            {item.old_price && (
              <p className={cn(styles.price, styles.oldPrice)}>
                {item.old_price} ₽
              </p>
            )}
          </div>
        </div>
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
                onClick={handleMinusProduct}
              />
              <p className={styles.count}>{cartItem.count}</p>
              <img
                className={styles.icon}
                src="/icons/plus.svg"
                alt="Plus icon"
                onClick={handleAddToCart}
              />
            </div>
          ) : (
            <p className={styles.buy} onClick={handleAddToCart}>
              {t('buy')}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
