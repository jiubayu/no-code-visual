type BaseBlock = {
  id: string
  type: string
  label: string
  metarial?: any
}

export type HeroTitleBlock = BaseBlock & {
  type: 'heroTitle'
  props: {
    align: 'left' | 'center' | 'right'
    content: string
  }
}

/**
 * ImageBlock
 */
export type ImageBlock = BaseBlock & {
  type: 'image'
  props: {
    url: string
  }
}

export type Block = HeroTitleBlock | ImageBlock
