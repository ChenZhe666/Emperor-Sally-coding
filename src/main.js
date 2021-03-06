import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/reset.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import './iconfont/iconfont.css'
// import installIcons from './icons/index.js'
// import './permission'
const app = createApp(App)
// installIcons(app)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(store).use(router).use(ElementPlus).mount('#app')
