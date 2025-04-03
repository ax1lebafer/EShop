import { useTranslation } from 'react-i18next';
import styles from './CartPage.module.scss';
import { ItemCardBasket } from '../../components/ItemCardBasket/ItemCardBasket.tsx';

import airpods from '../../assets/airpods_1.png';

const ITEMS = [
  { id: 1, title: 'Apple AirPods', img: airpods, price: 2929, count: 1 },
];

export const CartPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <h3 className={styles.title}>{t('cart')}</h3>

      <div className={styles.cart}>
        <div className={styles.cartItems}>
          {ITEMS.map((_, index) => (
            <ItemCardBasket key={index} />
          ))}
        </div>

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
