import { createApp } from 'vue'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill, CoHamburgerMenu } from "oh-vue-icons/icons";
addIcons(FaFlag, RiZhihuFill, CoHamburgerMenu);

import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/style.scss'

addIcons(FaFlag, RiZhihuFill, CoHamburgerMenu);
const app = createApp(App)
app.component("v-icon", OhVueIcon);

app.use(router)
app.use(store)

app.mount('#app')
