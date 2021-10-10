import { createApp } from 'vue';
import App from './App.vue';
import './style/index.css';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).mount('#app');
