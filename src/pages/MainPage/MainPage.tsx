import { useTranslation } from 'react-i18next';
import { HEADPHONES } from '../../data.ts';
import { ItemCard } from '../../components/ItemCard/ItemCard.tsx';

export const MainPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <h3>{t('headphones')}</h3>

      <section>
        {HEADPHONES.map((item) => (
          <ItemCard item={item} />
        ))}
      </section>
    </>
  );
};
