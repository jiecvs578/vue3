import { watch } from 'vue'
import store from '@/store'
import i18n from '@/i18n'
export function generateTitle(title) {
    return i18n.global.t('msg.route.' + title)
}

/**
 *
 * @param  {...any} cbs 所有的回调
 * 监听语言变化 同时执行 cb
 */
export function watchSwitchLang(...cbs) {
    watch(
        () => store.getters.language,
        () => {
            cbs.forEach(cb => cb(store.getters.language))
        }
    )
}
