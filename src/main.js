import App from './app/App.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { createApp } from 'vue';
import VueTheMask from 'vue-the-mask';

import { createPinia } from 'pinia';

import router from './app/router';
import './shared/styles/index.scss';

const app = createApp(App);

app.use(createPinia());
app.use(VueTheMask);
app.use(router);
app.component('VueDatePicker', VueDatePicker);
app.mount('#app');
