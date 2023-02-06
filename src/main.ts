import { createApp } from "vue";
import App from "./App.vue";
// 引入 element-plus
import element from "element-plus";
// 引入 element ui 样式
import "element-plus/dist/index.css";
// 添加router
import router from "./router/index";
import { createPinia } from "pinia";
// 引入持久化插件：pinia-plugin-persis
import piniaPluginPersist from "pinia-plugin-persist";
const pinia = createPinia();
pinia.use(piniaPluginPersist);
const app = createApp(App);
app.use(element).use(router).use(pinia).mount("#app");
