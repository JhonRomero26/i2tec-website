import { component$, useStyles$ } from '@builder.io/qwik'

import styles from './styles/BlogAvatar.css?inline'
import { Avatar } from './Avatar'

export type BlogAvatarProps = {
  name: string
  image?: string
  publishedDate: string
}

export const BlogAvatar = component$(
  ({
    name,
    image = '/images/user-placeholder.png',
    publishedDate,
  }: BlogAvatarProps) => {
    useStyles$(styles)

    return (
      <div class="BlogAvatar">
        <Avatar image={image} />
        <div class="BlogAvatar-body">
          <span class="BlogAvatar-username">{name}</span>
          <span class="BlogAvatar-publishedDate">{publishedDate}</span>
        </div>
      </div>
    )
  }
)
