import { component$, useStyles$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { Title } from './Typography'
import { parseDatePublished } from '~/utils/functions'
import { Icon } from './Icon'

import styles from './styles/CardNews.css?inline'

export type CardNewsProps = {
  href: string
  title: string
  image: string
  publishedDate: string
  description: string
}

export const CardNews = component$(
  ({ title, image, href, publishedDate, description }: CardNewsProps) => {
    useStyles$(styles)
    const published = parseDatePublished(publishedDate)

    return (
      <Link href={href} rel="noreferrerr">
        <article class="CardNews">
          <picture class="CardNews-picture">
            <img class="CardNews-image" src={image} alt={title} />
          </picture>
          <div class="CardNews-body">
            <Title
              class="CardNews-title"
              tag="h3"
              fontSize="lg"
              fontWeight="700"
            >
              {title}
            </Title>
            <p class="text-sm">{description}</p>
            <div class="CardNews-meta">
              <span class="CardNews-metainfo">
                <Icon title="Fecha de publicación" name="calendar" />
                <time class="text-sm" dateTime={published}>
                  {published}
                </time>
              </span>
            </div>
          </div>
        </article>
      </Link>
    )
  }
)
