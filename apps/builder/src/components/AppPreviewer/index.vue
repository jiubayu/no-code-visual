<script setup>
// import { blocks } from '@/mock/blocks'
import { ref } from 'vue'
import { SmoothDndContainer } from '../SmoothDnd/SmoothDndContainer'
import { SmoothDndDraggable } from '../SmoothDnd/SmoothDndDraggable'
import { dropHandlers, smoothDnD } from 'smooth-dnd'

// handleDrop 解决bug
smoothDnD.dropHandler = dropHandlers.reactDropHandler().handler
smoothDnD.wrapChild = false

const blocks = ref([
  { id: '0', type: 'chart' },
  { id: '1', type: 'image' },
  { id: '2', type: 'text' },
  { id: '3', type: 'button' }
])
</script>

<template>
  <div class="preview-wrapper">
    <smooth-dnd-container
      behaviour="move"
      group-name="blocks"
      @drop="
        (arr, dragResult) => {
          console.log(arr, dragResult, 'args')
          // blocks.splice(index, 0, blocks[blocks.length - 1])
          return 0
        }
      "
    >
      <smooth-dnd-draggable v-for="block in blocks" :key="block">
        <div>block {{ block }}</div>
      </smooth-dnd-draggable>
    </smooth-dnd-container>
  </div>
</template>

<style scoped>
.preview-wrapper {
  flex: 1;
  height: 100%;
  background: var(--color-gray-100);
}
</style>
