import styles from './ProductSection.module.scss';
import { ItemCard } from '../ItemCard/ItemCard.tsx';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { IProductSectionProps } from './types.ts';
import { useProductsByType } from '../../hooks/useProductsByType.ts';

export const ProductSection: FC<IProductSectionProps> = ({
  title,
  data,
  className,
  searchQuery,
}) => {
  const { t } = useTranslation();

  const filteredData = useProductsByType(data, title, searchQuery);

  return (
    <section className={className}>
      <h3 className={styles.title}>{t(`${title}`)}</h3>

      <div className={styles.section}>
        {!filteredData.length && <p>{t('nothingFound')}</p>}

        {filteredData.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
