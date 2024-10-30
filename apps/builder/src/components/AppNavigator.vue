<script setup lang="ts">
import { computed, defineComponent, h, ref, watch } from 'vue'
import { ApplicationMenu, DataSheet, Lightning, Page, Share } from '@icon-park/vue-next'
import { useRoute } from 'vue-router'

const linkItems = [
  {
    value: 'dataSource',
    label: 'data',
    // radial-gradient() CSS 函数创建一个图像, 该图像由从原点辐射的两种或多种颜色之间的渐进过渡组成，其形状可以是圆形或椭圆形
    // 值： <position> 渐变位置  <ending-shape> 渐变形状  <ending-shape> 默认为最远角（farthest-corner）
    // <linear-color-stop>  色标（color stop）的 <color> 值，然后是一个或两个可选的色标位置
    // 百分比值 0%，或者长度值 0，代表渐变的中心 值 100% 表示结束形状与虚拟渐变射线的交点
    bg: 'radial-gradient(50% 50% at 50% 100%, rgba(0, 196, 83, 0.2) 0%, rgba(0, 196, 83, 0) 100%)',
    color: 'rgb(0, 196, 83)',
    borderColor: 'radial-gradient(50% 50%, rgb(0, 196, 83) 0%, rgba(0, 196, 83, 0) 100%)'
  },
  {
    value: 'layout',
    label: 'Layout',
    bg: 'radial-gradient(50% 50% at 50% 100%, rgba(24,190,212,0.2) 0%, rgba(0, 196, 83, 0) 100%)',
    color: 'rgb(24,190,212)',
    borderColor: 'radial-gradient(50% 50%, rgb(24,190,212) 0%, rgba(24,190,212,0) 100%)'
  },
  {
    value: 'actions',
    label: 'Actions',
    bg: 'radial-gradient(50% 50% at 50% 100%, rgba(241, 60, 11, 0.2) 0%, rgba(241, 60, 11, 0) 100%)',
    color: 'rgb(241, 60, 11)',
    borderColor: 'radial-gradient(50% 50%, rgb(241, 60, 11) 0%, rgba(241, 60, 11, 0) 100%)'
  }
]

// defineProps<{
//   msg: String
// }>()

const route = useRoute()

const activeLink = computed(() => route.name)
// 等价于
// const activeLink = ref(route.path.slice(1))
watch(
  () => route.name,
  (path) => {
    console.log('🚀 ~ path:', path)
    // activeLink.value = path.slice(1)
  }
)

const Icon = defineComponent({
  props: {
    type: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { type } = props
    switch (type) {
      case 'dataSource':
        return () => h(DataSheet, { size: 16 })
      case 'layout':
        return () => h(Page, { size: 16 })
      case 'actions':
        return () => h(Lightning, { size: 16 })
      default:
        return () => h('div')
    }
  }
})
</script>

<template>
  <div class="app-navigator">
    <div class="app-info-wrapper">
      <RouterLink class="icon-button" to="/o">
        <ApplicationMenu size="16" />
      </RouterLink>
      <div class="app-logo">
        <img
          src="https://cdn.jsdelivr.net/gh/mkabumattar/fluentui-emoji@latest/icons/modern/airplane.svg"
          alt=""
        />
      </div>
      <h1 class="app-name">Milo V-builder</h1>
    </div>
    <div class="app-navigator-link-wrapper">
      <RouterLink
        class="app-navigator-link-item"
        v-for="item in linkItems"
        :key="item.value"
        :style="activeLink === item.value && { background: item.bg }"
        :to="`/app/${item.value}`"
      >
        <div
          :style="{
            lineHeight: '0.7',
            color: activeLink === item.value ? item.color : 'var(--color-gray-700)'
          }"
        >
          <Icon :type="item.value" :active="activeLink === item.value" />
        </div>
        <span class="item-title">
          {{ item.label }}
        </span>
        <div
          class="item-border"
          :style="activeLink === item.value ? { background: item.borderColor } : {}"
        ></div>
      </RouterLink>
    </div>

    <div class="app-setting-wrapper">
      <div class="common-btn">
        <Share />
        发布
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-navigator {
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  box-shadow: rgb(0 0 0 / 8%) 0 1px 0;
}
.app-info-wrapper {
  width: 1000px;
  display: flex;
  /* place-items是align-items和justify-items的简写 */
  place-items: center;
}
.icon-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  margin-left: 10px;
  color: var(--color-gray-800);

  /* &:hover {
        background-color: var(--color-gray-200);
    } */
}

.icon-button:hover {
  background-color: var(--color-gray-200);
}

.app-logo {
  width: 32px;
  height: 32px;
  margin: 10px 8px 10px 8px;
  border-radius: 8px;
  background-color: #3d6583;
}

.app-logo img {
  width: 70%;
  height: 70%;
  padding: 5px;
}

.app-name {
  color: var(--color-gray-900);
  font-weight: var(--font-weight-bolder);
  font-size: var(--font-size-large);
}

.app-navigator-link-wrapper {
  display: flex;
  /* flex-shrink 指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，
    其收缩的大小是依据 flex-shrink 的值 */
  flex-shrink: 0;
  justify-content: space-between;
  /* align-self 会对齐当前 grid 或 flex 行中的元素，并覆盖已有的 align-items 的值 
    align-self 'auto'-sized items to fit the container */
  align-self: stretch;
}

.app-navigator-link-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 8px;
  margin: 0 24px;
  align-self: stretch;
  background-color: var(--color-white);
  color: var(--color-text);
  font-size: var(--font-size-normal);
  font-weight: var(--font-weight-bold);
}

.item-title {
  margin-left: 8px;
  color: var(--color-black);
}

.item-border {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 1px;
}

.app-setting-wrapper {
  width: 1000px;
  display: flex;
  place-items: center;
  justify-content: flex-end;
  margin-right: 18px;
  /* gap是flex子元素之间的间隙 */
  gap: 12px;
}

.common-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 18px;
  border-radius: 8px;
  background-color: var(--color-black);
  color: var(--color-white);
  font-size: var(--font-size-normal);
  font-weight: var(--font-weight-bold);
  cursor: pointer;
  user-select: none;
}

.debug-btn {
  box-shadow: var(--color-gray-300) 0 0 0 1px;
  background-color: var(--color-white);
  color: var(--color-black);
}

.debug-btn.debug {
  color: var(--color-primary);
  box-shadow: var(--color-primary) 0 0 0 1px;
}
</style>
