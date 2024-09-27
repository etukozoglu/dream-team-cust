import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import en from './i18n/en.json';
import fr from './i18n/fr.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue';
import router from './router';

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
  .use(router) 
  .use(i18n)
  .mount('#app');
