import { ref } from 'vue'

export const useDisclosure = (initialState: boolean) => {
  const flag = ref(initialState ?? false)
  const onOpen = () => {
    flag.value = true
  }
  const onClose = () => {
    flag.value = false
  }

  const toggle = () => {
    flag.value = !flag.value
  }
  return [
    flag,
    {
      onOpen,
      onClose,
      toggle
    }
  ]
}
