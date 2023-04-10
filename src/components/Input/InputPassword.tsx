import { $, component$, useSignal } from '@builder.io/qwik'
import { Input } from '~/components/Input'
import { IconButton } from '~/components/Button'

import type { InputProps } from '~/components/Input'

export type InputPasswordProps = InputProps

const InputPassword = component$(
  ({ class: className, ...restProps }: InputPasswordProps) => {
    const isPasswordVisible = useSignal<boolean>(false)

    const handleClick = $(
      () => (isPasswordVisible.value = !isPasswordVisible.value)
    )
    return (
      <div class="input-container">
        <Input
          class={className}
          htmlType={isPasswordVisible.value ? 'text' : 'password'}
          {...restProps}
        />
        <IconButton
          class="input-btn"
          htmlType="button"
          onClick$={handleClick}
          ariaLabel="Mostrar/Ocultar contraseña"
          icon={isPasswordVisible.value ? 'eye-closed' : 'eye'}
        />
      </div>
    )
  }
)

export default InputPassword
