import { component$, useStyles$ } from '@builder.io/qwik'
import cx from 'clsx'

import type { IconNames } from '~/utils/types'

import styles from './styles/Icon.css?inline'

type IconProps = {
  title?: string
  name: IconNames
  class?: string
}

export const Icon = component$(
  ({ name, class: className, title }: IconProps) => {
    useStyles$(styles)
    const classes = cx(`ti ti-${name}`, className)

    return <span title={title} aria-label={title} class={classes} />
  }
)
