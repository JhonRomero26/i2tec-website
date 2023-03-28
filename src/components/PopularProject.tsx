import { component$, useStyles$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { Icon } from './Icon'

import type { Project } from '~/models'

import styles from './styles/PopularProject.css?inline'

export type PopularProject = {
  project: Project
}

const dateOpts: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'utc',
}

export const PopularProject = component$(({ project }: PopularProject) => {
  useStyles$(styles)

  const { id, image, title, author, publishedDate } = project
  const dateArticle = new Date(publishedDate).toLocaleDateString(
    'en-US',
    dateOpts
  )

  return (
    <article class="PopularProject">
      <img class="PopularProject-image" src={image} title={title} alt={title} />
      <Link href={`/projects/${id}`} class="PopularProject-content">
        <h3 class="PopularProject-title">{title}</h3>
        <div class="PopularProject-metainfo">
          <div class="PopularProject-option">
            <Icon title="Fecha de publicación" name="calendar" />
            <span>{dateArticle}</span>
          </div>
          <div class="PopularProject-option">
            <Icon title="Autor" name="user" />
            <span>{author}</span>
          </div>
        </div>
      </Link>
    </article>
  )
})
