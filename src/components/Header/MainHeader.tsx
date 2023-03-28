import { $, component$, useSignal, useStyles$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'

import styles from '../styles/MainHeader.css?inline'
import { APP_ROUTES } from '~/utils/constants'
import Button from '../Button/Button'

const MainHeader = component$(() => {
  useStyles$(styles)
  const isOpenMenu = useSignal<boolean>(false)

  const handleToggleMenu$ = $(() => {
    isOpenMenu.value = !isOpenMenu.value
    document.body.classList.toggle('cover-protector-body')
  })

  return (
    <header class="MainHeader">
      <nav class="MainHeader-navigator">
        <figure class="MainHeader-brand">
          <Link href="/">
            <img
              class="MainHeader-brand-logo"
              src="/images/i2tec-logo.png"
              alt="Logo del centro de investigación, innovación y tecnología"
            />
          </Link>
        </figure>

        <Button
          onClick$={handleToggleMenu$}
          class="burger-btn"
          icon="menu-2"
          aria-label="Menu"
        />

        <ul class={`navigator-menu${isOpenMenu.value ? ' active' : ''}`}>
          {APP_ROUTES.map((route) => (
            <li class="menu-item" key={route.path}>
              <Link class="menu-item-link" href={route.path}>
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {isOpenMenu.value && (
        <div class="cover-protector" onClick$={handleToggleMenu$} />
      )}
    </header>
  )
})

export default MainHeader
