import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './index.css'
import store from './store';
import Emitter from 'tiny-emitter';

const app = createApp(App)
app.config.globalProperties.$msalInstance = {};
app.config.globalProperties.$emitter = new Emitter();


app.use(store)
app.use(router)

app.mount('#app')
