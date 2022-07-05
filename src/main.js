import { createApp } from 'vue'
import moment from 'moment';
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/index.css'

moment.locale('en');

const app = createApp(App)
app.config.globalProperties.$moment = moment;

app.use(router).use(store).mount('#app');