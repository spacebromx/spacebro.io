import AuthorBox from '@/components/AuthorBox'
import Single from '@/components/Layout/single'
import { GetStaticProps, GetStaticPaths } from 'next'
import Fetcher from '@/lib/fetcher'
import { IPost } from '@/interfaces/Post'
import { parseMDXContent } from '@/lib/mdx'

interface IProps {
  post: IPost
}

export default function Post({
  post: { title, date_updated, featured_image, content },
}: IProps) {
  return (
    <Single
      title={title}
      date={date_updated}
      featuredImage={featured_image}
      content={content}
    >
      <AuthorBox />
    </Single>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: posts } = await Fetcher(
    `${process.env.NEXT_PUBLIC_API_URL}/items/articles?filter={"status":{"_eq": "published"}}`
  )

  const paths = posts.map((post: IPost) => ({
    params: { id: post.id, slug: post.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: rawPost } = await Fetcher(
    `${process.env.NEXT_PUBLIC_API_URL}/items/articles?filter={"slug":{"_eq":"${params.slug}"},"status":{"_eq": "published"}}`
  )

  const post = await parseMDXContent(rawPost)

  return {
    props: { post: post[0] },
  }
}
