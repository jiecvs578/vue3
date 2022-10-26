import { createI18n } from 'vue-i18n'
import mzhLocale from './lang/zh'
import menLocale from './lang/en'
import store from '@/store'
const messages = {
    en: {
        msg: {
            ...menLocale
        }
    },
    zh: {
        msg: {
            ...mzhLocale
        }
    }
}
function getLanguage() {
    return store && store.getters && store.getters.language
}
const i18n = createI18n({
    // 使用composition API
    legacy: false,
    // 全局使用t函数
    globalInjection: true,
    locale: getLanguage(),
    messages
})

export default i18n