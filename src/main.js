import { createApp } from "vue";
import { createPinia } from 'pinia';
import App from "./App.vue";
import store from "./stores";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import ArgonDashboard from "./argon-dashboard";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(store);
app.use(router);
app.use(ArgonDashboard);

app.mount("#app");
