import { useTranslation } from 'react-i18next';
import { HEADPHONES } from '../../data.ts';
import { ItemCard } from '../../components/ItemCard/ItemCard.tsx';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <h3 className={styles.title}>{t('headphones')}</h3>

      <section className={styles.section}>
        {HEADPHONES.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </section>
    </>
  );
};
