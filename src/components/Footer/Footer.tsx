import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes.ts';
import cn from 'classnames';

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
        <Link to="https://vk.com/" target="_blank">
          <img className={styles.icon} src="/icons/vk.svg" alt="VK icon" />
        </Link>
        <Link to="https://web.telegram.org/" target="_blank">
          <img
            className={styles.icon}
            src="/icons/tg.svg"
            alt="Telegram icon"
          />
        </Link>
        <Link to="https://www.whatsapp.com/" target="_blank">
          <img
            className={styles.icon}
            src="/icons/whatsapp.svg"
            alt="Whatsapp icon"
          />
        </Link>
      </nav>
    </footer>
  );
};
