import directus from '@lib/directus'
import { IPost } from '@/types/Content'
import { NextSeo, NextSeoProps } from 'next-seo'
import { NEXT_SEO_DEFAULT } from '@/next-seo.config'
import { truncateText } from '@/utils'
import { SEO_SNIPPET_LENGTH } from '@/constants'

type TParams = { slug: string }

interface IProps {
  params: TParams
}

export default async function Head({ params }: IProps) {
  const { slug } = params

  const { data: project } = await directus.items('projects').readByQuery({
    filter: { slug: { _eq: slug } },
    limit: 1,
  })

  if (!project!.length) return null

  const { title, seo_description, excerpt } = (project as Array<IPost>)[0]

  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title,
    description: truncateText(
      seo_description || excerpt,
      SEO_SNIPPET_LENGTH,
      false
    ),
  }

  return <NextSeo useAppDir {...updateMeta} />
}
