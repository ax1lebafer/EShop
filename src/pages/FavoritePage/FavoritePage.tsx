import { useTranslation } from 'react-i18next';
import styles from './FavoritePage.module.scss';
import { useAppSelector } from '../../store/stote.ts';
import { ItemCard } from '../../components/ItemCard/ItemCard.tsx';

export const FavoritePage = () => {
  const { t } = useTranslation();

  const { favoriteItems } = useAppSelector((state) => state.favorite);

  return (
    <>
      <h3 className={styles.title}>{t('favorite')}</h3>

      <section className={styles.favorite}>
        {favoriteItems.length > 0 ? (
          favoriteItems.map((item) => <ItemCard item={item} />)
        ) : (
          <p>{t('noFavoriteProducts')}</p>
        )}
      </section>
    </>
  );
};
