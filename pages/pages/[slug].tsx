import Single from '@/components/Layout/single'
import { GetStaticPaths, GetStaticProps } from 'next'
import Fetcher from '@/lib/fetcher'
import { parseMDXContent } from '@/lib/mdx'
import { IPage } from '@/interfaces/Page'
import PagesService from '@/services/PagesService'

interface IProps {
  page: IPage
}

const SingleWork = ({ page }: IProps) => {
  return (
    <>
      <Single {...page} urlPrefix="pages" />
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
  const pagesService = PagesService.getInstance()
  const { data: rawPage } = await pagesService.getPage({
    quantity: 1,
    filter: {
      field: 'slug',
      value: `"${params.slug}"`,
    },
  })

  const page = await parseMDXContent(rawPage)

  return {
    props: { page: page[0] },
  }
}
