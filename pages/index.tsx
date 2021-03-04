import { GetStaticProps } from 'next'
import Hero from '@/components/Hero'
import LatestPosts from '@/components/LatestPosts'
import SubscriptionForm from '@/components/SubscriptionForm'
import LatestProjects from '@/components/LatestProjects'
import Fetcher from '@/lib/fetcher'
import { IPost } from '@/interfaces/Posts'

interface IProps {
  featuredPost: IPost
  posts: Array<IPost>
}

export default function Home({ featuredPost, posts }: IProps) {
  return (
    <div>
      <Hero />
      <LatestPosts featuredPost={featuredPost} posts={posts} />
      <LatestProjects />
      <div className="mb-14 md:mb-24 lg:mb-40">
        <SubscriptionForm />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const [featuredPost, posts] = await Promise.all([
    Fetcher(
      `${process.env.NEXT_PUBLIC_API_URL}/items/articles?filter={"status":{"_eq": "published"},"featured":{"_eq": true}}&limit=1`
    ),
    Fetcher(
      `${process.env.NEXT_PUBLIC_API_URL}/items/articles?filter={"status":{"_eq": "published"},"featured":{"_eq": false}}&limit=6`
    ),
  ])

  return {
    props: {
      featuredPost: featuredPost.data[0],
      posts: posts.data,
    },
    revalidate: 1,
  }
}
