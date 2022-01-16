import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/style.scss'
// vue cli 환경에서는 css 파일을 js 파일에 바로 import 할 수 있다

createApp(App).use(router).mount('#app')
// const app = createApp(App)
// app.use(router)
// app.mount('#app')
