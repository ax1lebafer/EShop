import { FC } from 'react';
import { IItemCardProps } from './types.ts';
import styles from './ItemCard.styles.module.scss';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

export const ItemCard: FC<IItemCardProps> = ({ item }) => {
  const { t } = useTranslation();

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
          <p className={styles.buy}>{t('buy')}</p>
        </div>
      </div>
    </div>
  );
};
