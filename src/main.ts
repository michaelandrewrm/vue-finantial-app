import './assets/styles/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
// @ts-expect-error
import { createI18n, type I18nOptions } from 'vue-i18n';

import messages from '@intlify/unplugin-vue-i18n/messages';

const vueI18nOptions: I18nOptions = {
	legacy: false,
	locale: 'es',
	fallbackLocale: 'en',
	messages,
};

const i18n = createI18n<false, typeof vueI18nOptions>(vueI18nOptions);

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(i18n);
app.use(createPinia());
app.use(router);

app.mount('#app');
