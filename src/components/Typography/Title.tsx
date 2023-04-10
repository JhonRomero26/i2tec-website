import { Slot, component$, h } from '@builder.io/qwik'
import cx from 'clsx'

import type { HTMLAttributes } from '@builder.io/qwik'
import type {
  FontSize,
  FontWeight,
  TagsHeading,
  TextAlign,
} from '~/utils/types'

export type TitleProps = {
  tag?: TagsHeading
  text?: string
  class?: string
  align?: TextAlign
  fontWeight?: FontWeight
  fontSize?: FontSize
} & HTMLAttributes<HTMLHeadingElement>

const Title = component$(
  ({
    tag = 'h1',
    class: className,
    align,
    fontWeight,
    fontSize,
  }: TitleProps) => {
    const classes = cx(
      {
        [`text-${align}`]: align !== undefined,
        [`text-${fontSize}`]: fontSize !== undefined,
        [`weight-${fontWeight}`]: fontWeight !== undefined,
      },
      className
    )

    return h(tag, { class: classes }, <Slot />)
  }
)

export default Title
