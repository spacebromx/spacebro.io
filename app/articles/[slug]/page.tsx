import directus from '@lib/directus'
import AuthorBox from '@components/Content/AuthorBox'
import TwitterCTA from '@components/Content/TwitterCTA'
import ArticleDetail from '@components/Content/ArticleDetail'
import { parseMDXContent } from '@/lib/mdx'

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
  const post = await parseMDXContent(rawPost)

  return (
    <>
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
