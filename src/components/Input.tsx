import { component$, useStyles$ } from '@builder.io/qwik'
import cx from 'clsx'

import type { HTMLAttributes } from '@builder.io/qwik'

import styles from './styles/Input.css?inline'

type InputProps = {
  value: string
} & Omit<HTMLAttributes<HTMLInputElement>, 'children'>

export const Input = component$(
  ({ class: className, ...restProps }: InputProps) => {
    useStyles$(styles)

    const classes = cx('input', className)

    return <input type="" class={classes} {...restProps} />
  }
)
