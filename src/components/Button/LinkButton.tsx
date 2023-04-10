import { Slot, component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { classesButton } from '~/components/Button'

import type { BaseButtonProps } from '~/components/Button'
import type { HTMLAttributes } from '@builder.io/qwik'

export type LinkButtonProps = {
  href?: string
  to?: string
} & BaseButtonProps &
  Omit<HTMLAttributes<HTMLAnchorElement>, 'type' | 'onClick'>

const LinkButton = component$(
  ({
    href,
    to,
    type,
    size,
    class: className,
    danger,
    block,
    ...restProps
  }: LinkButtonProps) => {
    const classes = classesButton({ type, size, block, danger, className })

    if (href)
      return (
        <a href={href} class={classes} {...restProps}>
          <Slot />
        </a>
      )

    return (
      <Link href={to} class={classes} {...restProps}>
        <Slot />
      </Link>
    )
  }
)

export default LinkButton
