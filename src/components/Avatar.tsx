import { component$, useStyles$ } from '@builder.io/qwik'

import styles from './styles/Avatar.css?inline'

export type AvatarProps = {
  image: string
}

export const Avatar = component$(({ image }: AvatarProps) => {
  useStyles$(styles)

  return (
    <figure class="Avatar">
      <img src={image} alt="Avatar" />
    </figure>
  )
})
