import { Slot, component$, useStyles$ } from '@builder.io/qwik'
import { Title } from './Typography'

import styles from './styles/TitleWithTrigger.css?inline'

import type { TitleProps } from './Typography'

export type TitleWithTriggerProps = {
  title: string
} & TitleProps

export const TitleWithTrigger = component$(
  ({
    title,
    fontSize = '3xl',
    fontWeight = '700',
    tag = 'h1',
  }: TitleWithTriggerProps) => {
    useStyles$(styles)

    return (
      <div class="TitleWithTrigger">
        <Title fontSize={fontSize} fontWeight={fontWeight} tag={tag}>
          {title}
        </Title>
        <Slot name="trigger" />
      </div>
    )
  }
)
