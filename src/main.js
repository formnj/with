import { createApp } from 'vue'
import { router } from "./router";
import App from './App.vue'

// app.use(router);
// createApp(App).mount('#app');

const app = createApp(App);
app.use(router); //router 사용
app.mount("#app");
