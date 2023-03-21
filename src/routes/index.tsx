import { component$, useStyles$ } from '@builder.io/qwik'

import type { DocumentHead } from '@builder.io/qwik-city'

import styles from './styles/home.css?inline'

export default component$(() => {
  useStyles$(styles)

  return <main>Home</main>
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
