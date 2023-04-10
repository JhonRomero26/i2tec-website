import { component$, useStyles$ } from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'
import { AvatarWithPublishedDate } from '~/components/Avatar'
import { ProjectsSlider } from '~/components/ProjectsSlider'
import { Button } from '~/components/Button'

import type { Project } from '~/models'

import styles from './styles.css?inline'
import dataLanding from '~/data/landing.json'

const dateOpts: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'utc',
}

export default component$(() => {
  useStyles$(styles)
  const location = useLocation()
  const { params } = location
  const project: Project = dataLanding.projects.find(
    (item) => item.id === params.id
  ) as Project
  const dateArticle = new Date(project.publishedDate).toLocaleDateString(
    'en-US',
    dateOpts
  )

  return (
    <main>
      <section class="section ProjectDetail">
        <div class="container ProjectDetail-container">
          <AvatarWithPublishedDate
            name={project.author}
            publishedDate={dateArticle}
          />

          <div class="ProjectDetail-body">
            <h1 class="ProjectDetail-title">{project.title}</h1>
            <p class="ProjectDetail-description">{project.description}</p>

            <figure class="ProjectDetail-figure">
              <img class="ProjectDetail-image" src={project.image} />
              <Button
                class="ProjectDetail-button"
                href={project.repository}
                type="primary"
              >
                Vér proyecto
              </Button>
            </figure>
          </div>
        </div>
      </section>

      <ProjectsSlider title="Más proyectos" />
    </main>
  )
})
