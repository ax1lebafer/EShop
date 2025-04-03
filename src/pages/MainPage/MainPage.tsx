import { HEADPHONES, WIRELESS_HEADPHONES } from '../../data.ts';
import { ProductSection } from '../../components/ProductSection/ProductSection.tsx';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <>
      <ProductSection title="headphones" data={HEADPHONES} />

      <ProductSection
        title="wirelessHeadphones"
        data={WIRELESS_HEADPHONES}
        className={styles.section}
      />
    </>
  );
};
