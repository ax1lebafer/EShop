import styles from './TermsOfServicePage.module.scss';
import { useTranslation } from 'react-i18next';

export const TermsOfServicePage = () => {
  const { t } = useTranslation();

  const terms = t('termsOfService', { returnObjects: true }) as Array<{
    title: string;
    info: string[];
  }>;

  return (
    <section className={styles.section}>
      {terms.map((item, index) => (
        <div key={index}>
          <h3 className={styles.title}>
            {index + 1}. {item.title}
          </h3>
          <ul>
            {item.info.map((rule, i) => (
              <li className={styles.li} key={i}>
                {rule}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};
