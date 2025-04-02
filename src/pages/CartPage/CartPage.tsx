import { useTranslation } from 'react-i18next';

export const CartPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <h3>{t('cart')}</h3>
    </>
  );
};
