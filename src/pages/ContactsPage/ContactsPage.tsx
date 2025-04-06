import { useTranslation } from 'react-i18next';
import styles from './ContactsPage.module.scss';

export const ContactsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <h3 className={styles.title}>{t('contacts')}</h3>

      <section className={styles.section}>
        <p>
          <strong>{t('phone')}:</strong>{' '}
          <a href="tel:+74951234567">+7 (495) 123-45-67</a>
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:support@qpick.ru">support@qpick.ru</a>
        </p>

        <p>
          <strong>{t('address')}:</strong>{' '}
          <a
            href="https://yandex.ru/maps/?text=123456,+Москва,+ул.+Полимерная,+д.+10,+офис+15"
            target="_blank"
            rel="noreferrer"
          >
            {t('realAddress')}
          </a>
        </p>
        <p>
          <strong>{t('openingHours')}:</strong>
          <br />
          {t('monday')} – {t('friday')}: 09:00 – 18:00
          <br />
          {t('saturday')}: 10:00 – 16:00
          <br />
          {t('sunday')}: {t('dayOff')}
        </p>
      </section>
    </>
  );
};
