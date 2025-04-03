import { FC } from 'react';
import { IItemCardProps } from './types.ts';
import styles from './ItemCard.styles.module.scss';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../store/stote.ts';
import { addToCart } from '../../store/reducers/Cart/Cart.tsx';

export const ItemCard: FC<IItemCardProps> = ({ item }) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    const { old_price, rate, ...rest } = item;

    dispatch(addToCart({ ...rest, count: 1 }));
  };

  return (
    <div className={styles.card}>
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
          <p className={styles.buy} onClick={handleAddToCart}>
            {t('buy')}
          </p>
        </div>
      </div>
    </div>
  );
};
