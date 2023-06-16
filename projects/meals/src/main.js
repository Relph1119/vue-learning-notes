import {createApp} from 'vue'
import App from './App.vue'

import './assets/main.css'
import {createPinia} from "pinia";

const pinia = createPinia()
const app = createApp(App)

app.use(pinia);
app.mount('#app');
