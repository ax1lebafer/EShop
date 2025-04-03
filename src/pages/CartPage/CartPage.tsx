import { useTranslation } from 'react-i18next';
import styles from './CartPage.module.scss';
import { ItemCardBasket } from '../../components/ItemCardBasket/ItemCardBasket.tsx';
import { useAppSelector } from '../../store/stote.ts';
import { useEffect, useState } from 'react';

export const CartPage = () => {
  const { t } = useTranslation();

  const { cartItems } = useAppSelector((state) => state.cart);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const totalPrice = cartItems.reduce((acc, product) => {
      acc += product.price * product.count;

      return acc;
    }, 0);

    setTotalPrice(totalPrice);
  }, [cartItems]);

  return (
    <>
      <h3 className={styles.title}>{t('cart')}</h3>

      <div className={styles.cart}>
        <div className={styles.cartItems}>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <ItemCardBasket key={index} item={item} />
            ))
          ) : (
            <p>{t('noProductsInTheCart')}</p>
          )}
        </div>

        <div className={styles.cartSummary}>
          <div className={styles.summaryTop}>
            <p>{t('total')}</p>
            <p>₽ {totalPrice}</p>
          </div>
          <button className={styles.proceedBtn}>
            {t('proceedToCheckout')}
          </button>
        </div>
      </div>
    </>
  );
};
