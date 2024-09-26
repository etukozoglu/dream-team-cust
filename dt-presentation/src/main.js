import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import fr from './locales/fr.json';

// Importer Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Détection de la langue du navigateur
const browserLanguage = navigator.language.startsWith('fr') ? 'fr' : 'en';

// Configuration de Vue I18n
const i18n = createI18n({
  locale: browserLanguage,
  fallbackLocale: 'en',
  messages: {
    en,
    fr
  }
});

createApp(App)
  .use(i18n)
  .mount('#app');
