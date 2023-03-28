import { $, component$, useSignal, useStyles$ } from '@builder.io/qwik'
import { CardProject } from '~/components/CardProject'

import styles from '../styles/Projects.css?inline'
import data from '~/data/landing.json'
import type { Project } from '~/models'
import { Input } from '~/components/Input'

export default component$(() => {
  useStyles$(styles)
  const search = useSignal<string>('')
  const projects = useSignal<Project[]>(data.projects)

  const filterProjects = (): Project[] => {
    if (search.value !== '') {
      const filteredProjects = projects.value.filter(
        (project) =>
          project.title.toLowerCase().includes(search.value.toLowerCase()) ||
          project.author.toLowerCase().includes(search.value.toLowerCase())
      )

      return filteredProjects
    }

    return projects.value
  }

  const handleInputChange = $((e: Event) => {
    const { value } = e.target as HTMLInputElement
    search.value = value
  })

  return (
    <div class="Projects">
      <h2 class="Projects-title">Todos los proyectos</h2>
      <aside class="Projects-filter">
        <label for="search" class="Projects-filter-search">
          <span>Busqueda:</span>
          <Input
            id="search"
            placeholder="Busquemos el proyecto..."
            onInput$={handleInputChange}
            value={search.value}
          />
        </label>
      </aside>
      <main>
        <section class="Projects-shoot">
          <div class="Projects-shoot-container">
            {filterProjects().map((project) => (
              <CardProject key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
})
