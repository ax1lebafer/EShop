import { FC } from 'react';
import { IItemCardProps } from './types.ts';
import styles from './ItemCard.styles.module.scss';

export const ItemCard: FC<IItemCardProps> = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img src={item.img} alt={item.title} />
      </div>
      <div>
        <p>{item.title}</p>
        <p>{item.price}</p>
      </div>
    </div>
  );
};
