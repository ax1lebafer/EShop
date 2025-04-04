import { useTranslation } from 'react-i18next';
import styles from './FavoritePage.module.scss';
import { useAppSelector } from '../../store/stote.ts';

export const FavoritePage = () => {
  const { t } = useTranslation();

  const { favoriteItems } = useAppSelector((state) => state.favorite);

  return (
    <>
      <h3 className={styles.title}>{t('favorite')}</h3>

      <section className={styles.favorite}>
        {favoriteItems.length > 0 ? (
          <p>123</p>
        ) : (
          <p>{t('noFavoriteProducts')}</p>
        )}
      </section>
    </>
  );
};
