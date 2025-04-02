import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes.ts';

export const Header = () => {
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
        <Link to={ROUTES.cart}>
          <img className={styles.icon} src="/icons/cart.svg" alt="Cart icon" />
        </Link>
      </div>
    </header>
  );
};
