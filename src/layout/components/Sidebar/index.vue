<template>
    <div class="">
        <div class="logo-container">
            <el-avatar :size="logoHeight" shape="square"
                src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"></el-avatar>
            <h1 class="logo-title" v-if="$store.getters.sidebarOpened">
                帅哥杰c
            </h1>
        </div>
        <el-scrollbar>
            <sidebar-menu></sidebar-menu>
        </el-scrollbar>
    </div>
</template>
<script setup>
import SidebarMenu from './SudebarMenu.vue'

const logoHeight = 44
</script>
<style lang="scss" scoped>
.logo-container {
    height: v-bind(logoHeight) + 'px';
    padding: 10px 0 22px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .logo-title {
        margin-left: 10px;
        color: #fff;
        font-weight: 600;
        // font-weight: bold;
        line-height: 50px;
        font-size: 16px;
        white-space: nowrap;
    }
}
</style>