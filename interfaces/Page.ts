export interface IPage {
  content: string
  date_updated: string
  featured_image: string
  id: number
  slug: string
  status: string
  title: string
  excerpt: string
  seo_description?: string
  og_image?: string
}

export interface IGeneratedPageProps {
  params: {
    id: string
    slug: string
  }
}
