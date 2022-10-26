<template>
    <div class="tags-view-container">
        <router-link v-for="(tag, index) in $store.getters.tagsViewList" :key="tag.fullPath" class="tags-view-item"
            :class="isActive(tag) ? 'active' : ''" :to="{ path: tag.fullPath }">{{ tag.title }}
            <i v-show="!isActive(tag)" class="el-icon-close" @click.prevent.stop="onCloseClick(index)"></i>
        </router-link>
    </div>
</template>
<script setup >
import { useRoute } from 'vue-router'
const route = useRoute()
/**
 * 是否被选中
 */
const isActive = tag => {
    return tag.path === route.path
}
// 关闭事件
const onCloseClick = () => {

}
</script>

<style lang='scss' scoped>

</style>