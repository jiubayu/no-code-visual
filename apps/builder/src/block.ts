import { type App, h } from 'vue'

const QuoteBlock = h('div', {}, 'QuoteBlock')
const baseBlocks = [
  {
    type: 'quote',
    metarial: QuoteBlock
  }
]

// 因为我们后面会考虑插件市场，所以我们需要一个类来管理所有的block
// 只有安装了对应的外部插件，你才可以在页面中使用
class BlockSuite {
  private blocks = baseBlocks
  constructor() {}
  getBlocksMap() {
    return Object.fromEntries(this.blocks.map((block) => [block.type, block]))
  }
  getBlocks() {
    return this.blocks
  }
  addBlock(block) {
    this.blocks.push(block)
  }
  hasBlock(type: any) {
    return !!this.getBlocksMap()[type]
  }
}

const blockSuite = new BlockSuite()
blockSuite.addBlock({
  type: 'image',
  metarial: h('div', {}, 'ImageBlock')
})

// provide 提供给后代元素
// 实例 globalProperties
const blocksMap = blockSuite.getBlocksMap()
// const blocksMapSymbol = Symbol('blocksMap')

// vue3 插件
export const initBlocks = () => {
  // 必须是能够返回带有install方法的对象或者函数
  return {
    install(app: App) {
      // Pinia
      //  app.provide('store', store)
      //  app.config.globalProperties.$pinia = pinia
      // 将blocksMap注册到app上，将物料提供给后代组件
      app.provide('blocksMap', blocksMap)
      app.config.globalProperties.$blocksMap = blocksMap
    }
  }
}
