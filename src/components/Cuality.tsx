import { component$, useStyles$ } from '@builder.io/qwik'
import { Icon } from './Icon'

import type { IconNames } from '~/utils/types'

import styles from './styles/Quality.css?inline'

export type QualityProps = {
  title: string
  iconName: IconNames
  description: string
}

export const Quality = component$(
  ({ title, iconName, description }: QualityProps) => {
    useStyles$(styles)

    return (
      <div class="Quality">
        <Icon class="Quality-icon" title={title} name={iconName} />
        <div class="Quality-content">
          <h4 class="Quality-title">{title}</h4>
          <span class="Quality-description">{description}</span>
        </div>
      </div>
    )
  }
)
