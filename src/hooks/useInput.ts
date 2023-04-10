import { $, useStore, useTask$ } from '@builder.io/qwik'

import type { QRL } from '@builder.io/qwik'

type useInputStore = {
  value: string
  onInput$: QRL<(e: Event) => void>
  clean$: QRL<() => any>
}

function useInput(initialValue: string) {
  const inputStore = useStore<useInputStore>({
    value: initialValue,
    onInput$: $(() => {}),
    clean$: $(() => {}),
  })

  useTask$(({ track }) => {
    track(() => inputStore.value)

    inputStore.onInput$ = $((e: Event) => {
      const { value } = e.target as HTMLInputElement
      inputStore.value = value
    })

    inputStore.clean$ = $(() => {
      inputStore.value = ''
    })
  })

  return inputStore
}

export default useInput
