import {
  $,
  component$,
  useSignal,
  useStyles$,
  useTask$,
} from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'
import { CardProject } from '~/components/CardProject'
import { useInput } from '~/hooks'
import { SearchBox } from '~/components/SearchBox'

import type { Project } from '~/models'

import styles from './styles.css?inline'
import data from '~/data/landing.json'

export default component$(() => {
  useStyles$(styles)
  const { url } = useLocation()
  const searchParam: string = url.searchParams.get('search') ?? ''

  const search = useInput(searchParam)
  const projects = useSignal<Project[]>([])

  const filterProjects = $(() => {
    projects.value = data.projects

    if (search.value.length !== 0)
      projects.value = data.projects.filter(
        (project) =>
          project.title.toLowerCase().includes(search.value.toLowerCase()) ||
          project.author.toLowerCase().includes(search.value.toLowerCase())
      )
  })

  useTask$(() => {
    filterProjects()
  })

  return (
    <main>
      <div class="section Projects-head">
        <div class="Projects-head-inspiration">
          <h2 class="Projects-title">
            Explorando la creatividad y la innovación
          </h2>
          <p>
            Una selección de proyectos excepcionales que están cambiando el
            mundo y abriendo nuevas posibilidades para el futuro dentro de I
            <sup>2</sup>
            TEC
          </p>
        </div>
      </div>
      <div class="section Projects-container">
        <div class="container ">
          <SearchBox
            title="Busquemos proyectos:"
            placeholder="María Gómez o Impresora 3D"
            onInput$={search.onInput$}
            value={search.value}
          />
        </div>
        <div class="container">
          <section class="section-final Projects-shoot">
            {projects.value.length !== 0 ? (
              <div class="Projects-shoot-container">
                {projects.value.map((project) => (
                  <CardProject key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div>Sin contenido</div>
            )}
          </section>
        </div>
      </div>
    </main>
  )
})
