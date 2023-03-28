import type Category from './Category'

interface Project {
  id: string
  title: string
  description: string
  image: string
  author: string
  publishedDate: string
  repository: string
  category?: Category[]
}

export default Project
