import { component$, useStyles$ } from '@builder.io/qwik'

import type { IconNames } from '~/types/props'

import styles from './styles.css?inline'

type IconProps = {
  name: IconNames
  class?: string
}

const Icon = component$(({ name, class: className }: IconProps) => {
  useStyles$(styles)

  return <span class={`ti ti-${name} ${className && ''}`} />
})

export default Icon
