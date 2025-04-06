import { FC } from 'react';
import { IItemCardProps } from './types.ts';
import styles from './ItemCard.styles.module.scss';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../store/stote.ts';
import {
  addToFavorite,
  removeFromFavorite,
} from '../../store/reducers/Favorite/Favorite.tsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { ItemCardBottom } from '../ItemCardBottom/ItemCardBottom.tsx';

export const ItemCard: FC<IItemCardProps> = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useAppDispatch();

  const { favoriteItems } = useAppSelector((state) => state.favorite);

  const favoriteItem = favoriteItems.find((product) => product.id === item.id);

  const handleAddToFavorite = () => {
    dispatch(addToFavorite(item));
  };

  const handleRemoveFromFavorite = () => {
    dispatch(removeFromFavorite(item.id));
  };

  const handleOpenDetailPage = () => {
    navigate(`/item/${item.id}`, { state: { backgroundLocation: location } });
  };

  return (
    <div className={styles.card} onClick={handleOpenDetailPage}>
      <img
        className={cn(styles.favoriteIcon, styles.active)}
        src={favoriteItem ? '/icons/heart_fill.svg' : 'icons/heart.svg'}
        alt="Favorite icon"
        onClick={(event) => {
          event.stopPropagation();
          if (favoriteItem) {
            handleRemoveFromFavorite();
          } else {
            handleAddToFavorite();
          }
        }}
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
        <ItemCardBottom item={item} />
      </div>
    </div>
  );
};
