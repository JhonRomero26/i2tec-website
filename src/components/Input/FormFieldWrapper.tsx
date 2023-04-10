import { Slot, component$, useStyles$ } from '@builder.io/qwik'
import { Icon } from '~/components/Icon'

import type { IconNames } from '~/utils/types'

import styles from '../styles/FormFieldWrapper.css?inline'

export type FormFieldWrapperProps = {
  label?: string
  stateMessage?: 'error' | 'success' | 'help'
  message?: string
  helpMessage?: string
  required?: boolean
}

const FormFieldWrapper = component$(
  ({
    label,
    stateMessage,
    message,
    required = false,
  }: FormFieldWrapperProps) => {
    useStyles$(styles)
    const iconsMessage = {
      error: 'square-x' as IconNames,
      success: 'square-check' as IconNames,
      help: 'alert-triangle' as IconNames,
    }

    return (
      <label data-aria-required={required} class="FormFieldWrapper">
        <span class="text-sm weight-500 FormFieldWrapper-label">{label}</span>
        <Slot />
        {message && (
          <span class="FormFieldWrapper-message">
            <Icon name={iconsMessage[stateMessage ?? 'help']} />
            <small class="text-xs">{message}</small>
          </span>
        )}
      </label>
    )
  }
)

export default FormFieldWrapper
