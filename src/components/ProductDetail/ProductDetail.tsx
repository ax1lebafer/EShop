import { useParams } from 'react-router-dom';
import { getProductById } from '../../data.ts';
import { useTranslation } from 'react-i18next';
import styles from './ProductDetail.module.scss';

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
        <div>
          <div className={styles.rateWrapper}>
            <img src="/icons/star.svg" alt="Star icon" />
            <p className={styles.rate}>{product.rate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
