import { Slot, component$, useStyles$ } from '@builder.io/qwik'
import { IconButton } from './Button'

import type { PropFunction } from '@builder.io/qwik'

import styles from './styles/ModifyWrapper.css?inline'

export type ModifyWrapperProps = {
  handleDelete$: PropFunction<() => void>
}

export const ModifyWrapper = component$(
  ({ handleDelete$ }: ModifyWrapperProps) => {
    useStyles$(styles)

    return (
      <div class="ModifyWrapper">
        <div class="ModifyWrapper-actions">
          <IconButton
            onClick$={handleDelete$}
            danger
            ariaLabel="Editar usuario"
            icon="trash"
            size="sm"
          />
        </div>
        <Slot />
      </div>
    )
  }
)
