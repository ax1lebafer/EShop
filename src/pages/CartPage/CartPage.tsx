import { useTranslation } from 'react-i18next';
import styles from './CartPage.module.scss';

export const CartPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <h3 className={styles.title}>{t('cart')}</h3>

      <div className={styles.cart}>
        <div className={styles.cartItems}>123</div>

        <div className={styles.cartSummary}>
          <div className={styles.summaryTop}>
            <p>{t('total')}</p>
            <p>₽ 0</p>
          </div>
          <button className={styles.proceedBtn}>
            {t('proceedToCheckout')}
          </button>
        </div>
      </div>
    </>
  );
};
