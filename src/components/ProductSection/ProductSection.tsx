import styles from './ProductSection.module.scss';
import { ItemCard } from '../ItemCard/ItemCard.tsx';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { IProductSectionProps } from './types.ts';

export const ProductSection: FC<IProductSectionProps> = ({
  title,
  data,
  className,
}) => {
  const { t } = useTranslation();

  return (
    <section className={className}>
      <h3 className={styles.title}>{t(`${title}`)}</h3>

      <div className={styles.section}>
        {data.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
