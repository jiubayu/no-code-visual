import { constants, type SmoothDnD, smoothDnD } from 'smooth-dnd'
import { defineComponent, h } from 'vue'

import { getTagProps } from './utils'

export const SmoothDndContainer = defineComponent({
  name: 'SmoothDndContainer',
  props: {
    orientation: { type: String, default: 'vertical' },
    removeOnDropOut: { type: Boolean, default: false },
    autoScrollEnabled: { type: Boolean, default: true },
    animationDuration: { type: Number, default: 250 },
    behaviour: String,
    groupName: String,
    dragHandleSelector: String,
    nonDragAreaSelector: String,
    lockAxis: String,
    dragClass: String,
    dropClass: String,
    dragBeginDelay: Number,
    getChildPayload: Function,
    shouldAnimateDrop: Function,
    shouldAcceptDrop: Function,
    getGhostParent: Function,
    dropPlaceholder: [Object, Boolean],
    tag: {
      type: String,
      default: 'div'
    }
  },
  emits: [
    'drop',
    'drop-ready',
    'drop-end',
    'drag-start',
    'drag-end',
    'drag-enter',
    'drag-leave',
    'drop-move'
  ],
  setup() {
    return {
      container: null as SmoothDnD | null
    }
  },
  mounted() {
    const containerElement = (this.$refs.container || this.$el) as HTMLElement
    const options: any = Object.assign({}, this.$props)
    this.container = smoothDnD(containerElement, options)
  },
  unmounted() {
    try {
      if (this.container) {
        this.container?.dispose()
      }
    } catch (e) {
      // console.log(e)
    }
  },
  render() {
    const tagProps = getTagProps(this, constants.wrapperClass)
    return h(
      tagProps.value,
      Object.assign({}, { ref: 'container' }, tagProps.props),
      this.$slots.default?.()
    )
  }
})
