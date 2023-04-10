import { component$, useStyles$ } from '@builder.io/qwik'
import { Slider, SlideItem } from '~/components/Slider'
import { PopularProject } from '~/components/PopularProject'
import { Link } from '@builder.io/qwik-city'

import type { DocumentHead } from '@builder.io/qwik-city'
import type { Project } from '~/models'

import styles from './styles.css?inline'
import data from '~/data/landing.json'
import { homeHeroOptionsSlider$ } from '~/utils/constants'
import { Quality } from '~/components/Cuality'
import { ProjectsSlider } from '~/components/ProjectsSlider'
import { ABOUT_ROUTES } from '~/utils/constants/routing'

export default component$(() => {
  useStyles$(styles)

  return (
    <main>
      <section class="container-full Home-hero">
        <div class="Home-hero-moot">
          <h2 class="Home-hero-title">
            Bienvenidos al centro I<sup>2</sup>TEC
          </h2>
          <p class="Home-hero-description">
            Trabajamos incansablemente para impulsar el futuro mediante el
            desarrollo de tecnologías innovadoras y soluciones creativas.
            Estamos comprometidos en mejorar la vida de las personas a través
            del conocimiento y la innovación constante.
          </p>
        </div>
        <Slider selector="hero" options={homeHeroOptionsSlider$}>
          {data.hero.map((item) => (
            <SlideItem key={item.id}>
              <img loading="lazy" src={item.image} />
            </SlideItem>
          ))}
        </Slider>
      </section>
      <ProjectsSlider />
      <section class="section Home-popular">
        <div class="container">
          <h2 class="Home-popular-title">Proyectos destacados</h2>
          <div class="Home-popular-projects">
            {data.future.map((project: Project) => (
              <PopularProject key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      <section class="section Home-especial">
        <div class="container">
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
        </div>
      </section>
      <section class="section section-final Home-aboutus">
        <div class="container">
          <h2 class="Home-aboutus-title">
            Acercate a I<sup>2</sup>TEC
          </h2>
          <div class="Home-aboutus-sections">
            {ABOUT_ROUTES.map((route) => (
              <Link key={route.path} href={route.path} class="prueba">
                <img src={route.image} />
                <div class="text-3xl md:text-base lg:text-3xl weight-700 prueba-title text-ellipsis">
                  {route.label}
                </div>
              </Link>
            ))}
          </div>
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
