import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes.ts';
import { useAppSelector } from '../../store/stote.ts';
import { useEffect, useState } from 'react';

export const Header = () => {
  const { cartItems } = useAppSelector((state) => state.cart);

  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const count = cartItems.reduce((acc, product) => {
      acc += product.count;

      return acc;
    }, 0);

    setCount(count);
  }, [cartItems]);

  return (
    <header className={styles.header}>
      <Link className={styles.logo} to={ROUTES.main}>
        QPICK
      </Link>
      <div className={styles.iconsContainer}>
        <Link to={ROUTES.main}>
          <img
            className={styles.icon}
            src="/icons/heart.svg"
            alt="Heart icon"
          />
        </Link>
        <Link to={ROUTES.cart} className={styles.cartLink}>
          <img className={styles.icon} src="/icons/cart.svg" alt="Cart icon" />
          {count > 0 && <p className={styles.count}>{count}</p>}
        </Link>
      </div>
    </header>
  );
};
