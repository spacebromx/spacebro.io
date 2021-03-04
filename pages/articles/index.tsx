import Post from '@/components/Post'
import TopArticles from '@/components/TopArticles'
import { GetStaticProps } from 'next'
import { MAX_NORMAL_EXCERPT_CHARS } from '@/constants.ts'
import { truncateText } from 'utils'
import Fetcher from '@/lib/fetcher'

const mockData = new Array(20).fill({
  title:
    'This is an example of a post title that will be populated from the database',
  url: '/',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n' +
    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
    'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
    'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
})

export default function Articles({ posts }) {
  return (
    <div className="posts-listing grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-24 md:gap-12 lg:gap-24 mx-4 md:mx-8 lg:mx-0 mt-14 mb-16 lg:my-20">
      <div className="col-span-1 md:col-span-4 lg:col-span-8">
        <h2 className="text-3xl lg:text-5xl font-bold leading-10 lg:leading-snug mb-12 lg:mb-14 bg-clip-text text-transparent bg-gradient-to-r from-pink-900 via-teal-600 to-teal-900">
          All Articles
        </h2>
        <div className="space-y-16">
          {posts.map(({ title, content, slug, excerpt }, index) => {
            const trimmedExcerpt = `${excerpt.substr(
              0,
              MAX_NORMAL_EXCERPT_CHARS
            )} […]`

            return (
              <Post
                key={index}
                url={`/articles/${slug}`}
                title={title}
                excerpt={truncateText(excerpt, MAX_NORMAL_EXCERPT_CHARS)}
              />
            )
          })}
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-4">
        <TopArticles />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data: posts } = await Fetcher(
    `${process.env.NEXT_PUBLIC_API_URL}/items/articles?filter={"status":{"_eq": "published"}}&limit=6`
  )

  return {
    props: { posts },
    revalidate: 1,
  }
}
