import { GetStaticProps } from 'next'
import Hero from '@/components/Hero'
import LatestPosts from '@/components/LatestPosts'
import SubscriptionForm from '@/components/SubscriptionForm'
import LatestProjects from '@/components/LatestProjects'

export default function Home({ featuredPost, posts }) {
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
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/items/articles?filter={"featured":{"_eq": true}}&limit=1`
    ).then((r) => r.json()),
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/items/articles?filter={"featured":{"_eq": false}}&limit=6`
    ).then((r) => r.json()),
  ])

  return {
    props: {
      featuredPost,
      posts,
    },
    revalidate: 1,
  }
}
