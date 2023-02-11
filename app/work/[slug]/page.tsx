import AuthorBox from '@components/Content/AuthorBox'
import { parseMDXContent } from '@lib/mdx'
import directus from '@lib/directus'
import TwitterCTA from '@components/Content/TwitterCTA'
import ArticleDetail from '@components/Content/ArticleDetail'

type TParams = { slug: string }

interface IProps {
  params: TParams
}

const ProjectDetail = async ({ params }: IProps) => {
  const { slug } = params

  const { data: rawProject } = await directus.items('projects').readByQuery({
    filter: { slug: { _eq: slug } },
    limit: 1,
  })
  const project = await parseMDXContent(rawProject)

  return (
    <div className="container mx-auto">
      <ArticleDetail post={project[0]} urlPrefix="work">
        <TwitterCTA />
        <AuthorBox />
      </ArticleDetail>
    </div>
  )
}

export default ProjectDetail
