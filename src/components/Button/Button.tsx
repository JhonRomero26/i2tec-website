import { $, Slot, component$, useStyles$ } from '@builder.io/qwik'
import cx from 'clsx'

import type { HTMLAttributes, QRL } from '@builder.io/qwik'
import type { ButtonType } from '~/utils/types'

import styles from '../styles/Button.css?inline'

export type BaseButtonProps = {
  type?: 'default' | 'primary' | 'secondary' | 'text'
  size?: 'default' | 'sm' | 'lg'
  class?: string
  danger?: boolean
  block?: boolean
  onClick$?: QRL<() => any>
}

export type NativeButtonProps = {
  htmlType?: ButtonType
} & BaseButtonProps &
  Omit<HTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'>

export type ButtonProps = NativeButtonProps

export const classesButton = ({
  type,
  size,
  block,
  danger,
  className,
}: ButtonProps): string =>
  cx(
    'btn',
    {
      [`btn-${type}`]: type !== 'default',
      [`btn-${size}`]: size !== 'default',
      'btn-block': block,
      'btn-danger': danger,
    },
    className
  )

const Button = component$(
  ({
    type = 'default',
    danger = false,
    class: className,
    size = 'default',
    onClick$ = $(() => {}),
    htmlType,
    block,
    ...restProps
  }: ButtonProps) => {
    useStyles$(styles)

    const classes = classesButton({ type, danger, size, block, className })

    return (
      <button
        {...(restProps as NativeButtonProps)}
        type={htmlType}
        onClick$={onClick$}
        class={classes}
      >
        <Slot name="icon" />
        <Slot />
      </button>
    )
  }
)

export default Button
