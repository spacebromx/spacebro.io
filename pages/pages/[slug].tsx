import Single from '@/components/Layout/single'
import { GetStaticPaths, GetStaticProps } from 'next'
import Fetcher from '@/lib/fetcher'
import { parseMDXContent } from '@/lib/mdx'
import { IPage } from '@/interfaces/Page'

interface IProps {
  page: IPage
}

const SingleWork = ({
  page: { title, date_updated, featured_image, content },
}: IProps) => {
  return (
    <div>
      <Single
        title={title}
        date={date_updated}
        featuredImage={featured_image}
        content={content}
      />
    </div>
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
