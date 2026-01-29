import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueFire } from 'vuefire';

import 'normalize.css'
import './assets/main.css'

import App from './App.vue'
import router from './router'

import firebaseApp, { testFirestoreConnection } from './plugins/firebase';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueFire, {
  firebaseApp,
});

app.mount('#app')

// Test Firebase connection after app is mounted
testFirestoreConnection();
