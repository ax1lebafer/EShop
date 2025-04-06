import { useParams } from 'react-router-dom';
import { getProductById } from '../../data.ts';
import { useTranslation } from 'react-i18next';
import styles from './ProductDetail.module.scss';
import { ItemCardBottom } from '../ItemCardBottom/ItemCardBottom.tsx';

export const ProductDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const product = getProductById(Number(id));

  if (!product) {
    return null;
  }

  return (
    <div className={styles.container}>
      <img src={product.img} alt={product.title} />
      <div className={styles.productWrapper}>
        <div className={styles.header}>
          <p className={styles.title}>{product.title}</p>
          <p>{product.price} ₽</p>
        </div>
        <div className={styles.descriptionWrapper}>
          <p className={styles.descriptionTitle}>{t('description')}:</p>
          <p>{product.description || t('noDescription')}</p>
        </div>
        <ItemCardBottom item={product} />
      </div>
    </div>
  );
};
