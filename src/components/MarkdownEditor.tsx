import {
  component$,
  noSerialize,
  useSignal,
  useVisibleTask$,
} from '@builder.io/qwik'
import Easymde from 'easymde'

import type { NoSerialize } from '@builder.io/qwik'

import 'easymde/dist/easymde.min.css'

export type MarkdownEditorProps = {
  selector: string
}

export const MarkdownEditor = component$(() => {
  const editorRef = useSignal<HTMLElement>()
  const textMarkDown = useSignal<NoSerialize<Easymde>>()
  const mde = useSignal<string | undefined>('')

  useVisibleTask$(({ track }) => {
    track(() => (mde.value = textMarkDown.value?.value()))

    if (!textMarkDown.value) {
      textMarkDown.value = noSerialize(
        new Easymde({
          element: editorRef.value,
          spellChecker: false,
        })
      )
    }
    console.log(mde.value)

    // mde.value = textMarkDown.value?.value()
  })

  return <textarea ref={editorRef} />
})
