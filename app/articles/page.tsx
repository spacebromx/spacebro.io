import directus from '@lib/directus'
import Post from '@components/Content/Post'
import readingTime from 'reading-time'
import { MAX_NORMAL_EXCERPT_CHARS } from '@/constants'
import { truncateText } from '@/utils'
import TopArticles from '@components/Content/TopArticles'
import { IPost } from '@/types/Content'

const ArticlesPage = async () => {
  const { data: posts } = await directus.items('articles').readByQuery({
    // @ts-ignore
    sort: ['-date_created'],
    limit: 6,
  })

  return (
    <div className="container mx-auto">
      <div className="posts-listing grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-24 md:gap-12 lg:gap-24 mx-4 md:mx-8 lg:mx-0 mt-14 mb-16 lg:my-20">
        <div className="col-span-1 md:col-span-4 lg:col-span-8">
          <h2 className="text-3xl lg:text-5xl font-bold leading-10 lg:leading-snug mb-12 lg:mb-14 bg-clip-text text-transparent bg-gradient-to-r from-pink-900 via-teal-600 to-teal-900">
            All Articles
          </h2>
          <div className="space-y-16">
            {(posts as Array<IPost>)!.map(
              ({ title, content, slug, excerpt, featured_image }) => {
                return (
                  <Post
                    key={slug}
                    url={`/articles/${slug}`}
                    title={title}
                    excerpt={truncateText(excerpt, MAX_NORMAL_EXCERPT_CHARS)}
                    readingTime={readingTime(content).text}
                    featuredImage={featured_image}
                  />
                )
              }
            )}
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-4">
          <TopArticles articles={posts as Array<IPost>} />
        </div>
      </div>
    </div>
  )
}

export default ArticlesPage
