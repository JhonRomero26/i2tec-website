import { component$, Slot, useStyles$ } from '@builder.io/qwik'

import styles from './styles/InfoBox.css?inline'

export type InfoBoxProps = {
  title: string
  decoration?: 'left' | 'right'
}

export const InfoBox = component$(
  ({ title, decoration = 'left' }: InfoBoxProps) => {
    useStyles$(styles)

    return (
      <div class="InfoBox">
        <div class={`InfoBox-back ${decoration}`} />
        <div class="InfoBox-body">
          <h3 class="InfoBox-title">{title}</h3>
          <div class="InfoBox-content">
            <Slot />
          </div>
        </div>
      </div>
    )
  }
)
