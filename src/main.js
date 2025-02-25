import App from './App.vue'
import router from './router'; // Import the router
import 'vuetify/styles'; // Import Vuetify styles

createApp(App).use(router).use(vuetify).mount('#app') // Tell Vue to use Vue Router

const app = createApp(App);

