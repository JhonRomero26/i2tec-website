import { component$, useStyles$ } from '@builder.io/qwik'
import { Avatar } from '~/components/Avatar'

import type { AvatarProps } from '~/components/Avatar'

import styles from '../styles/AvatarWithPublishedDate.css?inline'

export type AvatarWithPublishedDateProps = {
  name: string
  publishedDate: string
} & AvatarProps

const AvatarWithPublishedDate = component$(
  ({
    name,
    image,
    size,
    aspectRatio,
    publishedDate,
  }: AvatarWithPublishedDateProps) => {
    useStyles$(styles)

    return (
      <div class="AvatarWithPublishedDate">
        <Avatar aspectRatio={aspectRatio} size={size} image={image} />
        <div class="AvatarWithPublishedDate-body">
          <span class="AvatarWithPublishedDate-username">{name}</span>
          <span class="AvatarWithPublishedDate-publishedDate">
            {publishedDate}
          </span>
        </div>
      </div>
    )
  }
)

export default AvatarWithPublishedDate
