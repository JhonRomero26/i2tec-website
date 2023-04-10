import { Slot, component$, useStyles$ } from '@builder.io/qwik'
import { Title } from '~/components/Typography'

import type {
  FontWeight,
  TagsHeading,
  FontSize,
  TextAlign,
} from '~/utils/types'
import type { TitleProps } from '~/components/Typography'

import styles from '../styles/TitleWithText.css?inline'

export type TitleWithTextProps = {
  tag?: TagsHeading
  title: string
  fontWeight?: FontWeight
  fontSize?: FontSize
  class?: string
  align?: TextAlign
} & TitleProps

const TitleWithText = component$(
  ({
    title,
    tag = 'h1',
    fontWeight,
    fontSize,
    class: className = '',
    align,
  }: TitleWithTextProps) => {
    useStyles$(styles)

    return (
      <div class={`TitleWithText ${className}`}>
        <Title
          class="TitleWithText-title"
          fontSize={fontSize}
          fontWeight={fontWeight}
          tag={tag}
          align={align}
        >
          {title}
        </Title>

        <p class={align !== undefined ? `text-${align}` : ''}>
          <Slot />
        </p>
      </div>
    )
  }
)

export default TitleWithText
