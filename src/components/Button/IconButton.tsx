import { component$ } from '@builder.io/qwik'
import { Button } from '~/components/Button'
import { Icon } from '~/components/Icon'

import type { ButtonProps } from '~/components/Button'
import type { IconNames } from '~/utils/types'
import cx from 'clsx'

export type IconButtonProps = {
  icon: IconNames
  ariaLabel: string
} & ButtonProps

const IconButton = component$(
  ({ icon, class: className, ariaLabel, ...restProps }: IconButtonProps) => {
    const classes = cx('btn-icon', className)

    return (
      <Button class={classes} {...restProps}>
        <Icon q:slot="icon" title={ariaLabel} name={icon} />
        <span q:slot="icon" class="sr-only">
          {ariaLabel}
        </span>
      </Button>
    )
  }
)

export default IconButton
