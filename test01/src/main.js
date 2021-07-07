import {
  createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import ApiMixin from "./api";
import store from "./store/store";


createApp(App).use(router).use(store).mixin(ApiMixin).mount("#app");

window.Kakao.init('c9a21813526ad250f9370a7f9531d05c');
window.Kakao.isInitialized();