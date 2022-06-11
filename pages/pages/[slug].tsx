import Single from '@/components/Layout/single'
import { GetStaticPaths, GetStaticProps } from 'next'
import { parseMDXContent } from '@/lib/mdx'
import { IGeneratedPageProps, IPage } from '@/interfaces/Page'
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
  const pagesService = PagesService.getInstance()
  const { data: pages } = await pagesService.getPage({
    quantity: 100,
  })

  const paths: Array<IGeneratedPageProps> = pages.map((page) => ({
    params: { id: page.id.toString(), slug: page.slug },
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
