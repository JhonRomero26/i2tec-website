import type { IconNames } from '~/utils/types'

export type Route = {
  path: string
  label: string
}

export type RouteWithIcon = {
  iconName: IconNames
} & Route

export type RouteWithImage = {
  image: string
} & Route
