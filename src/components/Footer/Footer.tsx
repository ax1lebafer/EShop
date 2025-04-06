import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes.ts';
import cn from 'classnames';
import { SOCIAL_NETWORK_ITEMS } from './constants.ts';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <footer className={styles.footer}>
      <Link className={styles.logo} to={ROUTES.main}>
        QPICK
      </Link>

      <nav className={styles.nav}>
        <Link to={ROUTES.favorite} className={styles.link}>
          {t('favorite')}
        </Link>
        <Link to={ROUTES.cart} className={styles.link}>
          {t('cart')}
        </Link>
        <Link to={ROUTES.main} className={styles.link}>
          {t('contacts')}
        </Link>
      </nav>

      <nav className={styles.nav} style={{ gap: '36px' }}>
        <Link to={ROUTES.termsOfService} className={styles.link}>
          {t('termsService')}
        </Link>
        <div className={styles.languageWrapper}>
          <img src="/icons/earth.svg" alt="Earth icon" />
          <p
            className={cn(styles.language, {
              [styles.active]: i18n.language === 'ru',
            })}
            onClick={() => changeLanguage('ru')}
          >
            Рус
          </p>
          <p
            className={cn(styles.language, {
              [styles.active]: i18n.language === 'en',
            })}
            onClick={() => changeLanguage('en')}
          >
            Eng
          </p>
        </div>
      </nav>

      <nav className={styles.iconLinks}>
        {SOCIAL_NETWORK_ITEMS.map((item) => (
          <Link key={item.id} to={item.link} target="_blank">
            <img className={styles.icon} src={item.icon} alt={item.alt} />
          </Link>
        ))}
      </nav>
    </footer>
  );
};
