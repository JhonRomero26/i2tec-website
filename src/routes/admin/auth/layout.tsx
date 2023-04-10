import { Slot, component$, useStyles$ } from '@builder.io/qwik'

import styles from './styles.css?inline'

export default component$(() => {
  useStyles$(styles)

  return (
    <main class="Auth">
      <div class="Auth-container">
        <Slot />
      </div>
    </main>
  )
})
