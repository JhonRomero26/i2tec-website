import {
  $,
  component$,
  useSignal,
  useStyles$,
  useVisibleTask$,
} from '@builder.io/qwik'
import { Button } from '~/components/Button'
import { useInput } from '~/hooks'

import type { PropFunction } from '@builder.io/qwik'

import styles from './styles/UploadImage.css?inline'
import { ModifyWrapper } from './ModifyWrapper'

export type UploadImageProps = {
  mimeAccept?: string
  text?: string
  multiple?: boolean
  handleUpload$: PropFunction<
    ({ image, file }: { image: string; file?: File }) => void
  >
}

export const UploadImage = component$(
  ({
    mimeAccept = 'image/jpeg, image/png, image/webp',
    handleUpload$,
  }: UploadImageProps) => {
    useStyles$(styles)
    const imagesrc = useInput('')
    const containerRef = useSignal<Element>()
    const inputRef = useSignal<Element>()

    useVisibleTask$(({ cleanup }) => {
      const handleDrop = (e: Event) => {
        const items = (e as DragEvent).dataTransfer?.items
        if (items && items[0] && items[0].kind === 'file') {
          const file = items[0].getAsFile()
          if (file) {
            imagesrc.value = URL.createObjectURL(file)
            handleUpload$({
              image: imagesrc.value,
              file,
            })
          }
        }
      }

      containerRef.value?.addEventListener('drop', handleDrop)

      cleanup(() => containerRef.value?.removeEventListener('drop', handleDrop))
    })

    const onClick$ = $(() => {
      const target = inputRef.value as HTMLInputElement
      target.click()
    })

    const onInput$ = $(() => {
      if (inputRef.value) {
        const target = inputRef.value as HTMLInputElement
        const file = target.files ? target.files[0] : undefined
        if (!file) {
          imagesrc.value = ''
          return
        }
        imagesrc.value = URL.createObjectURL(file)
        handleUpload$({
          image: imagesrc.value,
          file,
        })
      }
    })

    const handleDelete$ = $(() => {
      imagesrc.value = ''
      handleUpload$({ image: imagesrc.value })
    })

    return (
      <div
        preventdefault:dragover
        preventdefault:dragovercapture
        preventdefault:drop
        preventdefault:dropcapture
        ref={containerRef}
        class="UploadImage"
      >
        <input
          ref={inputRef}
          type="file"
          accept={mimeAccept}
          onInput$={onInput$}
          hidden
          style={{ display: 'none' }}
        />
        {imagesrc.value !== '' ? (
          <ModifyWrapper handleDelete$={handleDelete$}>
            <img class="UploadImage-preview" src={imagesrc.value} />
          </ModifyWrapper>
        ) : (
          <div class="UploadImage-text">
            Arrastra la image o{' '}
            <Button type="primary" onClick$={onClick$}>
              Subir
            </Button>
          </div>
        )}
      </div>
    )
  }
)
