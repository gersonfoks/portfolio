import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//
// import './assets/main.css'
// import 'bulma/css/bulma.css';
import './assets/css/mystyles.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
