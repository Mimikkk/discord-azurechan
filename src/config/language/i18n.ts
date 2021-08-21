import i18n from 'i18next';
import main from './locales/main/en.locale';

const resources = {
  en: { main },
};
i18n.init({
  resources,
  lng: 'en',
  fallbackLng: ['en'],
  ns: ['main'],
  defaultNS: 'main',
  interpolation: { escapeValue: false },
});
