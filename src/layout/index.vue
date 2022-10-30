<template>
    <div class="app-wrapper" :class="[$store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']">
        <!-- 左侧menu -->
        <sidebar id="guide-sidebar" class="sidebar-container"
            :style="{ backgroundColor: $store.getters.cssVar.menuBg }"></sidebar>
        <div class="main-container">
            <div class="fixed-header">
                <!-- 顶部navbar -->
                <Navbar></Navbar>
                <!-- tags -->
                <TagsView id="guide-tags"></TagsView>

            </div>
            <!-- 内容区 -->
            <AppMain></AppMain>
        </div>
    </div>
</template>
<script setup>
import { } from 'vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar'
import AppMain from './components/AppMain.vue'
import TagsView from '@/components/TagsView/index.vue'
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';

.app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
}

.fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
}

.hideSidebar .fixed-header {
    width: calc(100% - #{$hideSideBarWidth});
}
</style>