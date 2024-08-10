import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'

import App from './App.vue'
import router from './router'
import { queryClient } from './modules'

import './assets/main.css'

const app = createApp(App)

app.use(VueQueryPlugin, {
  enableDevtoolsV6Plugin: true,
  queryClient: queryClient
})
app.use(createPinia())
app.use(router)

app.mount('#app')
