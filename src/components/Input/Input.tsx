import { component$, useStyles$ } from '@builder.io/qwik'
import cx from 'clsx'

import type { HTMLAttributes } from '@builder.io/qwik'
import type { InputState } from '~/utils/types'

import styles from '../styles/Input.css?inline'

export type InputProps = {
  name?: string
  value: string
  htmlType?: string
  state?: InputState
} & Omit<HTMLAttributes<HTMLInputElement>, 'children'>

const Input = component$(
  ({
    name,
    class: className,
    htmlType = 'text',
    state = 'default',
    ...restProps
  }: InputProps) => {
    useStyles$(styles)

    const classes = cx(
      'input',
      {
        [`input-${state}`]: state !== 'default',
      },
      className
    )

    return <input name={name} type={htmlType} class={classes} {...restProps} />
  }
)

export default Input
