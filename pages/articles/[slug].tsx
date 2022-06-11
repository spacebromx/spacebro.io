import AuthorBox from '@/components/AuthorBox'
import TwitterCTA from '@/components/TwitterCTA'
import Single from '@/components/Layout/single'
import { GetStaticProps, GetStaticPaths } from 'next'
import Fetcher from '@/lib/fetcher'
import { IPost } from '@/interfaces/Post'
import { parseMDXContent } from '@/lib/mdx'
import ArticlesService from '@/services/ArticlesService'
import { IGeneratedPageProps } from '@/interfaces/Page'

interface IProps {
  post: IPost
}

export default function Post({ post }: IProps) {
  return (
    <Single {...post} urlPrefix="articles" showViewCount>
      <TwitterCTA />
      <AuthorBox />
    </Single>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesService = ArticlesService.getInstance()
  const { data: posts } = await articlesService.getPosts({
    quantity: 1000,
  })

  const paths: Array<IGeneratedPageProps> = posts?.map((post: IPost) => ({
    params: { id: post.id.toString(), slug: post.slug },
  }))

  return { paths: paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articlesService = ArticlesService.getInstance()
  const { data: rawPost } = await articlesService.getPosts({
    quantity: 1,
    filter: {
      field: 'slug',
      value: `"${params.slug}"`,
    },
  })

  const post = await parseMDXContent(rawPost)

  return {
    props: { post: post[0] },
  }
}
