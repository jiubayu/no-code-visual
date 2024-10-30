<script setup lang="ts">
import AppLeftPanel from '../components/AppLeftPanel/index.vue'
import AppRightPanel from '../components/AppRightPanel/index.vue'
import AppPreviewer from '../components/AppPreviewer/index.vue'
</script>

<template>
  <div class="layout-wrapper">
    <AppLeftPanel/>
    <AppPreviewer/>
    <AppRightPanel/>
  </div>
</template>

<style scoped>
.layout-wrapper {
  display: flex;
  height: 100%;
}
</style>