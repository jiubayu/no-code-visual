<script setup>
import NavigationDrawer from './NavigationDrawer.vue'
import ComponentsDrawer from './ComponentsDrawer.vue'
import BlocksDrawer from './BlocksDrawer.vue'
import { useDisclosure } from '@/hooks/useDisclosure';

const [isOpen, { toggle }] = useDisclosure(false)
</script>

<template>
  <div class="app-left-panel-wrapper">
    <div class="app-left-panel-drawer">
      <div class="app-left-panel-split tiny-scrollbar">
        <NavigationDrawer />
      </div>
       <div class="app-left-panel-split tiny-scrollbar" style="height: 60%;">
        <ComponentsDrawer/>
         <button @click="toggle()">+</button>
      </div>
    </div>
    <div class="app-left-sub-panel" v-if="isOpen">
        <BlocksDrawer/>
    </div>
  </div>
</template>

<style scoped>
.app-left-panel-wrapper {
  display: flex;
  z-index: 4;
  height: 100%;
  box-shadow: var(--color-gray-300) 1px 0 0;
}

.app-left-panel-drawer {
    width: var(--panel-width);
    height: 100%;
    box-shadow: var(--color-gray-300) 1px 0 0;
    overflow: hidden;
}

.app-left-panel-split {
    height: 40%;
    overflow: hidden;
    display: flex;
    overflow: auto;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-gray-300);
}

.app-left-sub-panel {
    width: 320px;
}
</style>
