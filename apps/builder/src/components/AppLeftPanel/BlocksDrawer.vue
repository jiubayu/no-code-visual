<script setup lang="ts">
import { SmoothDndContainer } from '../SmoothDnd/SmoothDndContainer'
import { SmoothDndDraggable } from '../SmoothDnd/SmoothDndDraggable'
</script>

<template>
    <div class="component-sub-drawer">
        <h3 class="drawer-title">BLOCKS</h3>
        <!-- <div v-for="d in blocksBaseMetaList" :key="d.type">{{ d.type }}</div> -->
        <smooth-dnd-container
            behaviour="copy"
            group-name="blocks"
            orientation="vertical"
            :get-child-payload="(index: number) => {
                return index
            }"
        >
            <smooth-dnd-draggable v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="i">
                <div>block {{ i }}</div>
            </smooth-dnd-draggable>
        </smooth-dnd-container>
    </div>
</template>

<style scoped>
.component-sub-drawer {
    width: 100%;
}

.drawer-title {
    position: sticky;
    top: 0;
    font-weight: var(--font-weight-bolder);
    padding: 12px 0;
    background-color: var(--color-white);
}
</style>
