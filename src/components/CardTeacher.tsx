import { component$, useStyles$ } from '@builder.io/qwik'

import type { QRL } from '@builder.io/qwik'

import styles from './styles/CardTeacher.css?inline'

type CardTeacherProps = {
  firstName: string
  lastName: string
  image: string
  suffix?: string
  prefix?: string
  onClick$?: QRL<() => void>
}

export const CardTeacher = component$(
  ({
    firstName,
    lastName,
    suffix,
    prefix,
    image,
    onClick$,
  }: CardTeacherProps) => {
    useStyles$(styles)

    return (
      <div class="CardTeacher" onClick$={onClick$}>
        <picture class="CardTeacher-picture">
          <img class="CardTeacher-image" src={image} />
        </picture>
        <div class="text-center">
          {prefix} {firstName} {lastName} {suffix}
        </div>
      </div>
    )
  }
)
