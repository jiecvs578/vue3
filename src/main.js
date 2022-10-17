import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import i18n from './i18n'
import 'element-plus/dist/index.css'
// 初始化样式表
import '@/styles/index.scss'
// 导入svgIcon
import installIcons from '@/icons'
// 导入路由鉴权
import './perrmission'
const app = createApp(App)
// installElementPlus(app)
installIcons(app)
app.use(store).use(router).use(ElementPlus).use(i18n).mount('#app')