import type { Route, RouteWithIcon, RouteWithImage } from '~/utils/types'

export const APP_ROUTES: Route[] = [
  {
    path: '/',
    label: 'Inicio',
  },
  {
    path: '/projects',
    label: 'Proyectos',
  },
  {
    path: '/about-us',
    label: 'Nosotros',
  },
]

export const SOCIAL_ROUTES: RouteWithIcon[] = [
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

export const ABOUT_ROUTES: RouteWithImage[] = [
  {
    label: 'Sobre nosotros',
    path: '/about-us',
    image: '/images/prueba.jpg',
  },
  {
    label: 'Docentes participantes',
    path: '/about-us/teachers',
    image: '/images/prueba.jpg',
  },
  {
    label: 'Docentes participantes',
    path: '/about-us/teachers',
    image: '/images/prueba.jpg',
  },
]

export const ADMIN_ROUTES: RouteWithIcon[] = [
  {
    label: 'Dashboard',
    path: '/admin/dashboard',
    iconName: 'chart-donut-3',
  },
  {
    label: 'Proyectos',
    path: '/admin/projects',
    iconName: 'briefcase',
  },
  {
    label: 'Noticias',
    path: '/admin/news',
    iconName: 'news',
  },
  {
    label: 'Usuarios',
    path: '/admin/users',
    iconName: 'users',
  },
]
