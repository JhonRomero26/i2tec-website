import { component$, useStyles$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { Icon } from './Icon'

import styles from './styles/Footer.css?inline'
import { APP_ROUTES, SOCIAL_ROUTES } from '~/utils/constants'

export const Footer = component$(() => {
  useStyles$(styles)

  return (
    <footer aria-label="Site Footer" class="Footer">
      <div class="Footer-container">
        <div class="Footer-brand">
          <img
            loading="lazy"
            src="/images/i2tec-logo.png"
            alt="Logo del centro de investigación, innovación y tecnología"
          />
        </div>

        <p class="Footer-callToAction">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          consequuntur amet culpa cum itaque neque.
        </p>

        <nav aria-label="Footer Nav" class="Footer-navigator">
          <ul class="Footer-navigator-menu">
            {APP_ROUTES.map((route) => (
              <li key={route.path}>
                <Link href={route.path}>{route.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul class="Footer-navigator-social">
          {SOCIAL_ROUTES.map((route) => (
            <li key={route.path}>
              <a href={route.path} rel="noreferrer" target="_blank">
                <span class="sr-only">{route.label}</span>
                <Icon title={route.label} name={route.iconName} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
})
