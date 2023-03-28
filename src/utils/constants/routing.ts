import type { AppRoute, SocialRoute } from '~/utils/types'

export const APP_ROUTES: AppRoute[] = [
  {
    path: '/projects',
    label: 'Proyectos',
  },
  {
    path: '/blog',
    label: 'Blog',
  },
  {
    path: '/about-us',
    label: 'Nosotros',
  },
]

export const SOCIAL_ROUTES: SocialRoute[] = [
  {
    iconName: 'brand-facebook',
    path: 'https://facebook.com',
    label: 'Facebook',
  },
  {
    iconName: 'brand-instagram',
    path: 'https://instagram.com',
    label: 'Instagram',
  },
  {
    iconName: 'brand-github',
    path: 'https://github.com',
    label: 'Githuv',
  },
  {
    iconName: 'brand-dribbble',
    path: 'https://dribbble.com',
    label: 'Behance',
  },
]
