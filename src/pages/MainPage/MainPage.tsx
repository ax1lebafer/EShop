import { useTranslation } from 'react-i18next';

export const MainPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <h3>{t('headphones')}</h3>
    </>
  );
};
