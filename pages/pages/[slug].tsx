import { NextSeo } from 'next-seo'
import Single from '@/components/Layout/single'
import { GetStaticPaths, GetStaticProps } from 'next'
import Fetcher from '@/lib/fetcher'
import { parseMDXContent } from '@/lib/mdx'
import { IPage } from '@/interfaces/Page'
import { getOGImage, truncateText } from '@/utils'
import { SITE_URL, SEO_SNIPPET_LENGTH } from '@/constants'

interface IProps {
  page: IPage
}

const SingleWork = ({
  page: {
    title,
    date_updated,
    featured_image,
    content,
    excerpt,
    slug,
    og_image,
    seo_description,
  },
}: IProps) => {
  return (
    <>
      <NextSeo
        title={title}
        description={
          seo_description
            ? truncateText(seo_description, SEO_SNIPPET_LENGTH, false)
            : truncateText(excerpt, SEO_SNIPPET_LENGTH, false)
        }
        openGraph={{
          type: 'website',
          url: `${SITE_URL}/pages/${slug}`,
          title,
          description: seo_description
            ? truncateText(seo_description, SEO_SNIPPET_LENGTH, false)
            : truncateText(excerpt, SEO_SNIPPET_LENGTH, false),
          images: [
            {
              url: getOGImage(og_image, featured_image),
              width: 800,
              height: 600,
              alt: title,
            },
          ],
        }}
      />
      <Single
        title={title}
        date={date_updated}
        featuredImage={featured_image}
        content={content}
      />
    </>
  )
}

export default SingleWork

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: pages } = await Fetcher(
    `${process.env.NEXT_PUBLIC_API_URL}/items/pages?filter={"status":{"_eq": "published"}}`
  )

  const paths = pages.map((page) => ({
    params: { id: page.id, slug: page.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: rawPage } = await Fetcher(
    `${process.env.NEXT_PUBLIC_API_URL}/items/pages?filter={"slug":{"_eq":"${params.slug}"},"status":{"_eq": "published"}}`
  )

  const page = await parseMDXContent(rawPage)

  return {
    props: { page: page[0] },
  }
}
