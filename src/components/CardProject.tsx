import { component$, useStyles$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { Icon } from './Icon'

import styles from './styles/CardProject.css?inline'
import { parseDatePublished } from '~/utils/functions'

export type CardProjectProps = {
  href: string
  title: string
  author: string
  publishedDate: string
  image: string
}

export const CardProject = component$(
  ({ title, href, author, publishedDate, image }: CardProjectProps) => {
    const published = parseDatePublished(publishedDate)

    useStyles$(styles)

    return (
      <article class="CardProject">
        <figure class="CardProject-figure">
          <img
            loading="lazy"
            class="CardProject-image"
            src={image}
            alt={title}
            title={title}
          />
        </figure>
        <Link href={href} class="CardProject-content">
          <h4 class="CardProject-title text-ellipsis">{title}</h4>
          <div class="CardProject-metainfo">
            <div class="CardProject-option">
              <Icon title="Fecha de publicación" name="calendar" />
              <time>{published}</time>
            </div>
            <div class="CardProject-option">
              <Icon title="Autor" name="user" />
              <span>{author}</span>
            </div>
          </div>
        </Link>
      </article>
    )
  }
)
