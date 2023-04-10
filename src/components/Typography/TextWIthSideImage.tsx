import { Slot, component$, useStyles$ } from '@builder.io/qwik'

import styles from '../styles/TextWithSideImage.css?inline'
import cx from 'clsx'

export type TextWithSideImageProps = {
  image: string
  alt: string
  class?: string
  direction?: 'ltr' | 'rtl'
  clipPath?: string
  aspectRatio?: string
}

const TextWithSideImage = component$(
  ({
    class: className,
    image,
    clipPath,
    alt,
    aspectRatio = '4 / 3',
    direction = 'ltr',
  }: TextWithSideImageProps) => {
    useStyles$(styles)

    const classes = cx(
      'TextWithSideImage',
      {
        reverse: direction === 'rtl',
      },
      className
    )

    return (
      <div class={classes}>
        <div class="TextWithSideImage-text">
          <Slot />
        </div>
        <figure
          style={{
            clipPath,
            aspectRatio,
          }}
          class="TextWithSideImage-figure"
        >
          <img class="TextWithSideImage-image" src={image} alt={alt} />
        </figure>
      </div>
    )
  }
)

export default TextWithSideImage
