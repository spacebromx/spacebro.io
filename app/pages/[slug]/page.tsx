import { parseMDXContent } from '@lib/mdx'
import directus from '@lib/directus'
import ArticleDetail from '@components/Content/ArticleDetail'
import TwitterCTA from '@components/Content/TwitterCTA'
import AuthorBox from '@components/Content/AuthorBox'

type TParams = { slug: string }

interface IProps {
  params: TParams
}

const SingleWork = async ({ params }: IProps) => {
  const { slug } = params

  const { data: rawPage } = await directus.items('pages').readByQuery({
    filter: { slug: { _eq: slug } },
    limit: 1,
  })
  const page = await parseMDXContent(rawPage)

  return (
    <div className="container mx-auto">
      <ArticleDetail post={page[0]} urlPrefix="work">
        <TwitterCTA />
        <AuthorBox />
      </ArticleDetail>
    </div>
  )
}

export default SingleWork
