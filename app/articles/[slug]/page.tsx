import directus from '@lib/directus'
import AuthorBox from '@components/Content/AuthorBox'
import TwitterCTA from '@components/Content/TwitterCTA'
import ArticleDetail from '@components/Content/ArticleDetail'
import { parseMDXContent } from '@/lib/mdx'
import { NextSeo, NextSeoProps } from 'next-seo'
import { NEXT_SEO_DEFAULT } from '@/next-seo.config'
import { getOGImage, truncateText } from '@/utils'
import { SEO_SNIPPET_LENGTH } from '@/constants'
import { IPost } from '@/types/Content'

type TParams = { slug: string }

interface IProps {
  params: TParams
}

const PostDetail = async ({ params }: IProps) => {
  const { slug } = params

  const { data: rawPost } = await directus.items('articles').readByQuery({
    filter: { slug: { _eq: slug } },
    limit: 1,
  })
  const post: Array<IPost> = await parseMDXContent(rawPost)

  const {
    title,
    seo_description,
    excerpt,
    og_image,
    featured_image: featuredImage,
  } = post[0]
  const urlPrefix = 'articles'

  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title,
    description: truncateText(
      seo_description || excerpt,
      SEO_SNIPPET_LENGTH,
      false
    ),
    openGraph: {
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${urlPrefix}/${slug}`,
      title,
      description: seo_description
        ? truncateText(seo_description, SEO_SNIPPET_LENGTH, false)
        : truncateText(excerpt, SEO_SNIPPET_LENGTH, false),
      images: [
        {
          url: getOGImage(og_image as string, featuredImage),
          width: 800,
          height: 600,
          alt: title,
        },
      ],
    },
  }

  return (
    <>
      <NextSeo useAppDir {...updateMeta} />
      <div className="container mx-auto">
        <ArticleDetail post={post[0]} urlPrefix="articles">
          <TwitterCTA />
          <AuthorBox />
        </ArticleDetail>
      </div>
    </>
  )
}

export default PostDetail
