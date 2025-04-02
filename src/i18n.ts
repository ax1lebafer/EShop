import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ruTranslation from './locales/ru.json';
import enTranslation from './locales/en.json';

const resources = {
  ru: {
    translation: ruTranslation,
  },
  en: {
    translation: enTranslation,
  },
};

const savedLanguage = localStorage.getItem('language') || 'ru';

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
