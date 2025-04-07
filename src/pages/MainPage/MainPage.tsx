import { PRODUCTS } from '../../data.ts';
import { ProductSection } from '../../components/ProductSection/ProductSection.tsx';
import styles from './MainPage.module.scss';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const MainPage = () => {
  const { t } = useTranslation();

  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <>
      <section className={styles.searchContainer}>
        <div className={styles.searchWrapper}>
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className={styles.input}
            placeholder={t('search')}
          />
          <img
            className={styles.closeIcon}
            src="/icons/close.svg"
            alt="Close icon"
            onClick={() => setSearchQuery('')}
            style={
              !searchQuery
                ? { visibility: 'hidden' }
                : { visibility: 'visible' }
            }
          />
        </div>
      </section>

      <ProductSection
        title="headphones"
        data={PRODUCTS}
        searchQuery={searchQuery}
      />

      <ProductSection
        title="wirelessHeadphones"
        data={PRODUCTS}
        searchQuery={searchQuery}
        className={styles.section}
      />
    </>
  );
};
