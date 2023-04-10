import { component$, useStyles$ } from '@builder.io/qwik'

import styles from '../styles/Avatar.css?inline'

export type AvatarProps = {
  image?: string
  size?: string
  aspectRatio?: string
}

const Avatar = component$(
  ({
    image = '/images/user-placeholder.png',
    size,
    aspectRatio,
  }: AvatarProps) => {
    useStyles$(styles)

    return (
      <picture
        style={{
          width: size,
          height: size,
          aspectRatio: aspectRatio,
        }}
        class="Avatar"
      >
        <img src={image} alt="Avatar" />
      </picture>
    )
  }
)

export default Avatar
