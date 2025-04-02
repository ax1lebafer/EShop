import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes.ts';
import cn from 'classnames';
import { SOCIAL_NETWORK_ITEMS } from './constants.ts';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link className={styles.logo} to={ROUTES.main}>
        QPICK
      </Link>

      <nav className={styles.nav}>
        <Link to={ROUTES.main} className={styles.link}>
          Избранное
        </Link>
        <Link to={ROUTES.main} className={styles.link}>
          Корзина
        </Link>
        <Link to={ROUTES.main} className={styles.link}>
          Контакты
        </Link>
      </nav>

      <nav className={styles.nav} style={{ gap: '36px' }}>
        <Link to={ROUTES.main} className={styles.link}>
          Условия сервиса
        </Link>
        <div className={styles.languageWrapper}>
          <img src="/icons/earth.svg" alt="Earth icon" />
          <p className={cn(styles.language, styles.active)}>Рус</p>
          <p className={styles.language}>Eng</p>
        </div>
      </nav>

      <nav className={styles.iconLinks}>
        {SOCIAL_NETWORK_ITEMS.map((item) => (
          <Link to={item.link} target="_blank">
            <img className={styles.icon} src={item.icon} alt={item.alt} />
          </Link>
        ))}
      </nav>
    </footer>
  );
};
