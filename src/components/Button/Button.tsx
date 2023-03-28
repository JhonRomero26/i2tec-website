import { Slot, component$, useStyles$ } from '@builder.io/qwik'
import cx from 'clsx'

import type {
  HTMLAttributes,
  QwikMouseEvent,
  PropFunction,
  QRL,
} from '@builder.io/qwik'
import type { IconNames } from '~/utils/types'

import styles from '../styles/Button.css?inline'
import { Icon } from '../Icon'
import { Link } from '@builder.io/qwik-city'

export type BaseButtonProps = {
  type?: 'default' | 'primary' | 'secondary' | 'text'
  icon?: IconNames
  class?: string
  danger?: boolean
  block?: boolean
  onClick$?: PropFunction<() => any>
}

export type AnchorButtonProps = {
  href?: string
  to?: string
} & BaseButtonProps &
  Omit<HTMLAttributes<HTMLAnchorElement>, 'type' | 'onClick'>

export type NativeButtonProps = {
  htmlType?: string
} & BaseButtonProps &
  Omit<HTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'>

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>

const Button = component$(
  ({
    type = 'default',
    danger = false,
    class: className,
    icon,
    children,
    href,
    to,
    onClick$,
  }: ButtonProps) => {
    useStyles$(styles)

    const existLink = href !== undefined || to !== undefined
    const linkType = existLink ? (href !== undefined ? 'href' : 'to') : ''
    const classes = cx(
      'btn',
      {
        [`btn-${type}`]: type !== 'default',
        'btn-icon': icon && children === undefined,
        'btn-danger': danger,
      },
      className
    )

    if (linkType === 'href')
      return (
        <a
          onClick$={onClick$}
          rel="noreferrer"
          class={classes}
          href={href}
          target="_blank"
        >
          {icon && <Icon title={icon} name={icon} />}
          <Slot />
        </a>
      )

    if (linkType === 'to')
      return (
        <Link onClick$={onClick$} class={classes} href={to}>
          {icon && <Icon title={icon} name={icon} />}
          <Slot />
        </Link>
      )

    return (
      <button onClick$={onClick$} class={classes}>
        {icon && <Icon title={icon} name={icon} />}
        <Slot />
      </button>
    )
  }
)

export default Button
