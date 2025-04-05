import { useTranslation } from 'react-i18next';
import styles from './NotFoundPage.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes.ts';

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h2>{t('notFoundPage')}</h2>
      <button className={styles.button}>
        <Link style={{ color: 'white' }} to={ROUTES.main}>
          {t('backToHome')}
        </Link>
      </button>
    </div>
  );
};
