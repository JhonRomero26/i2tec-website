import { component$, useStyles$ } from '@builder.io/qwik'

import type { IconNames } from '~/types/props'

import styles from './styles/Icon.css?inline'

type IconProps = {
  name: IconNames
  class?: string
}

export const Icon = component$(({ name }: IconProps) => {
  useStyles$(styles)

  return <span class={`ti ti-${name}`} />
})
