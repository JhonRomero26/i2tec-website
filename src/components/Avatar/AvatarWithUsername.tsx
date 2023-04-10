import { component$, useStyles$ } from '@builder.io/qwik'
import { Avatar } from '.'

import styles from '../styles/AvatarWithUsername.css?inline'
import type { AvatarProps } from '~/components/Avatar'

export type AvatarWithUsernameProps = {
  name: string
} & AvatarProps

const AvatarWithUsername = component$(
  ({ name, image, size, aspectRatio }: AvatarWithUsernameProps) => {
    useStyles$(styles)

    return (
      <div class="AvatarWithUsername">
        <Avatar aspectRatio={aspectRatio} size={size} image={image} />
        <div class="AvatarWithUsername-body">
          <span class="AvatarWithUsername-username">{name}</span>
        </div>
      </div>
    )
  }
)

export default AvatarWithUsername
