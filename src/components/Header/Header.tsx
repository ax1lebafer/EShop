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
        <img className={styles.icon} src="/icons/heart.svg" alt="Heart icon" />
        <img className={styles.icon} src="/icons/cart.svg" alt="Cart icon" />
      </div>
    </header>
  );
};
