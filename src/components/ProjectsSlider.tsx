import { component$, useStyles$ } from '@builder.io/qwik'
import { SlideItem, Slider } from './Slider'
import { CardProject } from './CardProject'
import { Icon } from './Icon'
import { Link } from '@builder.io/qwik-city'

import type { Project } from '~/models'

import styles from './styles/ProjectsSlider.css?inline'
import { sliderProjectsOptions$ } from '~/utils/constants'
import data from '~/data/landing.json'

export type ProjectsSliderProps = {
  title?: string
}

export const ProjectsSlider = component$(
  ({ title = 'Proyectos' }: ProjectsSliderProps) => {
    useStyles$(styles)

    return (
      <section class="ProjectsSlider">
        <div class="ProjectsSlider-header">
          <h2 class="ProjectsSlider-title">{title}</h2>
          <Link href="/projects">Ver más</Link>
        </div>
        <Slider
          selector="proyects"
          options={sliderProjectsOptions$}
          scaleEffect
        >
          {data.projects.map((project: Project) => (
            <SlideItem key={project.id}>
              <CardProject project={project} />
            </SlideItem>
          ))}
          <Icon
            q:slot="prev-btn"
            title="Anterior slide"
            name="chevron-left"
            class="swiper-button-prev"
          />
          <Icon
            q:slot="next-btn"
            title="Siguiente slide"
            name="chevron-right"
            class="swiper-button-next"
          />
        </Slider>
      </section>
    )
  }
)
