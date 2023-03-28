import { component$, useStyles$ } from '@builder.io/qwik'
import { Slider, SlideItem } from '~/components/Slider'
import { PopularProject } from '~/components/PopularProject'
import { Link } from '@builder.io/qwik-city'

import type { DocumentHead } from '@builder.io/qwik-city'
import type { Project } from '~/models'

import styles from './styles/home.css?inline'
import data from '~/data/landing.json'
import { sliderHeroOptions$ } from '~/utils/constants'
import { Quality } from '~/components/Cuality'
import { ProjectsSlider } from '~/components/ProjectsSlider'

export default component$(() => {
  useStyles$(styles)

  return (
    <main>
      <section class="Home-hero">
        <div class="Home-hero-moot">
          <h2 class="Home-hero-title">Motivando la investigación</h2>
          <p>
            Lo que distingue al Centro de Investigación I2TEC es su enfoque
            centrado en la colaboración y la creatividad. Los investigadores son
            alentados a trabajar juntos en equipos interdisciplinarios, lo que
            les permite aprovechar una amplia gama de perspectivas y habilidades
            para abordar problemas complejos.
          </p>
        </div>
        <Slider selector="hero" options={sliderHeroOptions$}>
          {data.hero.map((item) => (
            <SlideItem key={item.id}>
              <img loading="lazy" src={item.image} />
            </SlideItem>
          ))}
        </Slider>
      </section>
      <ProjectsSlider />
      <section class="Home-popular">
        <h2 class="Home-popular-title">Proyectos destacados</h2>
        <div class="Home-popular-projects">
          {data.future.map((project: Project) => (
            <PopularProject key={project.id} project={project} />
          ))}
        </div>
      </section>
      <section class="Home-especial">
        <h2 class="Home-especial-title">
          Lo especial de I<sup>2</sup>TEC
        </h2>
        <div class="Home-especial-qualities">
          <Quality
            iconName="users"
            title="Personas"
            description="En I2TEC trabajamos con docentes y estudiantes que se dedican a desarrollar soluciones tecnológicas para mejorar la calidad de vida de las personas"
          />
          <Quality
            iconName="360-view"
            title="Personas"
            description="En I2TEC trabajamos con docentes y estudiantes que se dedican a desarrollar soluciones tecnológicas para mejorar la calidad de vida de las personas"
          />
          <img class="Home-especial-image" src="/images/i2tec.png" />
          <Quality
            iconName="atom"
            title="Personas"
            description="En I2TEC trabajamos con docentes y estudiantes que se dedican a desarrollar soluciones tecnológicas para mejorar la calidad de vida de las personas"
          />
          <Quality
            iconName="atom"
            title="Personas"
            description="En I2TEC trabajamos con docentes y estudiantes que se dedican a desarrollar soluciones tecnológicas para mejorar la calidad de vida de las personas"
          />
        </div>
      </section>
      <section class="Home-aboutus">
        <h2 class="Home-aboutus-title">
          Acercate a I<sup>2</sup>TEC
        </h2>
        <div class="Home-aboutus-sections">
          <Link href="/" class="prueba ">
            <img src="/images/prueba.jpg" />
            <div class="prueba-title">
              sdassfasdfaskdjflaksjd dasdasdas das flksjd asdlkfasjdl
            </div>
          </Link>
          <Link href="/" class="prueba ">
            <img src="/images/prueba.jpg" />
            <div class="prueba-title">
              sdassfasdfaskdjflaksjd dasdasdas das flksjd asdlkfasjdl
            </div>
          </Link>
          <Link href="/" class="prueba ">
            <img src="/images/prueba.jpg" />
            <div class="prueba-title">
              sdassfasdfaskdjflaksjd dasdasdas das flksjd asdlkfasjdl
            </div>
          </Link>
        </div>
      </section>
    </main>
  )
})

export const head: DocumentHead = {
  title: 'Centro I2TEC',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
}
