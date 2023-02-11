export interface IPost {
  content: string
  date_created: string
  date_updated: string
  excerpt: string
  featured: boolean
  featured_image: string
  id: number
  slug: string
  status: string
  title: string
  seo_description?: string
  og_image?: string
  date?: string
  url_prefix?: string
}

export interface IProject {
  content: string
  date_updated: string
  excerpt: string
  featured_image: string
  id: number
  slug: string
  status: string
  title: string
  seo_description?: string
  og_image?: string
}
