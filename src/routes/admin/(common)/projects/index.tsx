import { component$, useSignal, useStyles$ } from '@builder.io/qwik'

import styles from './styles.css?inline'
import { GridView } from '~/components/GridView'
import { CardProject } from '~/components/CardProject'
import data from '~/data/landing.json'
import { TitleWithTrigger } from '~/components/TitleAndTrigger'
import { Button } from '~/components/Button'
import { Icon } from '~/components/Icon'
import { ModifyWrapper } from '~/components/ModifyWrapper'

export default component$(() => {
  const projects = useSignal(data.projects)
  useStyles$(styles)

  return (
    <div>
      <TitleWithTrigger title="Proyectos">
        <Button type="primary" q:slot="trigger">
          <Icon q:slot="icon" title="Agregar nuevo proyecto" name="plus" />
          Agregar
        </Button>
      </TitleWithTrigger>
      <GridView minWidth="300px">
        {projects.value.map((project) => (
          <ModifyWrapper handleDelete$={() => {}} key={project.id}>
            <CardProject
              href={`/admin/projects/${project.id}`}
              title={project.title}
              author={project.author}
              image={project.image}
              publishedDate={project.publishedDate}
            />
          </ModifyWrapper>
        ))}
      </GridView>
    </div>
  )
})
