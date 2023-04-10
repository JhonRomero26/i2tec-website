import { component$, useSignal, useStyles$ } from '@builder.io/qwik'
import { Button } from '~/components/Button'
import { TitleWithTrigger } from '~/components/TitleAndTrigger'
import { Icon } from '~/components/Icon'
import { GridView } from '~/components/GridView'
import { CardNews } from '~/components/CardNews'
import { ModifyWrapper } from '~/components/ModifyWrapper'

import styles from './styles.css?inline'
import data from '~/data/landing.json'

export default component$(() => {
  useStyles$(styles)
  const news = useSignal(data.news)

  return (
    <div>
      <TitleWithTrigger title="Noticias">
        <Button type="primary" q:slot="trigger">
          <Icon q:slot="icon" title="Agregar nueva noticia" name="plus" />
          Agregar
        </Button>
      </TitleWithTrigger>
      <GridView minWidth="300px">
        {news.value.map((item) => (
          <ModifyWrapper handleDelete$={() => {}} key={item.id}>
            <CardNews
              href={`/admin/news/${item.id}`}
              title={item.title}
              image={item.image}
              publishedDate={item.publishedDate}
            />
          </ModifyWrapper>
        ))}
      </GridView>
    </div>
  )
})
