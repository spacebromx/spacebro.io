import {
  MAX_NORMAL_EXCERPT_CHARS,
  MAX_FEATURED_EXCERPT_CHARS,
} from '../constants'
import Post from '@/components/Post'

const LatestPosts = ({ featuredPost, posts }) => {
  const { id, title, featured, excerpt, slug } = featuredPost[0]
  const trimmedExcerpt = `${excerpt.substr(0, MAX_FEATURED_EXCERPT_CHARS)} […]`
  return (
    <div className="px-4 md:px-8 lg:px-0">
      <Post
        key={id}
        isFeatured={featured}
        title={title}
        excerpt={trimmedExcerpt}
        url={`/articles/${slug}`}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-24 my-24 lg:my-44">
        {posts.map((post) => {
          const { id, title, excerpt, slug } = post
          const trimmedExcerpt = `${excerpt.substr(
            0,
            MAX_NORMAL_EXCERPT_CHARS
          )} […]`

          return (
            <Post
              key={id}
              title={title}
              excerpt={trimmedExcerpt}
              url={`/articles/${slug}`}
            />
          )
        })}
      </div>
    </div>
  )
}

export default LatestPosts
