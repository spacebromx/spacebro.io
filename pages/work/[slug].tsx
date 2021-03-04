import { NextSeo } from 'next-seo'
import Single from '@/components/Layout/single'
import AuthorBox from '@/components/AuthorBox'
import { GetStaticPaths, GetStaticProps } from 'next'
import Fetcher from '@/lib/fetcher'
import { parseMDXContent } from '@/lib/mdx'
import { IProject } from '@/interfaces/Project'
import { getOGImage, truncateText } from '@/utils'
import { SITE_URL, SEO_SNIPPET_LENGTH } from '@/constants'

interface IProps {
  project: IProject
}

const SingleWork = ({
  project: {
    title,
    date_updated,
    featured_image,
    content,
    excerpt,
    slug,
    seo_description,
    og_image,
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
          url: `${SITE_URL}/work/${slug}`,
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
      >
        <AuthorBox />
      </Single>
    </>
  )
}

export default SingleWork

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: projects } = await Fetcher(
    `${process.env.NEXT_PUBLIC_API_URL}/items/projects?filter={"status":{"_eq": "published"}}`
  )

  const paths = projects.map((project: IProject) => ({
    params: { id: project.id, slug: project.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: rawProject } = await Fetcher(
    `${process.env.NEXT_PUBLIC_API_URL}/items/projects?filter={"slug":{"_eq":"${params.slug}"},"status":{"_eq": "published"}}`
  )

  const project = await parseMDXContent(rawProject)

  return {
    props: { project: project[0] },
  }
}
