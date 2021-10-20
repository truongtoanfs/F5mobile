import { createApp } from 'vue';
import App from './App.vue';
import './style/index.css';
import router from './router';
import store from './store';
import 'clickout-event';

const app = createApp(App);
app.directive('focus', {
    mounted(el) {
        el.focus();
    }
})
app.use(store).use(router).mount('#app');
