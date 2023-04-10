import { component$, useStyles$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { AvatarWithPublishedDate } from '~/components/Avatar'
import { parseDatePublished } from '~/utils/functions'
import { Icon } from './Icon'

import styles from './styles/CardBlog.css?inline'

export const CardBlog = component$(() => {
  useStyles$(styles)

  const image = 'https://source.unsplash.com/random'
  const published = parseDatePublished('12/04/2022')
  const readTime = '24'
  const title = 'Título de blog'

  return (
    <Link class="CardBlog" href={`/blog/1`}>
      <figure class="CardBlog-figure">
        <img class="CardBlog-image" loading="lazy" src={image} alt={title} />
      </figure>
      <div class="CardBlog-body">
        <div class="CardBlog-targets">
          <div class="CardBlog-target">
            <Icon
              class="CardBlog-target-icon"
              title="Tiempo de lectura"
              name="clock-2"
            />
            <time dateTime={`${readTime} min.`}>{readTime} min.</time>
          </div>
        </div>
        <div class="CardBlog-content">
          <h3 class="CardBlog-title text-ellipsis">{title}</h3>
          <p class="CardBlog-description text-ellipsis">
            Descripción del documento
          </p>
        </div>
        <div class="CardBlog-actions">
          <AvatarWithPublishedDate
            name="Julio Armando"
            publishedDate={published}
          />
        </div>
      </div>
    </Link>
  )
})
