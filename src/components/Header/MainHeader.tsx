import { $, component$, useSignal, useStyles$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'

import styles from '../styles/MainHeader.css?inline'
import { APP_ROUTES, SOCIAL_ROUTES } from '~/utils/constants'
import { IconButton } from '~/components/Button'
import { Icon } from '../Icon'

const MainHeader = component$(() => {
  useStyles$(styles)
  const isOpenMenu = useSignal<boolean>(false)

  const handleToggleMenu$ = $(() => {
    isOpenMenu.value = !isOpenMenu.value
    document.body.classList.toggle('cover-protector-body')
  })

  return (
    <header class="MainHeader">
      <div class="MainHeader-header">
        <div class="container navigate">
          <figure class="MainHeader-brand">
            <Link href="/">
              <img
                class="MainHeader-brand-logo"
                src="/images/i2tec-logo.png"
                alt="Logo del centro de investigación, innovación y tecnología"
              />
            </Link>
          </figure>

          <IconButton
            onClick$={handleToggleMenu$}
            class="burger-btn"
            icon="menu-2"
            ariaLabel="Menu"
          />

          <nav
            class={`MainHeader-navigator${isOpenMenu.value ? ' active' : ''}`}
          >
            <div>
              <ul class="navigator-menu">
                {APP_ROUTES.map((route) => (
                  <li class="menu-item" key={route.path}>
                    <Link class="item-link" href={route.path}>
                      {route.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div class="navigator-actions">
              <div class="navigator-socialNetworks">
                <div class="navigator-socialNetworks-title">
                  Nuestras redes sociales
                </div>
                <ul class="navigator-socialNetworks-menu">
                  {SOCIAL_ROUTES.map((route) => (
                    <li key={route.path}>
                      <a href={route.path} rel="noreferrer" target="_blank">
                        <Icon title={route.label} name={route.iconName} />
                        <span class="sr-only">{route.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {isOpenMenu.value && (
        <div class="cover-protector" onClick$={handleToggleMenu$} />
      )}
    </header>
  )
})

export default MainHeader
