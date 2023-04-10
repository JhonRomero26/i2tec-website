import { datePublishedOptions } from '~/utils/constants'

function parseDatePublished(date: string): string {
  return new Date(date).toLocaleDateString('en-US', datePublishedOptions)
}

export default parseDatePublished
