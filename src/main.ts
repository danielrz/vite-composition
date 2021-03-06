import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

// import Button from 'primevue/button'

const app = createApp(App)
app.use(PrimeVue)

// app.component('Button', Button)
app.mount('#app')