<template>
  <div class="">
    <el-checkbox v-model="checked1" label="Option 1" size="large" />
    <el-checkbox v-model="checked1" label="Option 1" size="large" />
  </div>
</template>

<script setup>
import { } from 'vue'
</script>

<style lang="scss" scoped>
::v-deep .el-checkbox__inner::after {
  border: 1px solid blue !important;
}

::v-deep .el-checkbox__inner {
  background-color: red;

  ::after {
    border: 1px solid skyblue;
  }
}

::v-deep .is-checked {
  .el-checkbox__inner {
    background-color: #000;

    ::after {
      border: 1px solid red !important;
    }
  }
}

.el-radio-group {
  :deep(.is-active) {
    .el-radio-button__inner {
      color: red !important;
      background-color: #fff !important;
    }
  }
}
</style>
