import { $, component$, useSignal, useStyles$ } from '@builder.io/qwik'
import { SearchBox } from '../SearchBox'
import { useInput } from '~/hooks'

import styles from '../styles/AdminHeader.css?inline'
import { IconButton, LinkButton } from '../Button'

const AdminHeader = component$(() => {
  useStyles$(styles)
  const search = useInput('')
  const searchOpen = useSignal<boolean>(false)

  const handleToggleSearch = $(() => (searchOpen.value = !searchOpen.value))

  return (
    <header class="AdminHeader">
      <LinkButton type="default" to="/">
        Página principal
      </LinkButton>
      <IconButton
        type="default"
        onClick$={handleToggleSearch}
        ariaLabel="Buscar"
        icon="search"
      />
      <div class={`AdminHeader-search ${searchOpen.value ? 'active' : ''}`}>
        <IconButton
          type="default"
          onClick$={handleToggleSearch}
          ariaLabel="Regresar"
          icon="chevron-left"
        />
        <SearchBox
          placeholder="proyecto: Proyecto 3D"
          value={search.value}
          onInput$={search.onInput$}
        />
      </div>
    </header>
  )
})

export default AdminHeader
