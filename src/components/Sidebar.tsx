import { $, component$, useSignal, useStyles$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { IconButton } from '~/components/Button'
import { Icon } from './Icon'
import { AvatarWithUsername } from '~/components/Avatar'

import styles from './styles/Sidebar.css?inline'
import { ADMIN_ROUTES } from '~/utils/constants'

export type SidebarProps = {
  class?: string
}

export const Sidebar = component$(({
  class: className = ''
}: SidebarProps) => {
  useStyles$(styles)
  const isOpenSidebar = useSignal<boolean>(false)

  const handleClick = $(() => (isOpenSidebar.value = !isOpenSidebar.value))

  return (
    <aside class={`Sidebar ${isOpenSidebar.value ? 'full' : ''} ${className}`}>
      <IconButton
        onClick$={handleClick}
        class="Sidebar-button"
        icon="chevron-right"
        ariaLabel="Desplegar barra lateral"
        type="secondary"
      />
      <div class="Sidebar-avatar">
        <AvatarWithUsername size="100%" name="Admin" />
      </div>
      <nav>
        <ul>
          {ADMIN_ROUTES.map((route) => (
            <li key={route.path}>
              <Link class="text-sm weight-700 Sidebar-link" href={route.path}>
                <Icon title={route.label} name={route.iconName} />
                <span class="Sidebar-link-label">{route.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
})
