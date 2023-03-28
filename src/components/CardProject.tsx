import { component$, useStyles$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { Icon } from './Icon'

import type { Project } from '~/models'

import styles from './styles/CardProject.css?inline'

export type CardProjectProps = {
  project: Project
}

const dateOpts: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'utc',
}

export const CardProject = component$(({ project }: CardProjectProps) => {
  useStyles$(styles)

  const { id, title, author, publishedDate, image } = project
  const dateArticle = new Date(publishedDate).toLocaleDateString(
    'en-US',
    dateOpts
  )

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
      <Link href={`/projects/${id}`} class="CardProject-content">
        <h4 class="CardProject-title">{title}</h4>
        <div class="CardProject-metainfo">
          <div class="CardProject-option">
            <Icon title="Fecha de publicación" name="calendar" />
            <time>{dateArticle}</time>
          </div>
          <div class="CardProject-option">
            <Icon title="Autor" name="user" />
            <span>{author}</span>
          </div>
        </div>
      </Link>
    </article>
  )
})
