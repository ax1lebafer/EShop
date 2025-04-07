import { PRODUCTS } from '../../data.ts';
import { ProductSection } from '../../components/ProductSection/ProductSection.tsx';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <>
      <ProductSection title="headphones" data={PRODUCTS} />

      <ProductSection
        title="wirelessHeadphones"
        data={PRODUCTS}
        className={styles.section}
      />
    </>
  );
};
